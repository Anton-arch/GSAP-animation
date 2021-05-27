'use strict'

let load = gsap.timeline();
let menuOpen = gsap.timeline();
let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let closeBtn = document.querySelector('.close');

load.from('.hero__title', {opacity: 0, y: 50, duration: 0.7})
    .from('.hero__btn', {opacity: 0, y: 50, duration: 0.5}, "-=0.7")
    .from('.hero__descr', {opacity: 0, duration: 1})
    .from('.first-photo', {opacity: 0, scale: 0.8, duration: 0.5}, "-=0.5")
    .from('.second-photo', {opacity: 0, scale: 0.8, duration: 0.5}, "-=0.3")
    .from('.third-photo', {opacity: 0, scale: 0.8, duration: 0.5}, "-=0.2")
    .from('.photos__author', {opacity: 0, duration: 1}, "-=0.3")

burger.addEventListener('click', function() {
  menu.classList.add('menu--open')
  menuOpen.from('.menu__top', {opacity: 0, y: -50, duration: 0.3})
          .to('.close', {opacity: 1, duration: 0.3})
          .from('.menu__bottom', {opacity: 0, y: 50, duration: 0.5}, "-=0.45")
          .from('.nav', {opacity: 0, y: 50, duration: 0.5})
          .from('.social', {opacity: 0, y: 50, duration: 0.5})
          .from('.menu__right', {opacity: 0, y: 50, duration: 0.5}, "-=0.5")

})

closeBtn.addEventListener('click', function() {
  menu.classList.remove('menu--open')
})


