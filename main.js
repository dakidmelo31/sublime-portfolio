
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import splt from 'spltjs'
import barba from '@barba/core';


gsap.registerPlugin(ScrollTrigger)

splt({})

const tl = gsap.timeline();
const main = gsap.timeline();


(function(){
    document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
    const mainBody = document.querySelector("#mainBody")

    gsap.set(mainBody,{
        "overflowY": "hidden",
    })
    gsap.set(".page",{
        filter: "blur(25px)",
    })

    function loadChecker(){
        function doneLoading(){

            gsap.to("#divs .pre-column",{
                height: 0,
                scale: 1,
                borderRadius:"15px",
                stagger: .03,
                duration: 1.2,
                onComplete: ()=>{
                    document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1' />";
                    gsap.set(mainBody,{
                        "overflowY": "auto"
                    })
                    gsap.set(".preloader", {
                        display: "none"
                    })
                    gsap.to(".page", {
                        filter: "blur(0px)",
                        duration: .35
                    })
                }
            })
            }

            const imgs = document.images;
            const total = imgs.length;
            let count = 0;
            const percentElement = document.querySelector("#percentage")

            
            
            function imgLoaded() {
                count++;
                var perc = (100/total * count) << 0;
                console.log(perc)
                
                //updating count
                percentElement.innerHTML = perc;

                if(count == total) return doneLoading();
            
            }

            for(let i = 0; i < total; i++){
                var img = new Image();
                img.onload = imgLoaded;
                img.onerror= imgLoaded;
                img.src = imgs[i].src;
            }
                    
    }
    
document.addEventListener("DOMContentLoaded", loadChecker, false);

}());



window.onload = ()=>{
    
    const storyBtn = document.querySelector("#story")
    const educationBtn = document.querySelector("#education")
    const experienceBtn = document.querySelector("#experience")

    experienceBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        tl.to("div.column",{
            height: 0,
            opacity: 0,
            duration: .2
        })
        tl.to("div.column",{
            display: "none",
            duration: .01
        })

        tl.to("div.experience_description", {
            height: "auto",
            display: "block",
            opacity: 1,
            duration: .2
        })
    })

educationBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.preventDefault();
    tl.to("div.column",{
        height: 0,
        opacity: 0,
        duration: .2
    })
    tl.to("div.column",{
        display: "none",
        duration: .01
    })

    tl.to("div.education_description", {
        height: "auto",
        display: "block",
        opacity: 1,
        duration: .2
    })})


storyBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    e.preventDefault();
    tl.to("div.column",{
        height: 0,
        opacity: 0,
        duration: .2
    })
    tl.to("div.column",{
        display: "none",
        duration: .01
    })

    tl.to("div.story_description", {
        height: "auto",
        display: "block",
        opacity: 1,
        duration: .2
    })})

    // gsap.from( ".experience_description .char", {
    //     scrollTrigger: {
    //         trigger: ".experience_description .char",
    //         start: "top center",
    //         markers: true,
    //         scrub: 1,
    //         onEnter: ()=>{
    //             console.log("Entered")
    //         },
    //         toggleActions: "play none none none"
    //     },
    //     duration: .15,
    //     y: 10,
    //     opacity: 0.2,
    //     stagger: .05
    // })

    gsap.to(".story_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".story_description").offsetHeight * 1),
            scrub: 1,
            // //markers: true,
            onEnter: ()=>{
                document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
            },
            onEnterBack: ()=>{
                document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
            },
            onLeaveBack:()=>{
                document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
            },
            onLeave:()=>{
                document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1.0,
        stagger: .015,
        duration: .1
    })


    gsap.to(".experience_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".experience_description").offsetHeight * 1),
            scrub: 1,
            //markers: true,
            onEnter: ()=>{
                console.log("has entered: ", document.querySelector(".experience_description").offsetHeight)
            },
            onLeave: ()=>{
                console.log("has entered")
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1,
        stagger: .015,
        duration: .1
    })

    gsap.to(".education_description .char",{
        scrollTrigger:{
            trigger: ".story_description",
            start: "top center",
            end: ()=> "+=" + (document.querySelector(".education_description").offsetHeight * 1),
            scrub: 1,
            //markers: true,
            onEnter: ()=>{
                console.log("has entered: ", document.querySelector(".education_description").offsetHeight)
            },
            onLeave: ()=>{
                console.log("has entered")
            },
            toggleActions: "restart none none pause"
        },
        color: "#ffffff",
        y: -10,
        opacity: "1.0",
        scale: 1.0,
        stagger: .015,
        duration: .1
    })


    const sections = gsap.utils.toArray(".projects .project")


    
    if(window.innerWidth < 1024){
    sections.forEach((e)=>{
        if(window.innerWidth < 1024)
{        gsap.from(e,{
            scrollTrigger:{
                trigger: e,
                start: "top center",
                end: ()=> "+=" + (e.offsetHeight * .9),
                scrub: 3,
                //markers: false,
                toggleActions: "play play resume pause"
            },
    
            y: -20,
            opacity: ".4",
            scale: 0.65,
            borderRadius: 50,
            ease: "elastic",
            stagger: .025,
            duration: .2
        })
    }
    
    })
}
else{
    gsap.from(".project-cards .project",{
        scrollTrigger:{
            trigger: ".project-cards",
            // markers: true,
            start: "top 25%",
            end: "bottom center",
            toggleActions: "play play resume pause"
        },

        y: -20,
        opacity: ".4",
        scale: 0.65,
        borderRadius: 50,
        ease: "elastic",
        stagger: .35,
        duration: 1.3
    })


}

    gsap.to(".scroll_texts img", {
        scale: .5,
        duration: .2,
        ease: "slow(.03, .99)",
        fill: "rgb(52, 35, 166)",
        rotateZ: 52 * (22/7) * 23,
        stagger: .5,
        repeat: -1,
        yoyo: true,
        delay: 1
    })


    gsap.to(".row_1", {
        scrollTrigger: {
            trigger: ".scroll_texts",
            //markers: true,
            start: "top center",
            toggleActions: "restart none none pause",
            end: "bottom 200%",
        },
        x: ()=> - document.querySelector(".row_1").offsetWidth * 1,
        duration: 42
    })



