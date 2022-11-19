class Timer {
    constructor(durationINput, startButton, pauseButton, callBacks) {
        this.durationINput = durationINput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callBacks){
            this.onStart = callBacks.onStart
            this.onTick = callBacks.onTick
            this.onComplete = callBacks.onComplete
        }

        this.durationINput.addEventListener("input", this.onDurationChange)
        this.startButton.addEventListener("click", this.start)
        this.pauseButton.addEventListener("click", this.pause)
    }

    get remTime(){
        return parseFloat(this.durationINput.value);
    ;}
    
    set remTime(time){
        this.durationINput.value = time.toFixed(2);
    }

    start = () => {
         if(this.onStart){
            this.onStart(this.remTime);
         }
         this.timerInterval = setInterval(this.tick, 50)
    }

    pause = () => {
        clearInterval(this.timerInterval)
    }

    tick = () => {
        if(this.remTime <= 0){
            this.pause();
            if(this.onComplete && this.remTime === 0) this.onComplete();
        }else {
            this.remTime = this.remTime - .05;
            if(this.onTick) {
                this.onTick(this.remTime);
            }
        } 
    }

}