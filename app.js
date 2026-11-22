
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const clone = o => JSON.parse(JSON.stringify(o));
const DEFAULT = clone(window.KARMA_DATA);
let data = loadData(), selected = new Set(), points = Number(localStorage.getItem("karma-points") ?? 0), stats = {};
function loadData() { try { return JSON.parse(localStorage.getItem("karma-data")) || clone(DEFAULT) } catch { return clone(DEFAULT) } }
function save() { localStorage.setItem("karma-data", JSON.stringify(data)); localStorage.setItem("karma-points", String(points)); }
function escapeHTML(s = "") { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function costLabel(n) { return n > 0 ? `−${n} pts` : n < 0 ? `+${Math.abs(n)} pts` : "Free" }
function selectedCost() { let n = 0; data.sections.forEach(s => s.items.forEach(i => { if (selected.has(i.id)) n += Number(i.cost) || 0 })); return n }
function render() {
    const q = ($("#search")?.value || "").toLowerCase();
    $("#points").textContent = points - selectedCost();
    $("#selected-count").textContent = selected.size;
    $("#sections").innerHTML = data.sections.map(sec => {
        const items = sec.items.filter(i => (i.name + " " + i.description).toLowerCase().includes(q));
        if (!items.length) return "";
        return `<section class="section" id="${escapeHTML(sec.id)}"><div class="section-head"><div><h2>${escapeHTML(sec.title)}</h2><div class="desc">${escapeHTML(sec.description || "")}</div></div><span class="tag">${sec.mode === "single" ? "Choose one" : "Choose any"}</span></div><div class="grid">${items.map(item => {
            const active = selected.has(item.id), cost = Number(item.cost) || 0;
            return `<article class="card ${active ? "selected" : ""}" data-id="${escapeHTML(item.id)}" role="button" tabindex="0" aria-pressed="${active}"><div class="card-top"><h3>${escapeHTML(item.name)}</h3><span class="cost ${cost > 0 ? "spend" : ""}">${costLabel(cost)}</span></div><p>${escapeHTML(item.description || "No description yet.")}</p><span class="tag">${active ? "Selected" : "Click to select"}</span></article>`;
        }).join("")}</div></section>`;
    }).join("") || '<div class="empty">No matching choices.</div>';
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
    $("#stat-grid").innerHTML = data.stats.attributes.map(a => `<div class="stat-box"><label for="stat-${a.id}">${escapeHTML(a.name)}</label><div class="small muted">${escapeHTML(a.description)}</div><input id="stat-${a.id}" type="number" min="0" max="999" value="${stats[a.id] ?? 0}" data-stat="${a.id}"></div>`).join("");
}
function exportJSON() { let blob = new Blob([JSON.stringify({ data, selected: [...selected], points, stats }, null, 2)], { type: "application/json" }); download(blob, "karma-build.json") }
function download(blob, name) { let a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href) }
function openSummary() { let lines = []; data.sections.forEach(s => s.items.forEach(i => { if (selected.has(i.id)) lines.push(`<li>${escapeHTML(s.title)} — ${escapeHTML(i.name)} <span class="muted">(${costLabel(Number(i.cost) || 0)})</span></li>`) })); $("#summary-content").innerHTML = lines.length ? `<ul>${lines.join("")}</ul>` : "<p>No choices selected yet.</p>"; $("#summary-modal").classList.add("open") }
function importFile(file) { let r = new FileReader(); r.onload = () => { try { let obj = JSON.parse(r.result); if (obj.data) { data = obj.data; selected = new Set(obj.selected || []); points = Number(obj.points) || 0; stats = obj.stats || {} } else { data = obj; selected.clear() } save(); render(); alert("Import complete.") } catch (e) { alert("Could not import this file: " + e.message) } }; r.readAsText(file) }
document.addEventListener("click", e => {
    const card = e.target.closest(".card[data-id]"); if (card) toggle(card.dataset.id);
    if (e.target.closest("#reset")) { if (confirm("Clear selections and reset stat allocation?")) { selected.clear(); stats = {}; render() } }
    if (e.target.closest("#summary")) openSummary();
    if (e.target.closest("#close-summary")) $("#summary-modal").classList.remove("open");
    if (e.target.closest("#export")) exportJSON();
    if (e.target.closest("#edit-content")) location.href = "editor.html";
});
document.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches(".card[data-id]")) { e.preventDefault(); toggle(e.target.dataset.id) } });
document.addEventListener("input", e => {
    if (e.target.id === "search") render();
    if (e.target.dataset.stat) { stats[e.target.dataset.stat] = Math.max(0, Number(e.target.value) || 0) }
});
$("#import").addEventListener("change", e => { if (e.target.files[0]) importFile(e.target.files[0]); e.target.value = "" });
$("#save-build").addEventListener("click", () => { save(); let build = { data, selected: [...selected], points, stats }; download(new Blob([JSON.stringify(build, null, 2)], { type: "application/json" }), "karma-build.json") });
render();
