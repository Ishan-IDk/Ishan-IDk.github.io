class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from,
          to,
          start,
          end
        });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  const phrases = ["Welcome"];
  
  const el = document.querySelector(".glitchtext");
  const fx = new TextScramble(el);
  
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next,22000);
    });
    counter = (counter + 1) % phrases.length;
  };
  
  next();
  
gsap.fromTo(
    ".page",
    { opacity: 0 },
    {
      opacity: 1,
      display: "block",
      duration: 1,
      delay: 4,
    }
);
gsap.fromTo(
    ".load",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1,
      delay: 3,
    }
);

var Hero = document.getElementById('hero');
var About = document.getElementById('about');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');
About.style.display='none';
projects.style.display='none';
Hero.style.display='flex';
contact.style.display='none'

function about(){
    if(About.style.display=='none'){
        About.style.display='block';
        Hero.style.display='none';
        projects.style.display='none';
        contact.style.display='none'
       
    }
    else{
        About.style.display='block';
    }
}
function home(){
    if(Hero.style.display='none'){
        Hero.style.display='flex';
        About.style.display='none';
        projects.style.display='none';
        contact.style.display='none'
    }
    else{
        Hero.style.display='flex';
    }
}
function projectlol(){
    if(projects.style.display=='none'){
        projects.style.display='flex';
        Hero.style.display='none';
        About.style.display='none';
        contact.style.display='none' 
    }
    else{
        projects.style.display='flex';
    }
}

function contactolol(){
    if(contact.style.display=='none'){
        contact.style.display='block'
        About.style.display='none';
        projects.style.display='none';
        Hero.style.display='none';
    }
    else{
        contact.style.display='block'
    }
}

var typing=new Typed(".text", {
    strings: [ "Student.", "Web Dev.", "Game Dev.", "Youtuber.", "Coder."],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
var typing=new Typed(".text2", {
    strings: [ "About Me", "Sobre Mi"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});


document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
  t.style.top = n.clientY + "px", 
  e.style.left = n.clientX + "px", 
  e.style.top = n.clientY + "px", 
  i.style.left = n.clientX + "px", 
  i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
  e = document.getElementById("cursor2"),
  i = document.getElementById("cursor3");
function n(t) {
  e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
