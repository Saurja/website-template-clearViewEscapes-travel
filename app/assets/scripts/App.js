import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'


if (module.hot) {
    module.hot.accept()
}

/*      Code Below      */


let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)