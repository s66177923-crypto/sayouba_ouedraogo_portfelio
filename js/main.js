const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

document.title = CONFIG.nom + " — Portfolio";
$("logo").textContent = CONFIG.nom;
$("h1").innerHTML = esc(CONFIG.titreHero[0]) + " <mark>" + esc(CONFIG.titreHero[1]) + "</mark> " + esc(CONFIG.titreHero[2]);
$("lead").textContent = CONFIG.accroche;

$("services-list").innerHTML = CONFIG.services.map(s =>
  `<div class="card"><h3>${esc(s.titre)}</h3><p>${esc(s.texte)}</p><p><strong>${esc(s.prix)}</strong></p></div>`).join("");

$("projects-list").innerHTML = CONFIG.projets.map(p =>
  `<div class="card"><h3>${esc(p.titre)}</h3><p>${esc(p.texte)}</p>
   <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
   ${p.lien ? `<p style="margin-top:.8rem"><a class="more" href="${esc(p.lien)}" target="_blank" rel="noopener">Voir le projet</a></p>` : ""}</div>`).join("");

$("about-text").innerHTML = CONFIG.apropos.map(t => `<p>${esc(t)}</p>`).join("");
$("skills").innerHTML = Object.entries(CONFIG.competences).map(([k, v]) =>
  `<h3>${esc(k)}</h3><ul class="tags" style="margin-bottom:1.2rem">${v.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`).join("");

$("contact-title").textContent = CONFIG.titreContact;
$("contact-text").textContent = CONFIG.texteContact;
$("wa").href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(CONFIG.messageWhatsapp);
$("mail").href = "mailto:" + CONFIG.email;
$("mail").textContent = CONFIG.email;
$("foot").textContent = "© " + CONFIG.annee + " " + CONFIG.nom;

$("theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = getComputedStyle(r).getPropertyValue("--paper").trim() === "#0E1A26";
  r.setAttribute("data-theme", dark ? "light" : "dark");
});
