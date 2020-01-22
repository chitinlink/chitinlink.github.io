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
const colors = {{ site.data.colors | jsonify  }};
let _c = ["0074d9","111111"];
setInterval(
  () => {
    let c;
    while (true) {
      c = colors[Math.floor(Math.random() * (colors.length))];
      if (c !== _c) break;
    }
    document.body.style = `--color: #${c[0]}; --background: #${c[1]};`;
  }, 5*1000
);
