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

const solo = (track) => {

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

const add = (event) =>{
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

const mute = (event) =>{
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



