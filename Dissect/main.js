const track1 = document.getElementById('track-1');
const track2 = document.getElementById('track-2');
const track3 = document.getElementById('track-3');
const track4 = document.getElementById('track-4');
const track5 = document.getElementById('track-5');

const togglePlayback = () => {
    if (track1.paused === true){
        track1.play(); track2.play(); track3.play(); track4.play(); track5.play();
    } else {
        track1.pause(); track2.play(); track3.play(); track4.play(); track5.play();
    }

}

const resetTrack = () => {
    track1.load(); track2.load(); track3.load(); track4.load(); track5.load();
}

const solo = (event) => {
    debugger
    if (event.parentElement.firstElementChild.id == "_1"){
        track1.muted = false;
        track2.muted = true;
        track3.muted = true;
        track4.muted = true;
        track5.muted = true;
    }

    if (event.parentElement.firstElementChild.id == "_2"){
        track1.muted = true;
        track2.muted = false;
        track3.muted = true;
        track4.muted = true;
        track5.muted = true;
    }

    if (event.parentElement.firstElementChild.id == "_3"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = false;
        track4.muted = true;
        track5.muted = true;
    }

    if (event.parentElement.firstElementChild.id == "_4"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = true;
        track4.muted = false;
        track5.muted = true;
    }

    if (event.parentElement.firstElementChild.id == "_5"){
        track1.muted = true;
        track2.muted = true;
        track3.muted = true;
        track4.muted = true;
        track5.muted = false;
    }
}

const loadTrack = (event) => {
    if (event.innerHTML == "A Day In The Life"){
        track1.firstChild.nextSibling.src  = "";
        track2.firstChild.nextSibling.src  = "";
        track3.firstChild.nextSibling.src  = "";
        track4.firstChild.nextSibling.src  = "";
        track5.firstChild.nextSibling.src  = "";
    }

    if (event.innerHTML == "Don't Let Me Down"){
        track1.firstChild.nextSibling.src  = "audio/Don't Let Me Down (drums)";
        track2.firstChild.nextSibling.src  = "audio/Don't Let Me Down (bass)";
        track3.firstChild.nextSibling.src  = "audio/Don't Let Me Down (guitar)";
        track4.firstChild.nextSibling.src  = "audio/Don't Let Me Down (vox)";
        track5.firstChild.nextSibling.src  = "audio/Don't Let Me Down (organ)";
    }

    if (event.innerHTML == "Norwegian Wood"){
        track1.firstChild.nextSibling.src  = "audio/Norwegian Wood (drums)";
        track2.firstChild.nextSibling.src  = "audio/Norwegian Wood (bass)";
        track3.firstChild.nextSibling.src  = "audio/Norwegian Wood (sitar)";
        track3.parentElement.firstElementChild.innerHTML = "Sitar"
        track4.firstChild.nextSibling.src  = "audio/Norwegian Wood (vox + guitar)";
        track4.parentElement.firstElementChild.innerHTML = "Vox + Acoustic"
        track5.firstChild.nextSibling.src  = "audio/Norwegian Wood (count)";
        track5.parentElement.firstElementChild.innerHTML = "Count"
    }

    if (event.innerHTML == "Lucy in the Sky with Diamonds"){
        track1.firstChild.nextSibling.src  = "audio/Lucy (drums).mp3";
        track2.firstChild.nextSibling.src  = "audio/Lucy (bass).mp3";
        track3.firstChild.nextSibling.src  = "audio/Lucy (organ).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Lowrey Organ"
        track4.firstChild.nextSibling.src  = "audio/Lucy (vox).mp3";
        track5.firstChild.nextSibling.src  = "audio/Lucy (acoustic + organ).mp3";
        track3.parentElement.firstElementChild.innerHTML = "Acoustic + Organ"
    }

    if (event.innerHTML == "Something"){
        track1.firstChild.nextSibling.src  = "audio/Something (drums).mp3";
        track2.firstChild.nextSibling.src  = "audio/Something (bass).mp3";
        track3.firstChild.nextSibling.src  = "audio/Something (guitar).mp3";
        track4.firstChild.nextSibling.src  = "audio/Something (vox).mp3";
        track5.firstChild.nextSibling.src  = "audio/Something (orchestral).mp3";
        track5.parentElement.firstElementChild.innerHTML = "Strings + Organ"
    }

    resetTrack();
}