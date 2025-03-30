function page1Animation() {
    var tl = gsap.timeline()
    tl.from("nav h1, nav h4 , nav button", {
        y: -40,
        opacity: 0,
        delay: 1,
        duration: 0.7,
        stagger: 0.15
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    })

    tl.from(".center-part1 p", {
        x: -80,
        opacity: 0,
        duration: 0.4
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.1
    })

    tl.from(".center-part2 img", {
        x: 100,
        opacity: 0,
        duration: 0.5
    }, "-=0.7")

}
page1Animation()

function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "top -50%",
            scrub: 5
        }
    })

    tl2.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        stagger: 0.2,

    })


    tl2.from(".services", {
        y: 50,
        opacity: 0,
        duration: 0.5
    })

    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim1")

    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "anim2")

    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "anim2")
}
page2Animation()

function page3Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 60%",
            end: "top -40",
            scrub: 5
        }
    })

    tl3.from(".page-end", {
        x: 600,
        opacity: 0,
        duration: 1
    }, "hehe")

    tl3.from(".services-2", {
        x: -600,
        opacity: 0,
        duration: 1
    }, "hehe")
}
page3Animation()

