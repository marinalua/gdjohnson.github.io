let track0;
let track1;
let track2;
let track3;
let track4;
let tracks;

let songEffects = [];

let latest;
let play = document.getElementsByName("play")[0];

window.addEventListener('DOMContentLoaded', () => {
    loadTracks({innerHTML: "Something", style: true});
    document.getElementById('reset').addEventListener('click', resetTrack);
    // document.getElementById('reset').addEventListener('click', tourTrack);
});

const togglePlayback = () => {
    if (play.id === "paused"){
        setTimeout(() => {
            tracks.forEach(track => { track.play(); })
            play.innerHTML = "Ⅱ Pause"; 
            play.id = "playing"}, 
            100);
        } else {
        setTimeout(() => {
            tracks.forEach(track => { track.pause(); })
            play.innerHTML = "► Play"; 
            play.id = "paused"}, 
            100);
    }
}

const eventInterpreter = (event) => {
    const track = tracks[parseInt(event.parentElement.parentElement.parentElement.id.slice(6))];
    const action = event.innerHTML;

    if (action == "Solo") {
        solo(track);
    } 

    if (action == "Add") {
        add(track);
    }

    if (action == "Mute") {
        mute(track);
    }
}

const solo = (fTrack) => {
    tracks.forEach(track => { 
        if (track !== fTrack) {
            track.volume = 0 } 
        });

        debugger
        if (fTrack.volume == 0) {
            fTrack.volume = .7;
        }
}

const add = (track) =>{
    track.volume = 1;
}

const mute = (track) =>{
    track.volume = 0; 
}





const loadTracks = (event) => {
    latest = event;

    styleNav(event);
    populateAudio(event);
    addEffects();
    addListeners();
}

const styleNav = (event) => {
    const navLinks = Array.from(document.getElementById('nav-bar-tracks').children).slice(1)

    if (event.style){
        navLinks.forEach(link => { link.style.color = "rgb(102, 102, 102)";})
        event.style.color = "green";
    }
}

const populateAudio = (event) => {
    const eles = []
    for (i=0; i<5; i++) {
        eles.push(document.getElementById(`track-${i}`).firstElementChild)
    }

    if (event.innerHTML == "Don't Let Me Down"){
        track0 = new Pizzicato.Sound(`./audio/Don't Let Me Down (drums).mp3`);
        track1 = new Pizzicato.Sound(`./audio/Don't Let Me Down (bass).mp3`);
        track2 = new Pizzicato.Sound(`./audio/Don't Let Me Down (guitar).mp3`);
        track3 = new Pizzicato.Sound(`./audio/Don't Let Me Down (vox).mp3`);
        track4 = new Pizzicato.Sound(`./audio/Don't Let Me Down (organ).mp3`);

        eles[0].innerHTML = "Drums";
        eles[1].innerHTML = "Bass";
        eles[2].innerHTML = "Guitar";
        eles[3].innerHTML = "Vox";
        eles[4].innerHTML = "Organ";
    }

    if (event.innerHTML == "Lucy in the Sky with Diamonds"){
        track0 = new Pizzicato.Sound(`./audio/Lucy (drums).mp3`);
        track1 = new Pizzicato.Sound(`./audio/Lucy (bass).mp3`);
        track2 = new Pizzicato.Sound(`./audio/Lucy (organ).mp3`);
        track3 = new Pizzicato.Sound(`./audio/Lucy (vox).mp3`);
        track4 = new Pizzicato.Sound(`./audio/Lucy (acoustic + organ).mp3`);

        eles[0].innerHTML = "Drums";
        eles[1].innerHTML = "Bass";
        eles[2].innerHTML = "Lowrey Organ";
        eles[3].innerHTML = "Vox";
        eles[4].innerHTML = "Acoustic + Organ";
    }

    if (event.innerHTML == "Norwegian Wood"){
        track0 = new Pizzicato.Sound(`./audio/Norwegian Wood (drums).mp3`);
        track1 = new Pizzicato.Sound(`./audio/Norwegian Wood (bass).mp3`);
        track2 = new Pizzicato.Sound(`./audio/Norwegian Wood (sitar).mp3`);
        track3 = new Pizzicato.Sound(`./audio/Norwegian Wood (vox + guitar)`);
        track4 = new Pizzicato.Sound(`./audio/Norwegian Wood (count).mp3`);

        eles[0].innerHTML = "Drums";
        eles[1].innerHTML = "Bass";
        eles[2].innerHTML = "Sitar";
        eles[3].innerHTML = "Vox + Guitar";
        eles[4].innerHTML = "Count";
    }

    if (event.innerHTML == "Something"){
        track0 = new Pizzicato.Sound(`./audio/Something (drums).mp3`);
        track1 = new Pizzicato.Sound(`./audio/Something (bass).mp3`);
        track2 = new Pizzicato.Sound(`./audio/Something (guitar).mp3`);
        track3 = new Pizzicato.Sound(`./audio/Something (vox).mp3`);
        track4 = new Pizzicato.Sound(`./audio/Something (orchestral).mp3`);

        eles[0].innerHTML = "Drums";
        eles[1].innerHTML = "Bass";
        eles[2].innerHTML = "Guitar";
        eles[3].innerHTML = "Vox";
        eles[4].innerHTML = "Strings + Organ";
    }

    tracks = [track0, track1, track2, track3, track4];

}

const addEffects = () => {
    tracks = tracks.map((track, idx) => {
        const reverb = new Pizzicato.Effects.Reverb({time: 0, decay: 0, mix: 0});
        const distortion = new Pizzicato.Effects.Distortion({gain: 0});
        const pan = new Pizzicato.Effects.StereoPanner({pan: 0.0 });

        songEffects.push({reverb, distortion, pan});

        track.addEffect(songEffects[idx].reverb);
        track.addEffect(songEffects[idx].distortion);
        track.addEffect(songEffects[idx].pan);

        return track;
    })
}

const addListeners = () => {
    tracks.forEach((track, idx) => {
        document.getElementById(`t${idx}-vol`).addEventListener('mouseup', (e) => {
            debugger
            track.volume = e.target.valueAsNumber;})

        document.getElementById(`t${idx}-reverb-time`).addEventListener('mouseup', (e) => {
            debugger
            songEffects[idx].reverb.time = e.target.valueAsNumber;})

        document.getElementById(`t${idx}-reverb-decay`).addEventListener('mouseup', (e) => {
            debugger
            songEffects[idx].reverb.decay = e.target.valueAsNumber;})

        document.getElementById(`t${idx}-reverb-mix`).addEventListener('mouseup', (e) => {
            debugger
            songEffects[idx].reverb.mix= e.target.valueAsNumber;})

        document.getElementById(`t${idx}-dist-gain`).addEventListener('mouseup', (e) => {
            debugger
            songEffects[idx].distortion.gain = e.target.valueAsNumber;})

        document.getElementById(`t${idx}-pan`).addEventListener('mouseup', (e) => {
            debugger
            songEffects[idx].pan.pan = e.target.valueAsNumber;})
        })
}

    
const resetTrack = () => {
    tracks.forEach(track => { track.stop(); })
    loadTracks(latest);

    // Array.from(document.getElementsByClassName('input-wrapper')).forEach(
    //     wrapper => {
    //         Array.from(wrapper.children).forEach(
    //             input => {
    //                 debugger
    //                 if (input.id.slice(3) == "vol") { input.value = "0.7" }
    //                 else if (input.id.slice(3) == "reverb-time") { input.value = ".01" }
    //                 else { input.value = "0" };
    //             }
    //         )
    //     }
    // )

    play.innerHTML = "Play"; play.id = "paused";
}
