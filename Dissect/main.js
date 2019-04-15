const bassButton = document.getElementById('solo-bass');
const guitButton = document.getElementById('solo-guitar');
const voxButton = document.getElementById('solo-vox');
const organButton = document.getElementById('solo-organ');
const drumsButton = document.getElementById('solo-drums');


const bass = document.getElementById('bass-track');
const guit = document.getElementById('guitar-track');
const vox = document.getElementById('vox-track');
const organ = document.getElementById('organ-track');
const drums = document.getElementById('drums-track');

const togglePlayback = () => {
    if (bass.paused === true){
        bass.play(); guit.play(); vox.play(); organ.play(); drums.play();
    } else {
        bass.pause(); guit.play(); vox.play(); organ.play(); drums.play();
    }

}

const resetTrack = () => {
    bass.load(); guit.load(); vox.load(); organ.load(); drums.load();
}

const solo = (event) => {
    debugger
    if (event.innerHTML == "Solo Bass"){
        vox.muted = true;
        guit.muted = true;
        organ.muted = true;
        drums.muted = true;
        bass.muted = false;
    }

    if (event.innerHTML == "Solo Guitar"){
        vox.muted = true;
        bass.muted = true;
        organ.muted = true;
        drums.muted = true;
        guit.muted = false;
    }

    if (event.innerHTML == "Solo Vocals"){
        bass.muted = true;
        guit.muted = true;
        organ.muted = true;
        drums.muted = true;
        vox.muted = false;
    }

    if (event.innerHTML == "Solo Organ"){
        bass.muted = true;
        guit.muted = true;
        vox.muted = true;
        drums.muted = true;
        organ.muted = false;
    }

    if (event.innerHTML == "Solo Drums"){
        bass.muted = true;
        guit.muted = true;
        vox.muted = true;
        organ.muted = true;
        drums.muted = false;
    }
}

const loadTrack = (event) => {
    if (event.innerHTML == "A Day In The Life"){
        let bassSrc  = document.getElementById("bass-track").firstChild.nextSibling;
        bassSrc.src  = "";
        let voxSrc  = document.getElementById("vox-track").firstChild.nextSibling;
        voxSrc.src  = "";
        let guitarSrc  = document.getElementById("guitar-track").firstChild.nextSibling;
        guitarSrc.src  = "";
        let organSrc  = document.getElementById("organ-track").firstChild.nextSibling;
        organSrc.src  = "";
        let drumsSrc  = document.getElementById("drums-track").firstChild.nextSibling;
        drumsSrc.src  = "";
    }

    if (event.innerHTML == "Abbey Road Medley"){
        let bassSrc  = document.getElementById("bass-track").firstChild.nextSibling;
        bassSrc.src  = "";
        let voxSrc  = document.getElementById("vox-track").firstChild.nextSibling;
        voxSrc.src  = "";
        let guitarSrc  = document.getElementById("guitar-track").firstChild.nextSibling;
        guitarSrc.src  = "";
        let organSrc  = document.getElementById("organ-track").firstChild.nextSibling;
        organSrc.src  = "";
        let drumsSrc  = document.getElementById("drums-track").firstChild.nextSibling;
        drumsSrc.src  = "";
    }

    if (event.innerHTML == "Lucy in the Sky with Diamonds"){
        let bassSrc  = document.getElementById("bass-track").firstChild.nextSibling;
        bassSrc.src  = "audio/Lucy (bass).mp3";
        let voxSrc  = document.getElementById("vox-track").firstChild.nextSibling;
        voxSrc.src  = "audio/Lucy (vox).mp3";
        let guitarSrc  = document.getElementById("guitar-track").firstChild.nextSibling;
        guitarSrc.src  = "audio/Lucy (acoustic + organ).mp3";
        let organSrc  = document.getElementById("organ-track").firstChild.nextSibling;
        organSrc.src  = "audio/Lucy (organ).mp3";
        let drumsSrc  = document.getElementById("drums-track").firstChild.nextSibling;
        drumsSrc.src  = "audio/Lucy (drums).mp3";
    }

    if (event.innerHTML == "Something"){
        let bassSrc  = document.getElementById("bass-track").firstChild.nextSibling;
        bassSrc.src  = "audio/Something (bass).mp3";
        let voxSrc  = document.getElementById("vox-track").firstChild.nextSibling;
        voxSrc.src  = "audio/Something (vox).mp3";
        let guitarSrc  = document.getElementById("guitar-track").firstChild.nextSibling;
        guitarSrc.src  = "audio/Something (guitar).mp3";
        let organSrc  = document.getElementById("organ-track").firstChild.nextSibling;
        organSrc.src  = "audio/Something (orchestral).mp3";
        let drumsSrc  = document.getElementById("drums-track").firstChild.nextSibling;
        drumsSrc.src  = "audio/Something (drums).mp3";
    }

    resetTrack();
}