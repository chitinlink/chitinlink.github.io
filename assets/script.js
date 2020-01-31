---

---

document.querySelectorAll("a.playsound")
  .forEach(a => {
    p = Object.assign(document.createElement("span"), {
      innerHTML:
        a.innerHTML
        + ` <sup><i class="fas w-volume-up"></i></sup>`
        + `<audio src="${a.href}"></audio>`,
      className: "playsound"
    });
    a.parentNode.replaceChild(p, a);
    p.addEventListener("click", () => p.querySelector("audio").play());
  });

// Colors selected from clrs.cc/a11y by Adam Morse
const colors = {{ site.data.colors | jsonify }};
c = colors[Math.floor(Math.random() * (colors.length))];
document.body.style.setProperty("--color",      `#${c[0]}`);
document.body.style.setProperty("--background", `#${c[1]}`);
