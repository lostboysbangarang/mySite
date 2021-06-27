var ringOne=document.getElementsByClassName("container");
const back=document.getElementsByClassName("container_inner");
$(document).ready(function(){
    setRingSize(ringOne);
    
});
var viewPortWidth;
var viewPortHeight;
function getViewport() {
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;
    }
    return [viewPortWidth, viewPortHeight];
};
function setRingSize(element) {
    wh=getViewport();
    width=wh[0].toString();
    height=wh[1].toString();
    for (var i=0; i < element.length; i++) {
        element[i].style.height=height+"px";
        console.log("\t\t\tHeight:\t"+height);
        if (i>0){
            element[i].style.marginTop="-"+height+"px"
        }
    }
}
function flip() {
    back[0].classList.toggle("active");
}



window.addEventListener('resize', setRingSize(ringOne));