function loadSection(id, path, callback) {
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(path + " not found");
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback(); // 🔥 important
    })
    .catch(err => console.error(err.message));
}

/* HEADER (with JS init) */
loadSection(
  "header",
  "./header-and-fixedbox/header-and-fixedbox.html",
  () => {
    const script = document.createElement("script");
    script.src = "./header-and-fixedbox/header-and-fixedbox.js";
    document.body.appendChild(script);
  }
);

/* OTHER SECTIONS */
loadSection("hero", "./hero-section/hero-section.html");
loadSection("models", "./models-section/models-section.html");
loadSection("offers", "./offers-section/offers-section.html");
loadSection("features", "./features-section/features-section.html");
loadSection("energy", "./energy-section/energy-section.html");
loadSection("charging-info", "./charging-info-section/charging-info-section.html");
loadSection("charging-map", "./charging-map-section/charging-map-section.html");
loadSection("footer", "./footer/footer.html");
