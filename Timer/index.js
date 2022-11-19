const duration  = document.getElementById("duration")
const pauseBtn  = document.getElementById("pauseBtn")
const startBtn  = document.getElementById("startBtn")
const circ = document.getElementById('circ')
const shape = circ.getAttribute("r") * 2 * Math.PI;
circ.setAttribute("stroke-dasharray", shape);

// alternative implementation circle element 
// const circ = document.getElementById('circ')
// let attrVal = circ.getAttribute("stroke-dashoffset")
// let durVal = attrVal / duration.value;

// function circleRun(){
//     console.log(durVal)
//     circ.style.strokeDashoffset -= durVal;
// }


var  currVal;


var timer = new Timer(duration,startBtn,pauseBtn, {
    onStart(duration){
        currVal = duration
    }, 
    onTick(remTime){
        circ.setAttribute("stroke-dashoffset", shape * remTime / currVal - shape);
    }, 
    onComplete(){
        console.log("Timer is completed")
    }
});

   