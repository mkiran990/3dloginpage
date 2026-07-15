const card = document.getElementById("card");

document.addEventListener("mousemove", (e)=>{

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const rotateY = (e.clientX - x) / 20;
    const rotateX = -(e.clientY - y) / 20;

    card.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

document.addEventListener("mouseleave", ()=>{

    card.style.transform =
    "rotateX(0deg) rotateY(0deg)";

});
