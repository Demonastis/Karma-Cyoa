
const $ = s => document.querySelector(s);
const clone = o => JSON.parse(JSON.stringify(o));
const DEFAULT = clone(window.KARMA_DATA);
let data = loadData(), selected = new Set(), points = Number(localStorage.getItem("karma-points") ?? 0);
let stats = loadStats(), attributePointsBought = Number(localStorage.getItem("karma-attribute-points-bought") ?? 0);
let attributePointsSold = Number(localStorage.getItem("karma-attribute-points-sold") ?? 0);
let appearanceEthnicity = localStorage.getItem("karma-appearance-ethnicity") || "";
const openGroups = new Set(), openSections = new Set();
let statsOpen = false;
function addDefaultModifiers(content) {
    const defaultItems = new Map(DEFAULT.sections.flatMap(section => section.items.map(item => [item.id, item])));
    content.sections?.forEach(section => section.items?.forEach(item => {
        const source = defaultItems.get(item.id);
        if (item.modifiers === undefined && source?.modifiers) item.modifiers = clone(source.modifiers);
    }));
    const ethnicity = content.sections.find(section => section.id === "appearance-ethnicity");
    if (ethnicity) ethnicity.items = [];
    return content;
}
function migratePatronSections(content) {
    const oldAlignment = content.sections.find(section => section.id === "patron-alignment");
    if (!oldAlignment) return content;
    if (oldAlignment?.items.some(item => item.id.startsWith("alignment-"))) return content;
    const oldPatrons = new Map((oldAlignment?.items || []).map(item => [item.id, item]));
    const newPatrons = clone(DEFAULT.sections.find(section => section.id === "patron-choices"));
    const defaultPatronIds = new Set(newPatrons.items.map(item => item.id));
    newPatrons.items.forEach(item => {
        const old = oldPatrons.get(item.id);
        if (old) Object.assign(item, clone(old));
    });
    oldPatrons.forEach((item, id) => {
        if (!defaultPatronIds.has(id)) newPatrons.items.push(clone(item));
    });
    const alignment = clone(DEFAULT.sections.find(section => section.id === "patron-alignment"));
    const alignmentIndex = content.sections.findIndex(section => section.id === "patron-alignment");
    if (alignmentIndex < 0) {
        const pastIndex = content.sections.findIndex(section => section.id === "karma");
        content.sections.splice(pastIndex < 0 ? 0 : pastIndex, 0, alignment, newPatrons);
    } else {
        content.sections.splice(alignmentIndex, 1, alignment, newPatrons);
    }
    content.sections = content.sections.filter((section, index) =>
        section.id !== "patron-choices" || index === content.sections.findIndex(item => item.id === "patron-choices")
    );
    return content;
}
function placePatronAfterPast(content) {
    const patronSections = content.sections.filter(section => section.id.startsWith("patron-"));
    if (!patronSections.length) return content;
    content.sections = content.sections.filter(section => !section.id.startsWith("patron-"));
    const pastIndex = content.sections.findIndex(section => section.id === "karma");
    content.sections.splice(pastIndex < 0 ? 0 : pastIndex + 1, 0, ...patronSections);
    return content;
}
function migrateSelectedPatron(selectedItems, oldData) {
    const patronSection = oldData.sections.find(section => section.id === "patron-alignment");
    const selectedIds = new Set(selectedItems);
    patronSection?.items.forEach(item => {
        if (item.id.startsWith("alignment-")) selectedIds.delete(item.id);
    });
    return selectedIds;
}
function loadData() {
    try {
        const saved = localStorage.getItem("karma-data");
        const base = localStorage.getItem("karma-data-base");
        const previousDefaults = base ? JSON.parse(base) : null;
        const localContent = saved ? migratePatronSections(JSON.parse(saved)) : clone(DEFAULT);
        const content = placePatronAfterPast(addDefaultModifiers(saved
            ? window.KARMA_CONTENT_SYNC.merge(DEFAULT, localContent, previousDefaults)
            : localContent));
        localStorage.setItem("karma-data", JSON.stringify(content));
        localStorage.setItem("karma-data-base", JSON.stringify(DEFAULT));
        return content;
    } catch { return clone(DEFAULT) }
}
function loadStats() { try { return JSON.parse(localStorage.getItem("karma-stats")) || {} } catch { return {} } }
function save() {
    localStorage.setItem("karma-data", JSON.stringify(data));
    localStorage.setItem("karma-points", String(points));
    localStorage.setItem("karma-stats", JSON.stringify(stats));
    localStorage.setItem("karma-attribute-points-bought", String(attributePointsBought));
    localStorage.setItem("karma-attribute-points-sold", String(attributePointsSold));
    localStorage.setItem("karma-appearance-ethnicity", appearanceEthnicity);
}
function escapeHTML(s = "") { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function costLabel(n) { return n > 0 ? `−${n} pts` : n < 0 ? `+${Math.abs(n)} pts` : "Free" }
function selectedPatron() {
    const section = data.sections.find(item => item.id === "patron-choices");
    return section?.items.find(item => selected.has(item.id));
}
function selectedAlignment() {
    return selectedPatron();
}
function sectionAvailable(section) {
    const patron = selectedPatron();
    const alignment = selectedAlignment();
    if (section.requiresPatron === true && !patron) return false;
    if (typeof section.requiresPatron === "string" && section.requiresPatron !== patron?.id) return false;
    if (section.requiresAlignment === true && !alignment) return false;
    if (typeof section.requiresAlignment === "string" && section.requiresAlignment !== alignment?.alignment) return false;
    return true;
}
function itemAvailable(section, item) {
    return sectionAvailable(section)
        && (section.id === "patron-choices" || !item.alignment || item.alignment === selectedAlignment()?.alignment || section.id === "patron-alignment")
        && (!item.requiresPatron || item.requiresPatron === selectedPatron()?.id);
}
function choiceIds(value) {
    return (Array.isArray(value) ? value : String(value || "").split(","))
        .map(id => String(id).trim())
        .filter(Boolean);
}
function findChoice(id) {
    for (const section of data.sections) {
        const item = section.items.find(choice => choice.id === id);
        if (item) return { section, item };
    }
    return null;
}
function choiceDisabledReason(section, item, selectedChoices = selected) {
    const unmetStat = Object.entries(item.requiresStats || {}).find(([id, minimum]) =>
        (Number(stats[id]) || 0) < Number(minimum)
    );
    if (unmetStat) {
        const attribute = data.stats?.attributes.find(entry => entry.id === unmetStat[0]);
        return `Requires ${Number(unmetStat[1])} or more ${attribute?.name || unmetStat[0]}.`;
    }
    const replacedIds = section.mode === "single"
        ? new Set(section.items.map(choice => choice.id))
        : new Set();
    const availableChoices = new Set([...selectedChoices].filter(id => !replacedIds.has(id)));
    if (selectedChoices.has(item.id)) availableChoices.add(item.id);
    const missing = choiceIds(item.requires).filter(id => !availableChoices.has(id));
    if (missing.length) {
        const names = missing.map(id => findChoice(id)?.item.name || id);
        return `Requires: ${names.join(", ")}.`;
    }
    const conflicts = new Set(choiceIds(item.incompatibleWith));
    for (const id of availableChoices) {
        if (id === item.id) continue;
        const chosen = findChoice(id);
        if (conflicts.has(id) || choiceIds(chosen?.item.incompatibleWith).includes(item.id)) {
            return `Incompatible with ${chosen?.item.name || id}.`;
        }
    }
    return "";
}
function sectionVisible(section) {
    return sectionAvailable(section) || section.id === "patron-loan" || section.id === "patron-missions";
}
function clearUnavailableSelections() {
    selected.forEach(id => {
        if (!findChoice(id) || id.startsWith("alignment-")) selected.delete(id);
    });
    data.sections.forEach(section => section.items.forEach(item => {
        if (selected.has(item.id) && !itemAvailable(section, item)) selected.delete(item.id);
    }));
    let changed = true;
    while (changed) {
        changed = false;
        data.sections.forEach(section => section.items.forEach(item => {
            if (selected.has(item.id) && choiceDisabledReason(section, item)) {
                selected.delete(item.id);
                changed = true;
            }
        }));
    }
}
function effectiveCost(section, item) {
    const cost = Number(item.cost) || 0;
    if (section.id !== "karma") return cost;
    const alignment = selectedPatron()?.alignment;
    if (alignment === "evil") return -cost;
    if (alignment === "good" && cost < 0) return cost * 2;
    return cost;
}
function selectedCost() {
    let total = 0;
    data.sections.forEach(section => section.items.forEach(item => {
        if (selected.has(item.id) && itemAvailable(section, item)) total += effectiveCost(section, item);
    }));
    return total;
}
function statMultiplier(id) {
    let multiplier = 1;
    data.sections.forEach(section => section.items.forEach(item => {
        const modifier = Number(item.modifiers?.[id]);
        if (selected.has(item.id) && Number.isFinite(modifier) && modifier > 0) multiplier *= modifier;
    }));
    return multiplier;
}
function formatStat(value) { return String(Number(value.toFixed(2))) }
function allocatedStats() {
    return (data.stats?.attributes || []).reduce((total, attribute) => total + Math.max(0, Number(stats[attribute.id]) || 0), 0);
}
function availableAttributePoints() { return Math.max(0, (Number(data.stats?.starting) || 0) + attributePointsBought - attributePointsSold - allocatedStats()) }
function availableKarma() { return points - selectedCost() - attributePointsBought + attributePointsSold }
function constitutionValue() { return Math.max(0, Number(stats.constitution) || 0) * statMultiplier("constitution") }
function statLimit(attribute) { return attribute.id === "constitution" ? Infinity : constitutionValue() * 2 }
function canDecreaseConstitution() {
    const newLimit = Math.max(0, (Number(stats.constitution) || 0) - 1) * statMultiplier("constitution") * 2;
    return (data.stats?.attributes || []).every(attribute =>
        attribute.id === "constitution" || (Number(stats[attribute.id]) || 0) <= newLimit
    );
}
function render() {
    const q = ($("#search")?.value || "").toLowerCase();
    $("#points").textContent = availableKarma();
    $("#selected-count").textContent = selected.size;
    $("#attribute-points").textContent = availableAttributePoints();
    const groups = new Map();
    data.sections.filter(sectionVisible).filter(section => !section.id.startsWith("appearance-")).forEach(sec => {
        const title = sec.title || "";
        const group = title.startsWith("Background:") ? ["background", "Background"]
            : title.startsWith("World:") ? ["world", "World"]
            : title.startsWith("Physique:") ? ["physique", "Physique"]
            : title.startsWith("Powers:") ? ["powers", "Powers"]
            : title.startsWith("Patron:") ? ["patron", "Patron"]
            : title.startsWith("Your Past:") ? ["past", "Your Past"]
            : [sec.id, title];
        if (!groups.has(group[0])) groups.set(group[0], { title: group[1], sections: [] });
        groups.get(group[0]).sections.push(sec);
    });
    $("#sections").innerHTML = [...groups.entries()].map(([key, group]) => {
        const sections = group.sections.map(sec => {
            if (sec.id === "patron-choices") return "";
            if (sec.id === "patron-alignment") {
                const patronSection = data.sections.find(section => section.id === "patron-choices");
                const youPatron = patronSection?.items.find(item => item.id === "patron-you");
                const showYouPatron = youPatron && (!q || (`${youPatron.name} ${youPatron.description}`).toLowerCase().includes(q));
                const patronItems = patronSection?.items.filter(item =>
                    item.id !== "patron-you"
                    && item.alignment
                    && itemAvailable(patronSection, item)
                    && (item.name + " " + item.description).toLowerCase().includes(q)
                ) || [];
                const alignments = sec.items.filter(item =>
                    (item.name + " " + item.description).toLowerCase().includes(q)
                    || (selectedPatron()?.alignment === item.alignment && patronItems.length > 0)
                );
                if (!alignments.length && !patronItems.length && !showYouPatron) return "";
                const expanded = openSections.has(sec.id) || Boolean(q);
                const selectedCount = patronSection?.items.filter(item => selected.has(item.id)).length || 0;
                const alignmentAccordions = alignments.map(item => {
                    const alignmentKey = `alignment-accordion-${item.alignment}`;
                    const alignmentExpanded = openSections.has(alignmentKey) || Boolean(q);
                    const selectedInAlignment = selectedPatron()?.alignment === item.alignment;
                    const matchingPatrons = patronItems.filter(patron => patron.alignment === item.alignment);
                    return `<section class="section subsection alignment-option" id="${escapeHTML(alignmentKey)}"><button class="section-toggle subsection-toggle alignment-accordion-toggle" type="button" data-alignment-choice="${escapeHTML(item.id)}" aria-expanded="${alignmentExpanded}" aria-controls="content-${escapeHTML(alignmentKey)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(item.name)}</span><span class="section-toggle-meta">${selectedInAlignment ? `Patron selected · ${escapeHTML(selectedPatron().name)}` : "Browse patrons"}</span></span><span class="section-chevron" aria-hidden="true">${alignmentExpanded ? "−" : "+"}</span></button><div class="section-content alignment-accordion-content" id="content-${escapeHTML(alignmentKey)}" ${alignmentExpanded ? "" : "hidden"}>${alignmentExpanded ? `<p class="desc alignment-perk">${escapeHTML(item.description || "")}</p><div class="patron-choice-list"><h3>Choose a ${escapeHTML(item.name)} patron</h3><div class="grid">${matchingPatrons.map(patron => renderCard(patronSection, patron)).join("")}</div></div>` : ""}</div></section>`;
                }).join("");
                const youChoice = showYouPatron
                    ? `<div class="patron-choice-list you-patron-choice"><h3>A patron from another life</h3><div class="grid">${renderCard(patronSection, youPatron)}</div></div>`
                    : "";
                return `<section class="section subsection" id="${escapeHTML(sec.id)}"><button class="section-toggle subsection-toggle" type="button" aria-expanded="${expanded}" aria-controls="content-${escapeHTML(sec.id)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(sec.title.replace(/^Patron:\s*/, ""))}</span><span class="section-toggle-meta">Choose one${selectedCount ? ` · ${selectedCount} selected` : ""}</span></span><span class="section-chevron" aria-hidden="true">${expanded ? "−" : "+"}</span></button><div class="section-content" id="content-${escapeHTML(sec.id)}" ${expanded ? "" : "hidden"}><p class="desc">${escapeHTML(sec.description || "")}</p>${youChoice}${alignmentAccordions}</div></section>`;
            }
            const items = sec.items.filter(i => itemAvailable(sec, i) && (i.name + " " + i.description).toLowerCase().includes(q));
            if (!items.length && !["patron-loan", "patron-missions"].includes(sec.id)) return "";
            const standalone = group.sections.length === 1 && key !== "patron";
            const expanded = (standalone ? openGroups.has(key) : openSections.has(sec.id)) || Boolean(q);
            const selectedCount = sec.items.filter(item => itemAvailable(sec, item) && selected.has(item.id)).length;
            const toggleClass = standalone ? "group-toggle standalone-toggle" : "subsection-toggle";
            const toggleData = standalone ? `data-group="${escapeHTML(key)}"` : "";
            const title = standalone ? group.title : sec.title.replace(/^Patron:\s*/, "");
            const randomizer = standalone && key === "background" ? '<button type="button" class="background-randomize" data-randomize-background>Randomize background</button>' : "";
            const unavailableMessage = sec.id === "patron-loan" && !selectedPatron()
                ? "Choose a patron first to access an optional loan."
                : sec.id === "patron-missions" && selectedAlignment()?.alignment !== "neutral"
                    ? selectedPatron() ? "Missions are only available to Neutral patrons." : "Choose a Neutral alignment and patron to unlock missions."
                    : "";
            return `<section class="section ${standalone ? "" : "subsection"}" id="${escapeHTML(sec.id)}"><button class="section-toggle ${toggleClass}" type="button" ${toggleData} aria-expanded="${expanded}" aria-controls="content-${escapeHTML(sec.id)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(title)}</span><span class="section-toggle-meta">${sec.mode === "single" ? "Choose one" : "Choose any"}${selectedCount ? ` · ${selectedCount} selected` : ""}</span></span><span class="section-chevron" aria-hidden="true">${expanded ? "−" : "+"}</span></button><div class="section-content" id="content-${escapeHTML(sec.id)}" ${expanded ? "" : "hidden"}>${randomizer}<p class="desc">${escapeHTML(sec.description || "")}</p>${unavailableMessage ? `<p class="desc">${escapeHTML(unavailableMessage)}</p>` : `<div class="grid">${items.map(item => {
            return renderCard(sec, item);
        }).join("")}</div>`}</div></section>`;
        }).filter(Boolean);
        if (!sections.length) return "";
        if (group.sections.length === 1 && key !== "patron") return sections.join("");
        const expanded = openGroups.has(key) || Boolean(q);
        const selectedCount = group.sections.reduce((count, sec) => count + sec.items.filter(item => itemAvailable(sec, item) && selected.has(item.id)).length, 0);
        const randomizer = key === "background" ? '<button type="button" class="background-randomize" data-randomize-background>Randomize background</button>' : "";
        return `<section class="section group-section"><button class="section-toggle group-toggle" type="button" data-group="${escapeHTML(key)}" aria-expanded="${expanded}" aria-controls="group-content-${escapeHTML(key)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(group.title)}</span>${selectedCount ? `<span class="section-toggle-meta">${selectedCount} selected</span>` : ""}</span><span class="section-chevron" aria-hidden="true">${expanded ? "−" : "+"}</span></button><div class="group-content" id="group-content-${escapeHTML(key)}" ${expanded ? "" : "hidden"}>${randomizer}${sections.join("")}</div></section>`;
    }).join("") || '<div class="empty">No matching choices.</div>';
    $("#stats-toggle").setAttribute("aria-expanded", String(statsOpen));
    $("#stats-content").hidden = !statsOpen;
    $("#stats-chevron").textContent = statsOpen ? "−" : "+";
    renderStats();
}
function renderCard(section, item) {
    const active = selected.has(item.id), cost = effectiveCost(section, item);
    const reason = choiceDisabledReason(section, item);
    return `<article class="card ${active ? "selected" : ""} ${reason ? "disabled" : ""}" data-id="${escapeHTML(item.id)}" role="button" tabindex="${reason ? "-1" : "0"}" aria-pressed="${active}" aria-disabled="${Boolean(reason)}"><div class="card-top"><h3>${escapeHTML(item.name)}</h3><span class="cost ${cost > 0 ? "spend" : ""}">${costLabel(cost)}</span></div><p>${escapeHTML(item.description || "No description yet.")}</p><span class="tag">${active ? "Selected" : escapeHTML(reason || "Click to select")}</span></article>`;
}
function toggle(id) {
    let sec = data.sections.find(s => s.items.some(i => i.id === id)); if (!sec) return;
    let item = sec.items.find(i => i.id === id);
    if (!itemAvailable(sec, item)) return;
    if (sec.id === "patron-alignment" && selected.has(id)) return;
    if (selected.has(id)) {
        selected.delete(id);
        clearUnavailableSelections();
        render();
        return;
    }
    if (choiceDisabledReason(sec, item)) return;
    if (sec.mode === "single") sec.items.forEach(i => selected.delete(i.id));
    selected.add(id);
    clearUnavailableSelections();
    render();
}
function renderStats() {
    if (!data.stats) return;
    $("#stat-description").textContent = data.stats.description;
    $("#stat-rule").textContent = "Final stats include selected physique multipliers, which stack multiplicatively. Modified Constitution sets the allocation cap for every other stat at twice its value. Reclaiming a point returns it to your pool; selling one returns 1 karma and permanently removes that point from your pool.";
    const remaining = availableAttributePoints();
    $("#stat-points-remaining").textContent = `${remaining} attribute ${remaining === 1 ? "point" : "points"} available`;
    $("#buy-stat-point").disabled = availableKarma() < 1;
    $("#sell-stat-point").disabled = remaining < 1;
    $("#stat-grid").innerHTML = data.stats.attributes.map(a => {
        const value = Number(stats[a.id]) || 0;
        const multiplier = statMultiplier(a.id);
        const finalValue = value * multiplier;
        const limit = statLimit(a);
        const maxValue = a.id === "constitution"
            ? value + remaining
            : Math.min(limit, value + remaining);
        const limitLabel = a.id === "constitution" ? "sets effective cap" : `max ${formatStat(limit)} allocated`;
        return `<article class="stat-box"><div class="stat-box-heading"><h3>${escapeHTML(a.name)}</h3><span class="stat-value">${formatStat(finalValue)}<span class="stat-limit">${value} allocated · ×${formatStat(multiplier)}</span></span></div><p>${escapeHTML(a.description)}</p><div class="stat-allocation-control"><label class="stat-number-control">Allocated points<input type="number" class="stat-allocation-input" data-stat="${escapeHTML(a.id)}" value="${value}" min="0" max="${formatStat(maxValue)}" step="1" inputmode="numeric" aria-label="${escapeHTML(a.name)} allocated points"></label><span class="stat-limit">${escapeHTML(limitLabel)}</span></div></article>`;
    }).join("");
    const appearanceSections = data.sections.filter(section => section.id.startsWith("appearance-"));
    const query = ($("#search")?.value || "").toLowerCase();
    const accordionGroups = [
        { id: "face", title: "Face", sections: ["appearance-face"], randomizer: "face" },
        { id: "body-type", title: "Body Type", sections: ["appearance-body-type"], randomizer: "body-type" },
        { id: "height", title: "Height", sections: ["appearance-height"], randomizer: "height" },
        { id: "hair", title: "Hair", sections: ["appearance-hair-color", "appearance-hair-type"], randomizer: "hair" },
        { id: "eyes", title: "Eyes", sections: ["appearance-eye-color", "appearance-eye-shape"], randomizer: "eyes" },
        { id: "teeth", title: "Teeth", sections: ["appearance-teeth"], randomizer: "teeth" }
    ];
    const ethnicitySection = appearanceSections.find(section => section.id === "appearance-ethnicity");
    const accordionMarkup = accordionGroups.map(group => {
        const sections = group.sections.map(id => appearanceSections.find(section => section.id === id)).filter(Boolean);
        const choices = sections.map(section => {
            const items = section.items.filter(item => (item.name + " " + item.description).toLowerCase().includes(query));
            if (!items.length && query) return "";
            const title = sections.length > 1 ? `<h3 class="appearance-subtitle">${escapeHTML(section.title.replace(/^Appearance:\s*/, ""))}</h3>` : "";
            return `${title}<p class="desc">${escapeHTML(section.description || "")}</p><div class="grid">${items.map(item => renderCard(section, item)).join("")}</div>`;
        }).join("");
        if (!choices && query) return "";
        const open = openSections.has(`appearance-${group.id}`) || Boolean(query);
        const selectedCount = sections.reduce((count, section) =>
            count + section.items.filter(item => selected.has(item.id)).length, 0
        );
        return `<section class="section subsection appearance-accordion" id="appearance-${group.id}"><button class="section-toggle subsection-toggle" type="button" aria-expanded="${open}" aria-controls="content-appearance-${group.id}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(group.title)}</span><span class="section-toggle-meta">${sections.length === 1 ? sections[0].mode === "single" ? "Choose one" : "Choose any" : "Choose features"}${selectedCount ? ` · ${selectedCount} selected` : ""}</span></span><span class="section-chevron" aria-hidden="true">${open ? "−" : "+"}</span></button><div class="section-content appearance-accordion-content" id="content-appearance-${group.id}" ${open ? "" : "hidden"}><button type="button" class="appearance-randomize" data-randomize-appearance="${group.randomizer}">Randomize ${escapeHTML(group.title.toLowerCase())}</button>${choices}</div></section>`;
    }).join("");
    const appearanceOpen = openSections.has("appearance-maxing") || Boolean(query);
    $("#appearance-builder").innerHTML = appearanceSections.length
        ? `<section class="section appearance-maxing" id="appearance-maxing"><button class="section-toggle subsection-toggle appearance-maxing-toggle" type="button" aria-expanded="${appearanceOpen}" aria-controls="content-appearance-maxing"><span class="section-toggle-main"><span class="section-toggle-title" id="appearance-title">Appearance Maxing</span></span><span class="section-chevron" aria-hidden="true">${appearanceOpen ? "−" : "+"}</span></button><div class="section-content appearance-maxing-content" id="content-appearance-maxing" ${appearanceOpen ? "" : "hidden"}><p class="desc">Choose your appearance. Options marked with a requirement unlock when your allocated stats meet it.</p><button type="button" class="appearance-randomize randomize-body" data-randomize-appearance="body">Randomize Body</button><div class="appearance-ethnicity"><label for="appearance-ethnicity-input">Ethnicity</label><p class="desc">${escapeHTML(ethnicitySection?.description || "Describe your heritage, ancestry, and complexion.")}</p><textarea id="appearance-ethnicity-input" rows="3" placeholder="Describe any real-world, mixed, or fictional ethnicity...">${escapeHTML(appearanceEthnicity)}</textarea></div>${accordionMarkup}</div></section>`
        : "";
}
function randomizeAppearance(group) {
    const sectionIds = {
        body: /^appearance-(face|body-type|height|hair-|eye-|teeth)/,
        face: /^appearance-face$/,
        "body-type": /^appearance-body-type$/,
        height: /^appearance-height$/,
        hair: /^appearance-hair-(color|type)$/,
        eyes: /^appearance-eye-(color|shape)$/,
        teeth: /^appearance-teeth$/
    }[group];
    if (!sectionIds) return;
    const sections = data.sections.filter(section => sectionIds.test(section.id));
    sections.forEach(section => section.items.forEach(item => selected.delete(item.id)));
    sections.forEach(section => {
        const available = section.items.filter(item =>
            itemAvailable(section, item) && !choiceDisabledReason(section, item)
        );
        if (available.length) selected.add(available[Math.floor(Math.random() * available.length)].id);
    });
    clearUnavailableSelections();
    save();
    render();
}
function exportJSON() { let blob = new Blob([JSON.stringify({ data, selected: [...selected], points, stats, attributePointsBought, attributePointsSold, appearanceEthnicity }, null, 2)], { type: "application/json" }); download(blob, "karma-build.json") }
function download(blob, name) { let a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href) }
function selectedChoices() {
    return data.sections.flatMap(section => section.items
        .filter(item => selected.has(item.id) && itemAvailable(section, item))
        .map(item => ({ section, item })));
}
function renderSummary() {
    const choices = selectedChoices();
    const showDescriptions = $("#show-summary-descriptions").checked;
    const grouped = new Map();
    choices.forEach(({ section, item }) => {
        const title = section.id.startsWith("appearance-") ? "Appearance Maxing" : section.title;
        if (!grouped.has(title)) grouped.set(title, []);
        grouped.get(title).push({ section, item });
    });
    if (appearanceEthnicity.trim()) {
        if (!grouped.has("Appearance Maxing")) grouped.set("Appearance Maxing", []);
        grouped.get("Appearance Maxing").push({ ethnicity: appearanceEthnicity.trim() });
    }
    const attributeEntries = (data.stats?.attributes || []).map(attribute => {
        const allocated = Math.max(0, Number(stats[attribute.id]) || 0);
        const multiplier = statMultiplier(attribute.id);
        const finalValue = allocated * multiplier;
        const finalLabel = multiplier !== 1 ? ` · final ${formatStat(finalValue)}` : "";
        return `<li><strong>${escapeHTML(attribute.name)}:</strong> ${allocated} allocated${finalLabel}${showDescriptions ? `<p>${escapeHTML(attribute.description || "")}</p>` : ""}</li>`;
    });
    $("#summary-content").innerHTML = grouped.size
        ? `<div class="summary-sections">${[...grouped].map(([title, entries]) => `<section class="summary-section"><h3>${escapeHTML(title)}</h3><ul>${entries.map(entry => {
            if (entry.ethnicity) return `<li><strong>Ethnicity:</strong> ${escapeHTML(entry.ethnicity)}</li>`;
            const { section, item } = entry;
            return `<li><strong>${escapeHTML(item.name)}</strong> <span class="muted">(${costLabel(effectiveCost(section, item))})</span>${showDescriptions ? `<p>${escapeHTML(item.description || "No description provided.")}</p>` : ""}</li>`;
        }).join("")}</ul></section>`).join("")}${attributeEntries.length ? `<section class="summary-section"><h3>Attributes</h3><ul>${attributeEntries.join("")}</ul></section>` : ""}</div>`
        : attributeEntries.length
            ? `<div class="summary-sections"><section class="summary-section"><h3>Attributes</h3><ul>${attributeEntries.join("")}</ul></section></div>`
            : "<p>No choices selected yet.</p>";
    const separator = $("#separate-choice-rows").checked ? "\n" : ", ";
    const titles = choices.map(({ item }) => item.name);
    if (appearanceEthnicity.trim()) titles.unshift(`Ethnicity: ${appearanceEthnicity.trim()}`);
    const attributeIds = (data.stats?.attributes || []).map(attribute => {
        const allocated = Math.max(0, Number(stats[attribute.id]) || 0);
        titles.push(`${attribute.name}: ${allocated} allocated`);
        return `stat:${attribute.id}=${allocated}`;
    });
    $("#choice-titles").value = titles.join(separator);
    $("#choice-ids").value = [...choices.map(({ item }) => item.id), ...attributeIds].join(separator);
}
function openSummary() {
    renderSummary();
    $("#choice-import-status").textContent = "";
    $("#summary-modal").classList.add("open");
}
function importChoiceIds() {
    const tokens = $("#choice-import").value.split(/[,\s]+/).filter(Boolean);
    if (!tokens.length) {
        selected.clear();
        clearUnavailableSelections();
        save();
        render();
        renderSummary();
        $("#choice-import-status").textContent = "Selections cleared.";
        return;
    }
    const requested = new Set();
    const importedStats = {};
    let hasStats = false;
    const errors = [];
    tokens.forEach(token => {
        const statToken = token.match(/^stat:([a-zA-Z0-9_-]+)=(\d+)$/);
        if (statToken) {
            const [, id, value] = statToken;
            if (!data.stats?.attributes.some(attribute => attribute.id === id)) errors.push(`Unknown attribute: ${id}`);
            else {
                importedStats[id] = Number(value);
                hasStats = true;
            }
        } else if (token.startsWith("stat:")) {
            errors.push(`Invalid attribute allocation: ${token}`);
        } else {
            requested.add(token);
        }
    });
    if (errors.length) {
        $("#choice-import-status").textContent = errors.join("; ");
        return;
    }
    const unknown = [...requested].filter(id => !findChoice(id));
    if (unknown.length) {
        $("#choice-import-status").textContent = `Unknown choice ID${unknown.length === 1 ? "" : "s"}: ${unknown.join(", ")}`;
        return;
    }
    const previous = selected, previousStats = stats;
    selected = requested;
    if (hasStats) {
        stats = Object.fromEntries(data.stats.attributes.map(attribute => [
            attribute.id,
            importedStats[attribute.id] ?? 0
        ]));
    }
    let reason = "";
    if (hasStats) {
        const constitution = Number(stats.constitution) || 0;
        for (const attribute of data.stats.attributes) {
            if (attribute.id !== "constitution" && (Number(stats[attribute.id]) || 0) > constitution * statMultiplier("constitution") * 2) {
                reason = `${attribute.name} exceeds the limit set by Constitution.`;
                break;
            }
        }
    }
    for (const { section, item } of selectedChoices()) {
        if (reason) break;
        const duplicate = section.mode === "single" && section.items.filter(choice => selected.has(choice.id)).length > 1;
        if (duplicate) {
            reason = `Choose only one option in "${section.title}".`;
            break;
        }
        reason = choiceDisabledReason(section, item);
        if (reason) {
            reason = `${item.name}: ${reason}`;
            break;
        }
    }
    if (selectedChoices().length !== requested.size && !reason) reason = "One or more choices are unavailable.";
    if (reason) {
        selected = previous;
        stats = previousStats;
        $("#choice-import-status").textContent = reason;
        return;
    }
    clearUnavailableSelections();
    save();
    render();
    renderSummary();
    $("#choice-import-status").textContent = `${selected.size} choice${selected.size === 1 ? "" : "s"} and ${hasStats ? "attribute allocations" : "no attribute allocations"} imported.`;
}
function importFile(file) { let r = new FileReader(); r.onload = () => { try { let obj = JSON.parse(r.result); if (obj.data) { const legacySelections = migrateSelectedPatron(obj.selected || [], obj.data); data = placePatronAfterPast(addDefaultModifiers(window.KARMA_CONTENT_SYNC.merge(DEFAULT, migratePatronSections(obj.data), null))); selected = legacySelections; points = Number(obj.points) || 0; stats = obj.stats || {}; attributePointsBought = Number(obj.attributePointsBought) || 0; attributePointsSold = Number(obj.attributePointsSold) || 0; appearanceEthnicity = String(obj.appearanceEthnicity || "") } else { data = placePatronAfterPast(addDefaultModifiers(window.KARMA_CONTENT_SYNC.merge(DEFAULT, migratePatronSections(obj), null))); selected.clear(); appearanceEthnicity = "" } localStorage.setItem("karma-data-base", JSON.stringify(DEFAULT)); clearUnavailableSelections(); save(); render(); alert("Import complete.") } catch (e) { alert("Could not import this file: " + e.message) } }; r.readAsText(file) }
document.addEventListener("click", e => {
    const card = e.target.closest(".card[data-id]"); if (card) toggle(card.dataset.id);
    const alignmentChoice = e.target.closest("[data-alignment-choice]");
    if (alignmentChoice) {
        const accordionId = alignmentChoice.closest(".alignment-option").id;
        const wasOpen = openSections.has(accordionId);
        ["good", "neutral", "evil"].forEach(alignment => openSections.delete(`alignment-accordion-${alignment}`));
        if (!wasOpen) openSections.add(accordionId);
        render();
        return;
    }
    const appearanceRandomizer = e.target.closest("[data-randomize-appearance]");
    if (appearanceRandomizer) {
        randomizeAppearance(appearanceRandomizer.dataset.randomizeAppearance);
        return;
    }
    if (e.target.closest("[data-randomize-background]")) {
        data.sections.filter(section => section.title.startsWith("Background:")).forEach(section => {
            section.items.forEach(item => selected.delete(item.id));
            if (section.items.length) {
                selected.add(section.items[Math.floor(Math.random() * section.items.length)].id);
            }
        });
        save();
        clearUnavailableSelections();
        render();
        return;
    }
    if (e.target.closest("#sell-stat-point")) {
        if (availableAttributePoints() < 1) return;
        attributePointsSold += 1;
        save();
        render();
        return;
    }
    if (e.target.closest("#buy-stat-point")) {
        if (availableKarma() < 1) return;
        attributePointsBought += 1;
        save();
        render();
        return;
    }
    const groupToggle = e.target.closest(".group-toggle");
    if (groupToggle) {
        const key = groupToggle.dataset.group;
        if (openGroups.has(key)) openGroups.delete(key);
        else openGroups.add(key);
        render();
        return;
    }
    const sectionToggle = e.target.closest(".subsection-toggle");
    if (sectionToggle) {
        const section = sectionToggle.closest(".section");
        if (openSections.has(section.id)) openSections.delete(section.id);
        else openSections.add(section.id);
        render();
    }
    if (e.target.closest("#stats-toggle")) { statsOpen = !statsOpen; render() }
    if (e.target.closest("#reset")) { if (confirm("Reset selections, stat allocations, appearance notes, and bought or sold attribute points? Spent karma will not be refunded.")) { selected.clear(); stats = {}; appearanceEthnicity = ""; attributePointsBought = 0; attributePointsSold = 0; save(); render() } }
    if (e.target.closest("#summary")) openSummary();
    if (e.target.closest("#close-summary")) $("#summary-modal").classList.remove("open");
    if (e.target.id === "summary-modal") e.target.classList.remove("open");
    if (e.target.closest("#import-choices")) importChoiceIds();
    const copyButton = e.target.closest("[data-copy-output]");
    if (copyButton) {
        const output = document.getElementById(copyButton.dataset.copyOutput);
        output.select();
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(output.value).then(
                () => { $("#choice-import-status").textContent = "Copied to clipboard."; },
                () => { $("#choice-import-status").textContent = "Copy was blocked. Select and copy the text manually."; }
            );
        } else {
            $("#choice-import-status").textContent = "Select and copy the text manually.";
        }
    }
    if (e.target.closest("#export")) exportJSON();
    if (e.target.closest("#edit-content")) location.href = "editor.html";
});
document.addEventListener("change", e => {
    if (e.target.matches(".stat-allocation-input")) {
        const id = e.target.dataset.stat;
        const attribute = data.stats.attributes.find(item => item.id === id);
        const previousValue = Number(stats[id]) || 0;
        const nextValue = e.target.valueAsNumber;
        let error = "";
        if (!Number.isInteger(nextValue) || nextValue < 0) error = "Enter a whole number of 0 or greater.";
        else if (nextValue > previousValue && nextValue - previousValue > availableAttributePoints()) error = "Not enough attribute points available.";
        else if (nextValue > statLimit(attribute)) error = `This stat is limited to ${formatStat(statLimit(attribute))} allocated points.`;
        else if (id === "constitution" && nextValue < previousValue) {
            const newLimit = nextValue * statMultiplier("constitution") * 2;
            if (data.stats.attributes.some(item => item.id !== "constitution" && (Number(stats[item.id]) || 0) > newLimit)) {
                error = "Reclaim points from other attributes before lowering Constitution.";
            }
        }
        if (error) {
            alert(error);
            e.target.value = String(previousValue);
            return;
        }
        stats[id] = nextValue;
        clearUnavailableSelections();
        save();
        render();
    }
});
document.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[data-id]")) { e.preventDefault(); toggle(e.target.dataset.id) } });
document.addEventListener("input", e => {
    if (e.target.id === "search") render();
    if (e.target.id === "appearance-ethnicity-input") {
        appearanceEthnicity = e.target.value;
        save();
        if ($("#summary-modal").classList.contains("open")) renderSummary();
    }
});
document.addEventListener("change", e => {
    if (e.target.id === "separate-choice-rows" || e.target.id === "show-summary-descriptions") renderSummary();
});
$("#import").addEventListener("change", e => { if (e.target.files[0]) importFile(e.target.files[0]); e.target.value = "" });
$("#save-build").addEventListener("click", () => { save(); let build = { data, selected: [...selected], points, stats, attributePointsBought, attributePointsSold, appearanceEthnicity }; download(new Blob([JSON.stringify(build, null, 2)], { type: "application/json" }), "karma-build.json"); });
render();
