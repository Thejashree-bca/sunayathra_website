AOS.init({
    duration:1000,
    once:true
});

// Navbar background change while scrolling

window.addEventListener("scroll",function(){

    const nav=document.querySelector("nav");

    if(window.scrollY>100){

        nav.style.background="rgba(10,35,66,.95)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
    }

    else{

        nav.style.background="rgba(10,35,66,.75)";
        nav.style.boxShadow="none";
    }

});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter,20);

        } else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});