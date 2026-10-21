(function () {
  "use strict";

  var C = window.THOON || {};
  var P = (window.PROJETOS || []).slice();
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- contato ---------- */
  var temWhats = /^\d{12,13}$/.test(String(C.whatsapp || ""));

  function linkContato(msg) {
    if (temWhats) return "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(msg);
    return "mailto:" + C.email + "?subject=" + encodeURIComponent("Orçamento — site Thoon") + "&body=" + encodeURIComponent(msg);
  }

  var MSG = {
    "plano-landing": "Olá! Vim pelo site da Thoon e tenho interesse em uma landing page.",
    "plano-site": "Olá! Vim pelo site da Thoon e tenho interesse em um site institucional.",
    "plano-sistema": "Olá! Vim pelo site da Thoon e tenho interesse em um sistema de gestão.",
    "plano-app": "Olá! Vim pelo site da Thoon e tenho interesse em um aplicativo."
  };

  $$("[data-wa]").forEach(function (a) {
    var msg = MSG[a.getAttribute("data-wa")] || C.mensagemPadrao;
    a.href = linkContato(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-mail]").forEach(function (a) {
    a.href = "mailto:" + C.email + "?subject=" + encodeURIComponent("Contato — site Thoon");
  });
  $$("[data-cfg-text]").forEach(function (el) { el.textContent = C[el.getAttribute("data-cfg-text")] || ""; });
  $$("[data-cfg]").forEach(function (el) { el.textContent = C[el.getAttribute("data-cfg")] || ""; });
  if (!temWhats) {
    var lbl = $("#quoteBtnLabel");
    if (lbl) lbl.textContent = "Enviar pedido de orçamento";
  }
  if (C.instagram) {
    var ig = $("#igLink");
    ig.href = "https://instagram.com/" + C.instagram;
    ig.hidden = false;
  }
  var gh = $("#ghLink");
  if (gh) gh.href = "https://github.com/" + (C.github || "");
  var ano = $("#ano");
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---------- preços ---------- */
  $$("[data-preco]").forEach(function (el) {
    var v = C.precos && C.precos[el.getAttribute("data-preco")];
    if (typeof v === "number") {
      el.innerHTML = "<small>a partir de</small>R$ " + v.toLocaleString("pt-BR");
    } else {
      el.innerHTML = "<small>investimento</small>Sob orçamento";
    }
  });

  /* ---------- tema ---------- */
  var root = document.documentElement;
  function temaAtual() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  $("#temaBtn").addEventListener("click", function () {
    var prox = temaAtual() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", prox);
    try { localStorage.setItem("thoon-tema", prox); } catch (e) { /* modo privado */ }
  });

  /* ---------- menu e topo ---------- */
  var nav = $("#nav"), menuBtn = $("#menuBtn");
  function fecharMenu() { nav.classList.remove("is-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", function () {
    var abre = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", abre);
    menuBtn.setAttribute("aria-expanded", String(abre));
  });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", fecharMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharMenu(); });

  var topo = $("#topo");
  function aoRolar() { topo.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", aoRolar, { passive: true });
  aoRolar();

  /* ---------- portfólio ---------- */
  var ROT = { site: "Site", sistema: "Sistema", app: "App" };
  var LIMITE = 9;
  var filtro = "todos", tudo = false;

  P.sort(function (a, b) { return (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0); });

  function capaMock(m, titulo) {
    var barras = [42, 68, 54, 88, 62, 96, 74].map(function (h) { return '<i style="height:' + h + '%"></i>'; }).join("");
    return '<div class="mock" style="--c:' + esc(m.cor) + '">' +
      '<span class="mock__sig">' + esc(m.sigla) + "</span>" +
      '<div class="mock__win"><div class="mock__side"><i></i><i></i><i></i><i></i><i></i></div>' +
      '<div class="mock__main"><div class="mock__h">' + esc(titulo) + "<b>" + esc(m.rotulo || "") + "</b></div>" +
      '<div class="mock__kpis"><i></i><i></i><i></i></div><div class="mock__chart">' + barras + "</div></div></div></div>";
  }

  function midia(p, alt) {
    if (p.img) {
      return '<img src="' + esc(p.img) + '" alt="' + esc(alt) + '" loading="lazy" width="1200" height="750" />' +
        (p.mobile ? '<img class="work__mobile" src="' + esc(p.mobile) + '" alt="" loading="lazy" width="600" height="1299" />' : "");
    }
    if (p.mobile) return '<img src="' + esc(p.mobile) + '" alt="' + esc(alt) + '" loading="lazy" width="600" height="1299" />';
    return capaMock(p.mock || { cor: "#0A6B5C", sigla: "T" }, p.titulo);
  }

  var grid = $("#gridWork");
  grid.innerHTML = P.map(function (p, i) {
    var phone = !p.img && p.mobile;
    return '<button type="button" class="work reveal" data-i="' + i + '" data-tipo="' + esc(p.tipo) + '">' +
      '<div class="work__media' + (phone ? " work__media--phone" : "") + '">' +
      '<span class="work__badge">' + (p.produto ? "Produto Thoon" : ROT[p.tipo]) + "</span>" +
      (p.link ? '<span class="work__badge work__live"><span class="dot"></span>Ao vivo</span>' : "") +
      midia(p, "Tela do projeto " + p.titulo) + "</div>" +
      '<div class="work__body"><span class="work__seg">' + esc(p.segmento) + "</span>" +
      "<h3>" + esc(p.titulo) + "</h3><p>" + esc(p.resumo) + "</p>" +
      '<span class="work__more">Ver o projeto</span></div></button>';
  }).join("");

  var cards = $$(".work", grid);
  var maisBox = $("#maisBtn").parentElement;

  function contar() {
    var n = { todos: P.length, site: 0, sistema: 0, app: 0 };
    P.forEach(function (p) { n[p.tipo]++; });
    $$("[data-count]").forEach(function (s) { s.textContent = n[s.getAttribute("data-count")]; });
  }

  function aplicarFiltro() {
    var vis = 0;
    cards.forEach(function (c) {
      var ok = filtro === "todos" || c.getAttribute("data-tipo") === filtro;
      if (ok) vis++;
      c.hidden = !ok || (filtro === "todos" && !tudo && vis > LIMITE);
      if (!c.hidden) c.classList.add("is-in");
    });
    maisBox.hidden = !(filtro === "todos" && !tudo && P.length > LIMITE);
  }

  $$(".filters button").forEach(function (b) {
    b.addEventListener("click", function () {
      filtro = b.getAttribute("data-filtro");
      $$(".filters button").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
      aplicarFiltro();
    });
  });
  $("#maisBtn").addEventListener("click", function () { tudo = true; aplicarFiltro(); });
  contar();
  aplicarFiltro();

  /* ---------- janela do projeto ---------- */
  var dlg = $("#caseDlg");
  function abrirCaso(p) {
    var media = $("#caseMedia");
    media.className = "case__media" + (!p.img && p.mobile ? " case__media--phone" : "");
    media.innerHTML = p.img
      ? '<img src="' + esc(p.img) + '" alt="Tela do projeto ' + esc(p.titulo) + '" />'
      : p.mobile
        ? '<img src="' + esc(p.mobile) + '" alt="Tela do app ' + esc(p.titulo) + '" />'
        : capaMock(p.mock || { cor: "#0A6B5C", sigla: "T" }, p.titulo);
    $("#caseSeg").textContent = p.segmento;
    $("#caseTitle").textContent = p.titulo;
    $("#caseResumo").textContent = p.resumo;
    $("#caseDesafio").textContent = p.desafio || "";
    $("#caseEntrega").innerHTML = (p.entrega || []).map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("");
    $("#caseStack").innerHTML = (p.stack || []).map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
    var msg = "Olá! Vi o projeto “" + p.titulo + "” no site da Thoon e quero algo parecido para o meu negócio.";
    $("#caseCtas").innerHTML =
      '<a class="btn btn--wa" target="_blank" rel="noopener" href="' + esc(linkContato(msg)) + '">Quero um projeto assim</a>' +
      (p.link ? '<a class="btn btn--ghost" target="_blank" rel="noopener" href="' + esc(p.link) + '">Abrir ao vivo ↗</a>' : "");
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    dlg.scrollTop = 0;
  }
  cards.forEach(function (c) {
    c.addEventListener("click", function () { abrirCaso(P[+c.getAttribute("data-i")]); });
  });
  $("#caseClose").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- orçamento ---------- */
  var form = $("#quoteForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    var err = $("#quoteErr");
    if (!nome) {
      err.textContent = "Diga como podemos te chamar para enviarmos o orçamento.";
      form.nome.setAttribute("aria-invalid", "true");
      form.nome.focus();
      return;
    }
    err.textContent = "";
    form.nome.removeAttribute("aria-invalid");

    var tipo = (form.querySelector('input[name="tipo"]:checked') || {}).value || "Ainda não sei";
    var recursos = $$('input[name="recurso"]:checked', form).map(function (i) { return i.value; });
    var empresa = form.empresa.value.trim();
    var obs = form.obs.value.trim();

    var linhas = [
      "Olá! Vim pelo site da Thoon e quero um orçamento.",
      "",
      "*Nome:* " + nome,
      empresa ? "*Empresa/segmento:* " + empresa : null,
      "*Preciso de:* " + tipo,
      recursos.length ? "*Não pode faltar:* " + recursos.join(", ") : null,
      obs ? "*Objetivo:* " + obs : null
    ].filter(function (l) { return l !== null; });

    var url = linkContato(linhas.join("\n"));
    if (temWhats) window.open(url, "_blank", "noopener");
    else window.location.href = url;
  });

  /* ---------- revelar ao rolar ---------- */
  var alvos = $$(".svc, .diff, .steps li, .plan, .pains__list li, .faq__list details");
  alvos.forEach(function (el) { el.classList.add("reveal"); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }
})();
