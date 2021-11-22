class Drumkit{
       constructor(){
             this.pads = document.querySelectorAll('.pad');
             this.kickAudio = document.querySelector('.kick-sound');
             this.snareAudio = document.querySelector('.snare-sound');
             this.hihatAudio = document.querySelector('.hihat-sound');
             this.index = 0; // This is gonna track our audio
       }
}