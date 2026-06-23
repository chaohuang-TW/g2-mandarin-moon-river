(function () {
  const script = document.currentScript;
  const dataUrl = new URL("../data/courses.json", script.src);
  const courseId = document.body.dataset.courseId;
  if (!courseId) return;

  const rootUrl = "../";
  const catalogUrl = "../#grade-2";

  function selectFirst(...selectors) {
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) return element;
    }
    return null;
  }

  function createLink(href, text) {
    const link = document.createElement("a");
    link.className = "course-platform-link";
    link.href = href;
    link.textContent = text;
    return link;
  }

  function injectTopLinks(host) {
    if (!host || host.querySelector(".course-platform-bar")) return;
    const bar = document.createElement("nav");
    bar.className = "course-platform-bar";
    bar.setAttribute("aria-label", "頁面導覽");
    bar.append(
      createLink(rootUrl, "回首頁"),
      createLink(catalogUrl, "回課程目錄")
    );
    host.prepend(bar);
  }

  function injectSkills(course) {
    const hero = selectFirst(".hero", ".home-screen");
    if (!hero || hero.nextElementSibling?.classList?.contains("course-platform-skills")) return;
    const section = document.createElement("section");
    section.className = "course-platform-skills";
    section.innerHTML = `<h2>這一課會練到什麼</h2><ul>${course.skillsIntro.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    hero.insertAdjacentElement("afterend", section);
  }

  function injectSummary(course) {
    const panel = selectFirst("#result-panel", "#finishPanel .summary-card", "#finishPanel", ".summary-card", ".result-panel");
    if (!panel || panel.querySelector(".course-platform-summary")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "course-platform-summary";
    wrapper.innerHTML = `<h3>我學會了什麼</h3><p>${course.learnSummary}</p>`;
    panel.append(wrapper);
  }

  function syncTitles(course) {
    document.title = course.platformTitle;
    const heroTitle = selectFirst(".hero h1", ".home-copy h1", ".hero-copy h1");
    if (heroTitle) heroTitle.textContent = course.platformTitle;
    const footerLead = selectFirst(".site-credit p:first-child", ".site-footer p:first-child");
    if (footerLead) footerLead.textContent = course.basis;
  }

  fetch(dataUrl)
    .then((response) => response.json())
    .then((courses) => {
      const course = courses.find((item) => item.id === courseId);
      if (!course) return;
      const host = selectFirst(".shell", ".app-shell");
      injectTopLinks(host);
      injectSkills(course);
      injectSummary(course);
      syncTitles(course);
    })
    .catch(() => {});
})();
