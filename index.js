
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
            var ListItems = entry.target.children;
            for(var i = 0; i < ListItems.length - 1; i++){
                ListItems[i].classList.add('skill-animation');
                ListItems[i].style.animationDelay = i + "s";
            }
            setTimeout(function(){document.getElementsByClassName("Cursor")[0].classList.remove("hidden")}, 15*1000);
        }
    });
}

function GoAbout(){
    window.open("#about", "_self")
}
function GoSkills(){
    window.open("#skills", "_self")
}
function GoExperience(){
    window.open("#experience", "_self")
}
function GoContact(){
    window.open("#contact", "_self")
}
