class Drumkit{
       constructor(){
             this.pads = document.querySelectorAll('.pad');
             this.playBtn = document.querySelector('.play');
             this.kickAudio = document.querySelector('.kick-sound');
             this.snareAudio = document.querySelector('.snare-sound');
             this.hihatAudio = document.querySelector('.hihat-sound');
             this.index = 0; // This is gonna track our audio
             this.bpm = 150;
             this.isPlaying = null;
       }
       activePad(){
          this.classList.toggle("active");
       }
    repeat(){
        let step = this.index % 8;
           const activeBars = document.querySelectorAll(`.b${step}`);
           // Loop over the pads
           activeBars.forEach(bar => {
                bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
                // check if the pads are active 
                if(bar.classList.contains('active')){
                 // check each sound
                 if(bar.classList.contains('kick-pad')){
                  this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                 }
                 if(bar.classList.contains('snare-pad')){
                   this.snareAudio.currentTime = 0;
                  this.snareAudio.play();
               }
               if(bar.classList.contains('hihat-pad')){
                this.hihatAudio.currentTime = 0;
                this.hihatAudio.play();
             }
                }
           });
          this.index++;
    }
    start(){
      const interval = (60/this.bpm) * 1000;
      // check if it's playing
      if(!this.isPlaying){
      this.isPlaying = setInterval(() =>{
               this.repeat();
        }, interval)
      }else{
        // clear the interval
          clearInterval(this.isPlaying);
          this.isPlaying = null;
      }
    }
    updateBtn(){
      if(!this.isPlaying){
        this.playBtn.innerText = 'stop';
        this.playBtn.classList.add = ('active');
      }else{
        this.playBtn.innerText = 'play';
        this.playBtn.classList.add = ('active');
      }
    }
}
  const drumkit = new Drumkit ();
    drumkit.pads.forEach(pad => {
        pad.addEventListener('click' , drumkit.activePad);
        pad.addEventListener('animationend',function(){
             this.style.animation = "";
        });
    });
     drumkit.playBtn.addEventListener('click', function (){
        drumkit.start();
     });