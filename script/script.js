const lazyElements = [...document.querySelectorAll('.lazy')]

for(const lazy of lazyElements)
{
    const image = document.createElement('img')
    image.addEventListener('load', () =>
    {
        lazy.classList.add('loaded')
        lazy.style.backgroundImage = `url(${image.src})`
    })
    image.src = lazy.dataset.src
}
/**
 * Parallax scroll
 */
const scrollParallaxes = document.querySelectorAll('.parallax-scroll')

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    for(const scrollParallax of scrollParallaxes) {
        const depth = parseFloat(scrollParallax.dataset.parallaxScrollDepth)
        const translateY = depth * scrollY
        scrollParallax.style.transform = `translateY(${translateY}px)`
    }
})
/**
 * Sizes
 */
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
})
/**
 * Parallax cursor
 */
const cursorParallaxes = document.querySelectorAll('.parallax-cursor')
window.addEventListener('mousemove', (event) => {
    const ratioX = event.clientX / windowWidth - 0.5
    const ratioY = event.clientY / windowHeight - 0.5
    for(const cursorParallax of cursorParallaxes) {
        const depth = parseFloat(cursorParallax.dataset.parallaxCursorDepth)
        const translateX = depth * ratioX * 100
        const translateY = depth * ratioY * 100
        cursorParallax.style.transform = `translate(${translateX}%, ${translateY}%)`
        
    }
})
