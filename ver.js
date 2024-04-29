document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;

    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    h1.textContent = "Impresoras 3D";
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let a1 = document.createElement("a");
    a1.href = "#destacadas";
    a1.textContent = "Impresoras destacadas";
    let li2 = document.createElement("li");
    let a2 = document.createElement("a");
    a2.href = "#marcas";
    a2.textContent = "Marcas";
    let li3 = document.createElement("li");
    let a3 = document.createElement("a");
    a3.href = "#ofertas";
    a3.textContent = "Ofertas";
    let li4 = document.createElement("li");
    let a4 = document.createElement("a");
    a4.href = "#contacto";
    a4.textContent = "Contacto";

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);
    body.appendChild(header);

    let section1 = document.createElement("section");
    section1.id = "destacadas";
    let h2_1 = document.createElement("h2");
    h2_1.textContent = "Impresoras 3D destacadas";
    let div1 = document.createElement("div");
    div1.className = "productos";

    let section2 = document.createElement("section");
    section2.id = "marcas";
    let h2_2 = document.createElement("h2");
    h2_2.textContent = "Marcas de impresoras 3D";
    let div2 = document.createElement("div");
    div2.className = "marcas";

    let section3 = document.createElement("section");
    section3.id = "ofertas";
    let h2_3 = document.createElement("h2");
    h2_3.textContent = "Ofertas en impresoras 3D";
    let div3 = document.createElement("div");
    div3.className = "ofertas";

    let section4 = document.createElement("section");
    section4.id = "contacto";
    let h2_4 = document.createElement("h2");
    h2_4.textContent = "Contacto";
    let form = document.createElement("form");
    form.id = "formulario-contacto";

    section1.appendChild(h2_1);
    section1.appendChild(div1);
    section2.appendChild(h2_2);
    section2.appendChild(div2);
    section3.appendChild(h2_3);
    section3.appendChild(div3);
    section4.appendChild(h2_4);
    section4.appendChild(form);
    body.appendChild(section1);
    body.appendChild(section2);
    body.appendChild(section3);
    body.appendChild(section4);

    let footer = document.createElement("footer");
    let pFooter = document.createElement("p");
    pFooter.textContent = "2024 Impresoras3D.com";
    pFooter.style.color = "#fff";

    footer.appendChild(pFooter);
    body.appendChild(footer);
});
