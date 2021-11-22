class Drumkit{
       constructor(){
             this.pads = document.querySelectorAll('.pad');
             this.playBtn = document.querySelector('.play');
             this.kickAudio = document.querySelector('.kick-sound');
             this.snareAudio = document.querySelector('.snare-sound');
             this.hihatAudio = document.querySelector('.hihat-sound');
             this.index = 0; // This is gonna track our audio
             this.bpm = 150;
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
                if(bar.classList.contains('active')){
                  
                }
           });
          this.index++;
    }
    start(){
      const interval = (60/this.bpm) * 1000;
        setInterval(() =>{
           this.repeat();
        }, interval)
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