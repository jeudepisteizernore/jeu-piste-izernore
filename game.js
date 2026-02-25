// game.js — sons + helpers + animations

const SFX = {
  click: new Audio("audio/click.mp3"),
  ok: new Audio("audio/ok.mp3"),
  bad: new Audio("audio/bad.mp3"),
};

function play(name){
  try{
    const a = SFX[name].cloneNode();
    a.volume = (name === "click") ? 0.55 : 0.75;
    a.play();
  }catch(e){}
}

function $(id){ return document.getElementById(id); }

function setDone(n){ localStorage.setItem("balise_"+n, "ok"); }
function isDone(n){ return localStorage.getItem("balise_"+n) === "ok"; }

function shake(el){
  if(!el) return;
  el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake");
}
function glow(el){
  if(!el) return;
  el.classList.remove("glow"); void el.offsetWidth; el.classList.add("glow");
}