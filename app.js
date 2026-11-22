
const $ = s => document.querySelector(s);
const clone = o => JSON.parse(JSON.stringify(o));
const DEFAULT = clone(window.KARMA_DATA);
let data = loadData(), selected = new Set(), points = Number(localStorage.getItem("karma-points") ?? 0);
let stats = loadStats(), attributePointsBought = Number(localStorage.getItem("karma-attribute-points-bought") ?? 0);
const openGroups = new Set(), openSections = new Set();
let statsOpen = false;
function loadData() { try { return JSON.parse(localStorage.getItem("karma-data")) || clone(DEFAULT) } catch { return clone(DEFAULT) } }
function loadStats() { try { return JSON.parse(localStorage.getItem("karma-stats")) || {} } catch { return {} } }
function save() {
    localStorage.setItem("karma-data", JSON.stringify(data));
    localStorage.setItem("karma-points", String(points));
    localStorage.setItem("karma-stats", JSON.stringify(stats));
    localStorage.setItem("karma-attribute-points-bought", String(attributePointsBought));
}
function escapeHTML(s = "") { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function costLabel(n) { return n > 0 ? `−${n} pts` : n < 0 ? `+${Math.abs(n)} pts` : "Free" }
function selectedCost() { let n = 0; data.sections.forEach(s => s.items.forEach(i => { if (selected.has(i.id)) n += Number(i.cost) || 0 })); return n }
function allocatedStats() {
    return (data.stats?.attributes || []).reduce((total, attribute) => total + Math.max(0, Number(stats[attribute.id]) || 0), 0);
}
function availableAttributePoints() { return Math.max(0, (Number(data.stats?.starting) || 0) + attributePointsBought - allocatedStats()) }
function availableKarma() { return points - selectedCost() - attributePointsBought }
function constitutionValue() { return Math.max(0, Number(stats.constitution) || 0) }
function statLimit(attribute) { return attribute.id === "constitution" ? Infinity : constitutionValue() * 2 }
function canDecreaseConstitution() {
    const newLimit = Math.max(0, constitutionValue() - 1) * 2;
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
    data.sections.forEach(sec => {
        const title = sec.title || "";
        const group = title.startsWith("Background:") ? ["background", "Background"]
            : title.startsWith("World:") ? ["world", "World"]
            : title.startsWith("Physique:") ? ["physique", "Physique"]
            : title.startsWith("Powers:") ? ["powers", "Powers"]
            : title.startsWith("Your Past:") ? ["past", "Your Past"]
            : [sec.id, title];
        if (!groups.has(group[0])) groups.set(group[0], { title: group[1], sections: [] });
        groups.get(group[0]).sections.push(sec);
    });
    $("#sections").innerHTML = [...groups.entries()].map(([key, group]) => {
        const sections = group.sections.map(sec => {
            const items = sec.items.filter(i => (i.name + " " + i.description).toLowerCase().includes(q));
            if (!items.length) return "";
            const standalone = group.sections.length === 1;
            const expanded = (standalone ? openGroups.has(key) : openSections.has(sec.id)) || Boolean(q);
            const selectedCount = sec.items.filter(item => selected.has(item.id)).length;
            const toggleClass = standalone ? "group-toggle standalone-toggle" : "subsection-toggle";
            const toggleData = standalone ? `data-group="${escapeHTML(key)}"` : "";
            const title = standalone ? group.title : sec.title;
            return `<section class="section ${standalone ? "" : "subsection"}" id="${escapeHTML(sec.id)}"><button class="section-toggle ${toggleClass}" type="button" ${toggleData} aria-expanded="${expanded}" aria-controls="content-${escapeHTML(sec.id)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(title)}</span><span class="section-toggle-meta">${sec.mode === "single" ? "Choose one" : "Choose any"}${selectedCount ? ` · ${selectedCount} selected` : ""}</span></span><span class="section-chevron" aria-hidden="true">${expanded ? "−" : "+"}</span></button><div class="section-content" id="content-${escapeHTML(sec.id)}" ${expanded ? "" : "hidden"}><p class="desc">${escapeHTML(sec.description || "")}</p><div class="grid">${items.map(item => {
            const active = selected.has(item.id), cost = Number(item.cost) || 0;
            return `<article class="card ${active ? "selected" : ""}" data-id="${escapeHTML(item.id)}" role="button" tabindex="0" aria-pressed="${active}"><div class="card-top"><h3>${escapeHTML(item.name)}</h3><span class="cost ${cost > 0 ? "spend" : ""}">${costLabel(cost)}</span></div><p>${escapeHTML(item.description || "No description yet.")}</p><span class="tag">${active ? "Selected" : "Click to select"}</span></article>`;
        }).join("")}</div></div></section>`;
        }).filter(Boolean);
        if (!sections.length) return "";
        if (group.sections.length === 1) return sections.join("");
        const expanded = openGroups.has(key) || Boolean(q);
        const selectedCount = group.sections.reduce((count, sec) => count + sec.items.filter(item => selected.has(item.id)).length, 0);
        return `<section class="section group-section"><button class="section-toggle group-toggle" type="button" data-group="${escapeHTML(key)}" aria-expanded="${expanded}" aria-controls="group-content-${escapeHTML(key)}"><span class="section-toggle-main"><span class="section-toggle-title">${escapeHTML(group.title)}</span>${selectedCount ? `<span class="section-toggle-meta">${selectedCount} selected</span>` : ""}</span><span class="section-chevron" aria-hidden="true">${expanded ? "−" : "+"}</span></button><div class="group-content" id="group-content-${escapeHTML(key)}" ${expanded ? "" : "hidden"}>${sections.join("")}</div></section>`;
    }).join("") || '<div class="empty">No matching choices.</div>';
    $("#stats-toggle").setAttribute("aria-expanded", String(statsOpen));
    $("#stats-content").hidden = !statsOpen;
    $("#stats-chevron").textContent = statsOpen ? "−" : "+";
    renderStats();
}
function toggle(id) {
    let sec = data.sections.find(s => s.items.some(i => i.id === id)); if (!sec) return;
    let item = sec.items.find(i => i.id === id), cost = Number(item.cost) || 0;
    if (selected.has(id)) { selected.delete(id); render(); return }
    if (sec.mode === "single") sec.items.forEach(i => selected.delete(i.id));
    selected.add(id); render();
}
function renderStats() {
    if (!data.stats) return;
    $("#stat-description").textContent = data.stats.description;
    $("#stat-rule").textContent = "Constitution sets the hard limit for every other attribute: each can be allocated up to twice your Constitution. Raise Constitution first to increase their limits.";
    const remaining = availableAttributePoints();
    $("#stat-points-remaining").textContent = `${remaining} attribute ${remaining === 1 ? "point" : "points"} available`;
    $("#buy-stat-point").disabled = availableKarma() < 1;
    $("#stat-grid").innerHTML = data.stats.attributes.map(a => {
        const value = Number(stats[a.id]) || 0;
        const limit = statLimit(a);
        const decreaseDisabled = value < 1 || (a.id === "constitution" && !canDecreaseConstitution());
        const increaseDisabled = remaining < 1 || value >= limit;
        const limitLabel = a.id === "constitution" ? "sets the cap" : `max ${limit}`;
        return `<article class="stat-box"><div class="stat-box-heading"><h3>${escapeHTML(a.name)}</h3><span class="stat-value">${value}<span class="stat-limit">${escapeHTML(limitLabel)}</span></span></div><p>${escapeHTML(a.description)}</p><div class="stat-controls"><button type="button" class="stat-adjust" data-stat="${escapeHTML(a.id)}" data-delta="-1" aria-label="Decrease ${escapeHTML(a.name)}" title="Decrease ${escapeHTML(a.name)}" ${decreaseDisabled ? "disabled" : ""}>−</button><span class="stat-control-label">− reclaim · + assign</span><button type="button" class="stat-adjust" data-stat="${escapeHTML(a.id)}" data-delta="1" aria-label="Increase ${escapeHTML(a.name)}" title="Increase ${escapeHTML(a.name)}" ${increaseDisabled ? "disabled" : ""}>+</button></div></article>`;
    }).join("");
}
function exportJSON() { let blob = new Blob([JSON.stringify({ data, selected: [...selected], points, stats, attributePointsBought }, null, 2)], { type: "application/json" }); download(blob, "karma-build.json") }
function download(blob, name) { let a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href) }
function openSummary() { let lines = []; data.sections.forEach(s => s.items.forEach(i => { if (selected.has(i.id)) lines.push(`<li>${escapeHTML(s.title)} — ${escapeHTML(i.name)} <span class="muted">(${costLabel(Number(i.cost) || 0)})</span></li>`) })); $("#summary-content").innerHTML = lines.length ? `<ul>${lines.join("")}</ul>` : "<p>No choices selected yet.</p>"; $("#summary-modal").classList.add("open") }
function importFile(file) { let r = new FileReader(); r.onload = () => { try { let obj = JSON.parse(r.result); if (obj.data) { data = obj.data; selected = new Set(obj.selected || []); points = Number(obj.points) || 0; stats = obj.stats || {}; attributePointsBought = Number(obj.attributePointsBought) || 0 } else { data = obj; selected.clear() } save(); render(); alert("Import complete.") } catch (e) { alert("Could not import this file: " + e.message) } }; r.readAsText(file) }
document.addEventListener("click", e => {
    const card = e.target.closest(".card[data-id]"); if (card) toggle(card.dataset.id);
    const statAdjust = e.target.closest(".stat-adjust");
    if (statAdjust) {
        const id = statAdjust.dataset.stat;
        const nextValue = Math.max(0, (Number(stats[id]) || 0) + Number(statAdjust.dataset.delta));
        if (nextValue > (Number(stats[id]) || 0) && availableAttributePoints() < 1) return;
        const attribute = data.stats.attributes.find(item => item.id === id);
        if (nextValue > statLimit(attribute)) return;
        if (id === "constitution" && nextValue < constitutionValue()) {
            const newLimit = nextValue * 2;
            if (data.stats.attributes.some(item => item.id !== "constitution" && (Number(stats[item.id]) || 0) > newLimit)) return;
        }
        stats[id] = nextValue;
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
    if (e.target.closest("#reset")) { if (confirm("Clear selections and reset stat allocation? Purchased attribute points will remain available, but spent karma will not be refunded.")) { selected.clear(); stats = {}; save(); render() } }
    if (e.target.closest("#summary")) openSummary();
    if (e.target.closest("#close-summary")) $("#summary-modal").classList.remove("open");
    if (e.target.closest("#export")) exportJSON();
    if (e.target.closest("#edit-content")) location.href = "editor.html";
});
document.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[data-id]")) { e.preventDefault(); toggle(e.target.dataset.id) } });
document.addEventListener("input", e => { if (e.target.id === "search") render() });
$("#import").addEventListener("change", e => { if (e.target.files[0]) importFile(e.target.files[0]); e.target.value = "" });
$("#save-build").addEventListener("click", () => { save(); let build = { data, selected: [...selected], points, stats, attributePointsBought }; download(new Blob([JSON.stringify(build, null, 2)], { type: "application/json" }), "karma-build.json") });
render();
