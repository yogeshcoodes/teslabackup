function loadSection(id, path, callback) {
  fetch(path)
    .then((res) => {
      if (!res.ok) throw new Error(path + " not found");
      return res.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(err.message));
}

/* HEADER */
loadSection("header", "./header-and-fixedbox/header-and-fixedbox.html", () => {
  const script = document.createElement("script");
  script.src = "./header-and-fixedbox/header-and-fixedbox.js";
  document.body.appendChild(script);
});

/* HERO */
loadSection("hero", "./hero-section/hero-section.html", () => {
  const script = document.createElement("script");
  script.src = "./hero-section/hero-section.js";
  document.body.appendChild(script);
});

/* MODELS */
loadSection("models", "./models-section/models-section.html", () => {
  const script = document.createElement("script");
  script.src = "./models-section/models-section.js";
  document.body.appendChild(script);
});

/* OFFERS */
loadSection("offers", "./offers-section/offers-section.html", () => {
  const script = document.createElement("script");
  script.src = "./offers-section/offers-section.js";
  document.body.appendChild(script);
});

/* FEATURES */
loadSection("features", "./features-section/features-section.html", () => {
  const script = document.createElement("script");
  script.src = "./features-section/features-section.js";
  document.body.appendChild(script);
});

/* CHARGING MAP */
loadSection(
  "charging-map",
  "./charging-map-section/charging-map-section.html",
  () => {
    const script = document.createElement("script");
    script.src = "./charging-map-section/charging-map-section.js";
    document.body.appendChild(script);
  }
);

/* CHARGING INFO */
loadSection(
  "charging-info",
  "./charging-info-section/charging-info-section.html",
  () => {
    const script = document.createElement("script");
    script.src = "./charging-info-section/charging-info-section.js";
    document.body.appendChild(script);
  }
);

/* ENERGY */
loadSection("energy", "./energy-section/energy-section.html", () => {
  const script = document.createElement("script");
  script.src = "./energy-section/energy-section.js";
  document.body.appendChild(script);
});

/* FOOTER */
loadSection("footer", "./footer/footer.html", () => {
  const script = document.createElement("script");
  script.src = "./footer/footer.js";
  document.body.appendChild(script);
});
