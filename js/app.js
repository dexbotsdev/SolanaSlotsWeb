gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 991) {
    const merch = document.querySelectorAll('.card');
    const cards = document.getElementById('cards');

    gsap.to(cards, {
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: cards,
            start: "top center",
            onEnter: () => cards.classList.add("active"),
            onEnterBack: () => cards.classList.add("active"),
            onLeave: () => cards.classList.remove("active"),
            scrub: true,
        },
    });
}

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
        elem, {
            x: x,
            y: y,
            autoAlpha: 0
        }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        }
    );
}

function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function(elem, index) {
        hide(elem); // assure that the element is hidden when scrolled into view

        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 80%", // Adjust the start position based on your needs
                onEnter: function() {
                    animateFrom(elem, 1)
                },
                onEnterBack: function() {
                    animateFrom(elem, -1)
                },
                onLeave: function() {
                    hide(elem)
                }
            },
            delay: index * 1 // Stagger the delay by multiplying index with 1 second
        });
    });
});

let langDropdown = document.getElementById("langDropdown");
langDropdown.addEventListener("click", function() {
    this.classList.toggle("active");
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)