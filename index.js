
window.addEventListener("load", (event) => {
    var skillsElement = document.querySelector("#skillsList");
    
    var options = {
        root:null,
        rootMargin: "0px",
        threshhold: 0.75
    };
    var observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(skillsElement);
}, false);

function handleIntersection(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("intersecting");
            //entry.target.classList.add('skill-animation');
            var ListItems = entry.target.children;
            for(var i = 0; i < ListItems.length; i++){
                ListItems[i].classList.add('skill-animation');
                ListItems[i].style.transitionDelay = i/10 + "s";
            }
            console.log(ListItems.length);
        }
    });
}