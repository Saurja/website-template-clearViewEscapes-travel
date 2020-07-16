import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader';


if (module.hot) {
    module.hot.accept()
}

/*      Code Below      */
let modal 
let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();


document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        if (typeof modal == 'undefined') {
            import('./modules/Modal').then(x => {
                modal = new x .default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a Problem"))
        } else {
            modal.openTheModal()
        }
    })
})

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)