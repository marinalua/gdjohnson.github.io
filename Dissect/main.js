export const track1 = document.getElementById('track-1');
export const track2 = document.getElementById('track-2');
export const track3 = document.getElementById('track-3');
export const track4 = document.getElementById('track-4');
export const track5 = document.getElementById('track-5');

const play = document.getElementsByName("play")[0];

const togglePlayback = () => {
    if (play.id === "paused"){
        setTimeout(() => {
            track1.play(); track2.play(); track3.play(); track4.play(); track5.play();
            play.innerHTML = "Pause"; 
            play.id = "playing"}, 
            300);
    } else {
        setTimeout(() => {
            track1.pause(); track2.pause(); track3.pause(); track4.pause(); track5.pause();
            play.innerHTML = "Play"; 
            play.id = "paused"}, 
            300);
    }
}

const resetTrack = () => {
    track1.load(); track2.load(); track3.load(); track4.load(); track5.load();
    play.innerHTML = "Play"; play.id = "paused";
}

const eventInterpreter = (event) => {
    debugger
    const track = event.parentElement.parentElement.firstElementChild.id;
    const action = event.innerHTML;

    if (action == "Solo") {
        this.solo(track);
    } 

    if (action == "Add") {
        this.add(track);
    }

    if (action == "Mute") {
        this.mute(track);
    }
}

export const solo = (track) => {

    if (track == "_1"){
        track1.muted = false;
        track2.muted = true;
        track3.muted = true;
        track4.muted = true;
        track5.muted = true;
    }

    if (track == "_2"){
        track1.muted = true;
        track2.muted = false;
        track3.muted = true;
        track4.muted = true;
        track5.muted = true;
    }

    if (track == "_3"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = false;
        track4.muted = true;
        track5.muted = true;
    }

    if (track == "_4"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = true;
        track4.muted = false;
        track5.muted = true;
    }

    if (track == "_5"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = true;
        track4.muted = true;
        track5.muted = false;
    }
}

export const add = (event) =>{
    if (track == "_1"){
        track1.muted = false;}

    if (track == "_2"){
        track2.muted = false;}

    if (track == "_3"){
        track3.muted = false;}

    if (track == "_4"){
        track4.muted = false;}

    if (track == "_5"){
        track5.muted = false;}
}

export const mute = (event) =>{
    if (track == "_1"){
        track1.muted = true;}

    if (track == "_2"){
        track2.muted = true;}

    if (track == "_3"){
        track3.muted = true;}

    if (track == "_4"){
        track4.muted = true;}

    if (track == "_5"){
        track5.muted = true;}
}

const loadTrack = (event) => {
    debugger
    event.style.color = "green";

    if (event.innerHTML == "A Day In The Life"){
        track1.firstChild.nextSibling.src = "";
        track2.firstChild.nextSibling.src = "";
        track3.firstChild.nextSibling.src = "";
        track4.firstChild.nextSibling.src = "";
        track5.firstChild.nextSibling.src = "";
    }

    if (event.innerHTML == "Don't Let Me Down"){
        

        track1.firstChild.nextSibling.src = "audio/Don't Let Me Down (drums).mp3";
        track1.parentElement.firstElementChild.innerHTML = "Drums"

        track2.firstChild.nextSibling.src = "audio/Don't Let Me Down (bass).mp3";
        track2.parentElement.firstElementChild.innerHTML = "Bass"

        track3.firstChild.nextSibling.src = "audio/Don't Let Me Down (guitar).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Guitar"

        track4.firstChild.nextSibling.src = "audio/Don't Let Me Down (vox).mp3";
        track4.parentElement.firstElementChild.innerHTML = "Vox"

        track5.firstChild.nextSibling.src = "audio/Don't Let Me Down (organ).mp3";
        track5.parentElement.firstElementChild.innerHTML = "Organ"
    }

    if (event.innerHTML == "Norwegian Wood"){
        track1.firstChild.nextSibling.src = "audio/Norwegian Wood (drums).mp3";
        track1.parentElement.firstElementChild.innerHTML = "Drums"

        track2.firstChild.nextSibling.src = "audio/Norwegian Wood (bass).mp3";
        track2.parentElement.firstElementChild.innerHTML = "Bass"

        track3.firstChild.nextSibling.src = "audio/Norwegian Wood (sitar).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Sitar"

        track4.firstChild.nextSibling.src = "audio/Norwegian Wood (vox + guitar).mp3";
        track4.parentElement.firstElementChild.innerHTML = "Vox + Acoustic"

        track5.firstChild.nextSibling.src = "audio/Norwegian Wood (count).mp3";
        track5.parentElement.firstElementChild.innerHTML = "Count"
    }

    if (event.innerHTML == "Lucy in the Sky with Diamonds"){
        track1.firstChild.nextSibling.src = "audio/Lucy (drums).mp3";
        track1.parentElement.firstElementChild.innerHTML = "Drums"

        track2.firstChild.nextSibling.src = "audio/Lucy (bass).mp3";
        track2.parentElement.firstElementChild.innerHTML = "Bass"

        track3.firstChild.nextSibling.src = "audio/Lucy (organ).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Lowrey Organ"

        track4.firstChild.nextSibling.src = "audio/Lucy (vox).mp3";
        track4.parentElement.firstElementChild.innerHTML = "Vox"

        track5.firstChild.nextSibling.src = "audio/Lucy (acoustic + organ).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Acoustic + Organ"
    }

    if (event.innerHTML == "Something"){
        track1.firstChild.nextSibling.src = "audio/Something (drums).mp3";
        track1.parentElement.firstElementChild.innerHTML = "Drums"

        track2.firstChild.nextSibling.src = "audio/Something (bass).mp3";
        track2.parentElement.firstElementChild.innerHTML = "Bass"

        track3.firstChild.nextSibling.src = "audio/Something (guitar).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Guitar"

        track4.firstChild.nextSibling.src = "audio/Something (vox).mp3";
        track4.parentElement.firstElementChild.innerHTML = "Vox"

        track5.firstChild.nextSibling.src = "audio/Something (orchestral).mp3";
        track5.parentElement.firstElementChild.innerHTML = "Strings + Organ"
    }

    resetTrack();
}