document.querySelector(".projects").addEventListener("click", (e)=>{

})


gsap.from(".freelance h3", {
    scrollTrigger:{
        trigger: ".freelance",
        start: "top top",
        end: ()=> "+=" + (document.querySelector(".freelance").offsetHeight * 1),
        scrub: true,
        onEnter: ()=>{
            document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
        },
        onEnterBack: ()=>{
            document.querySelector("#meta1").outerHTML = "<meta content='#000' name='theme-color' id='meta2' />";
        },
        onLeaveBack:()=>{
            document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
        },
        onLeave:()=>{
            document.querySelector("#meta2").outerHTML = "<meta content='#fff' name='theme-color' id='meta1'/>";
        },
    },

    })


gsap.from(".freelance h3", {
    scrollTrigger:{
        trigger: ".freelance",
        start: "top top",
        end: ()=> "+=" + (document.querySelector(".freelance").offsetHeight * .35),
        scrub: 1,
        // //markers: true,
        onEnter: ()=>{
            gsap.from(".freelance p span", {
                scrollTrigger:{
                    trigger: ".freelance",
                    start: "top top",
                    end: ()=> "+=" + (document.querySelector(".freelance").offsetHeight * .35),
                    scrub: true,},
                color: "#fff4",
                x: 10,
                y: 20,
                stagger: .02,
                duration: .05
            })
            
            gsap.from(".freelance .row a", {
                scrollTrigger:{
                    trigger: ".freelance",
                    start: "top top",
                    end: ()=> "+=" + (document.querySelector(".freelance").offsetHeight * .35),
                    scrub: 1,},
                x: -50,
                duration: .05
            })
        },

        toggleActions: "restart none none pause"
    },
    x: -50,
    opacity: .24,
    scale: .85,
    duration: 2
})


gsap.from(".thanks .period", {
    scrollTrigger: {
        trigger: ".thanks",
        start: "top  top",
        end: "bottom 120%",
        // markers: true,
        scrub: 2,
        onEnter: ()=>{
            document.querySelector("#meta1").outerHTML = "<meta content='#fff' name='theme-color' id='meta2' />";
        },
        onEnterBack: ()=>{
            document.querySelector("#meta1").outerHTML = "<meta content='#fff' name='theme-color' id='meta2' />";
        },
        onLeaveBack:()=>{
            document.querySelector("#meta2").outerHTML = "<meta content='#000' name='theme-color' id='meta1'/>";
        },
        onLeave:()=>{
            document.querySelector("#meta2").outerHTML = "<meta content='#000' name='theme-color' id='meta1'/>";
        },
    },
    scale: 50,
    duration: 2
})


// gsap.to("nav#nav, #nav a, #nav a span", {
//     scrollTrigger: {
//         trigger: ".thanks",
//         start: "top center",
//         end: "+=300",
//         markers: true,
//         scrub: 2,
//     },
//     backgroundColor: "#fff",
//     color: "#000",
//     duration: 2
// })


// gsap.to("#nav a i", {
//     scrollTrigger: {
//         trigger: ".thanks",
//         start: "top center",
//         end: "+=300",
//         markers: true,
//         scrub: 2,
//     },
//     scale: 2,
//     backgroundColor: "#fff",
//     color: "#000",
//     duration: 2
// })


if(window.innerWidth > 1024){
    gsap.to("#nav",{
        scrollTrigger: {
            toggleActions: "restart none reverse reverse",
            trigger: ".home",
            start: "70% center",
            end: "bottom bottom",
            // markers: true,
        },
        height: "50px",
        backgroundColor: "#000",
        color: "#fff",
        duration: .4
    })
    gsap.to("#nav a span",{
        scrollTrigger: {
            toggleActions: "restart none reverse reverse",
            trigger: ".home",
            start: "70% center",
            end: "bottom bottom",
            // markers: true,
        },
        color: "#fff",
        duration: .4
    })

}
    
}


barba.init({
    transitions: [
        {
        name: 'about',
            beforeEnter() {
                // update the menu based on user navigation
            // menu.update();
          },
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            gsap.from("nav#nav", {
                position: "fixed",
                zIndex: 20,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                duration: 1

            })
            return gsap.from(data.next.container, {
              opacity: 1
            });
          }
    },
    {
        name: 'home',
            beforeEnter() {
                // update the menu based on user navigation
            // menu.update();
          },
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0
            });
          },
          enter(data) {
            gsap.from("nav#nav", {
                position: "fixed",
                zIndex: 20,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                duration: 1

            })

            return gsap.from(data.next.container, {
              opacity: 1
            });
          }
    }]
})
