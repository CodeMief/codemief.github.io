import { typewriterAnimation } from "./typewriter.js";
import Button from './button.js';



// ----- Button Script -----

const btnWork = new Button('btnPortfolio');
const btnAbout = new Button('btnAboutme');
const btnContact = new Button('btnContact');

// Show only current page
const currentPage = document.getElementById('portfolio-page');
const otherPages = document.querySelector("main").children;
Array.from(otherPages).forEach((page) => {
    page.style.display = 'none';
});
currentPage.style.display = 'block';

// Highlighted Current Nav Item
btnWork.button.classList.add("highlightedItem");



// ----- Animations -----
typewriterAnimation();

// const sectionArjane = docuement.getElementById("section-arjane");
const btnArjane = document.getElementById("btn-arjane");

btnArjane.addEventListener("click", function() {
    const main = document.getElementsByName("main");

    main.style.display = "none";


}); 



document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopButton = document.querySelector('.scroll-to-top');
  
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    });
  
    scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  