(function () {
  const pages = [
    { href: "index.html",           label: "Hábitos",  icon: "◈" },
    { href: "plano_de_treino.html", label: "Treinos",  icon: "◉" },
    { href: "timer.html",           label: "Timer",    icon: "◷" },
    { href: "calculadora_IMC.html", label: "IMC",      icon: "◎" },
    { href: "progressao",           label: "progressão", icon: "◎" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const links = pages.map(p => {
    const active = current === p.href ? 'class="active"' : '';
    return `<a href="${p.href}" ${active}><span class="nav-icon">${p.icon}</span><span class="nav-label">${p.label}</span></a>`;
  }).join("");

  const html = `
<nav id="main-nav">
  <div class="nav-brand">
    <span class="nav-logo">✦</span> MODO DEUSA
  </div>
  <div class="nav-links">${links}</div>
</nav>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  #main-nav {
    position: sticky;
    top: 0;
    z-index: 999;
    background: rgba(15, 10, 8, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(212, 165, 116, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 60px;
  }
  .nav-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    letter-spacing: 5px;
    color: #e8a0bf;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .nav-logo {
    font-size: 20px;
    color: #f5bdd5;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .nav-links a {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 18px;
    border-radius: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: rgba(212, 165, 116, 0.45);
    text-decoration: none;
    transition: all 0.2s;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .nav-links a:hover {
    color: #e8a0bf;
    background: rgba(212, 165, 116, 0.06);
  }
  .nav-links a.active {
    color: #f5bdd5;
    background: rgba(212, 165, 116, 0.1);
  }
  .nav-icon {
    font-size: 14px;
    line-height: 1;
  }
  @media (max-width: 600px) {
    #main-nav { padding: 0 16px; }
    .nav-label { display: none; }
    .nav-links a { padding: 8px 12px; }
    .nav-brand { font-size: 13px; letter-spacing: 3px; }
  }
</style>`;

  document.getElementById("navbar").outerHTML = html;
})();
