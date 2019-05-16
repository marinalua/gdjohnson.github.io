let track0;
let track1;
let track2;
let track3;
let track4;
let tracks;

let wf;
let songEffects = [];

let latest;

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reset').addEventListener('click', resetTrack);
    document.getElementById('paused').addEventListener('click', togglePlayback);
    document.getElementById('rev-guide').addEventListener('mouseenter', revealReverb);
    document.getElementById('rev-guide').addEventListener('mouseleave', hideReverb);
    Array.from(document.getElementsByClassName('toggle')).forEach(
        toggle => Array.from(toggle.children).forEach(
            childButton => childButton.addEventListener('click', eventInterpreter)) )
    activateNav();
    loadTracks({target: {innerText: "Something"}, style: true});
    // document.getElementById('reset').addEventListener('click', tourTrack);
});

const activateNav = () => {
    let navLinks = Array.from(document.getElementById('nav-bar-tracks').children).slice(1);
    navLinks[3].style.background = "#75757542";
    navLinks[3].style.color = "green"
    navLinks.forEach(link => link.addEventListener('click', e => navAction(e)));
}

const navAction = (event) => {
    latest = event;
    resetNav(event);
    resetTrack();
}

const resetNav = (event) => {
    let navLinks = Array.from(document.getElementById('nav-bar-tracks').children).slice(1);
    let linkStyle = event.target.style;
    navLinks.forEach(link => {
        link.style.color = "";
        link.style.background = ""
    });
    linkStyle.color = "green";
    linkStyle.background = "#75757542";
}

// CONFIGURE AUDIO
const loadTracks = (event) => {
    latest = event;
    tracksLoading();
    populateAudio(event)
}

const populateAudio = (event) => {
    let trackButtons = []
    let selection = event.target.innerText;

    if (selection.length < 20) {
        document.getElementById('track-title').innerText = selection;
    } else {
        const title = selection.slice(0, 21) + "...";
        document.getElementById('track-title').innerText = title;
    }

    for (i=0; i<5; i++) {
        trackButtons.push(document.getElementById(`track-${i}`).firstElementChild)
    }
    
    // Track loading is structured as a series of callbacks, called when the parent function
    // is loaded & ready to play
    if (selection == "Don't Let Me Down"){
        track0 = new Pizzicato.Sound("./audio/Don't Let Me Down (drums).mp3", () => {
            loadWaveform("./audio/Don't Let Me Down.mp3");
            track1 = new Pizzicato.Sound("./audio/Don't Let Me Down (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/Don't Let Me Down (guitar).mp3", () => {
                    track3 = new Pizzicato.Sound("./audio/Don't Let Me Down (vox).mp3", () => {
                        track4 = new Pizzicato.Sound("./audio/Don't Let Me Down (organ).mp3", () => {
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Guitar";
                            trackButtons[3].innerHTML = "Vox";
                            trackButtons[4].innerHTML = "Organ";
                            wf = "./audio/Don't Let Me Down (organ).mp3"
                            tracks = [track0, track1, track2, track3, track4];
                            addEffects(tracks);
        });});});});});
    }

    if (selection == "Lucy in the Sky with Diamonds"){
        track0 = new Pizzicato.Sound("./audio/Lucy (drums).mp3", () => {
            loadWaveform("./audio/Lucy.mp3");
            track1 = new Pizzicato.Sound("./audio/Lucy (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/Lucy (organ).mp3", () => {
                    track3 = new Pizzicato.Sound("./audio/Lucy (vox).mp3", () => {
                        track4 = new Pizzicato.Sound("./audio/Lucy (acoustic + organ).mp3", () => {
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Lowrey Organ";
                            trackButtons[3].innerHTML = "Vox";
                            trackButtons[4].innerHTML = "Acoustic + Organ";
                            tracks = [track0, track1, track2, track3, track4];
                            wf = "./audio/Lucy (acoustic + organ).mp3";
                            addEffects(tracks);
        });});});});});   
    }

    if (selection == "Norwegian Wood"){
        track0 = new Pizzicato.Sound("./audio/Norwegian Wood (drums).mp3", () => {
            loadWaveform("./audio/Norwegian Wood.mp3");
            track1 = new Pizzicato.Sound("./audio/Norwegian Wood (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/Norwegian Wood (sitar).mp3", () => {
                    track3 = new Pizzicato.Sound("./audio/Norwegian Wood (vox + guitar).mp3", () => {
                        track4 = new Pizzicato.Sound("./audio/Norwegian Wood (count).mp3", () => {
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Sitar";
                            trackButtons[3].innerHTML = "Vox + Guitar";
                            trackButtons[4].innerHTML = "Count";
                            tracks = [track0, track1, track2, track3, track4];
                            wf = "./audio/Norwegian Wood (count).mp3";
                            addEffects(tracks);
        });});});});});
    }

    if (selection == "Something"){
        track0 = new Pizzicato.Sound("./audio/Something (drums).mp3", () => {
            loadWaveform("./audio/Something.mp3")
            track1 = new Pizzicato.Sound("./audio/Something (bass).mp3", () => {
                console.log("track 1 ready to use!")
                track2 = new Pizzicato.Sound("./audio/Something (guitar).mp3", () => {
                    console.log("track 2 ready to use!")
                    track3 = new Pizzicato.Sound("./audio/Something (vox).mp3", () => {
                        console.log("track 3 ready to use!")
                        track4 = new Pizzicato.Sound("./audio/Something (orchestral).mp3", () => {
                            console.log("track 4 ready to use!")
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Guitar";
                            trackButtons[3].innerHTML = "Vox";
                            trackButtons[4].innerHTML = "Strings + Organ";
                            tracks = [track0, track1, track2, track3, track4];
                            addEffects(tracks);
        });});});});}); 
    }
}

const addEffects = (tracks) => {
    tracks = tracks.map((track, idx) => {
        const reverb = new Pizzicato.Effects.Reverb({
            time: 0, 
            decay: 0, 
            mix: 0
        });
        const distortion = new Pizzicato.Effects.Distortion({
            gain: 0
        });
        const pan = new Pizzicato.Effects.StereoPanner({
            pan: 0.0 
        });

        songEffects.push({
            reverb, 
            distortion, 
            pan
        });

        track.addEffect(songEffects[idx].reverb);
        track.addEffect(songEffects[idx].distortion);
        track.addEffect(songEffects[idx].pan);

        return track;
    })

    addListeners(tracks);
}

const changeMonitor = (value) => {
    document.getElementById('global-value').innerText = value;
}

const addListeners = (tracks) => {
    tracks.forEach((track, idx) => {
        document.getElementById(`t${idx}-vol`).addEventListener('mouseup', (e) => {
            track.volume = e.target.valueAsNumber;})
       
        document.getElementById(`t${idx}-reverb-time`).addEventListener('mouseup', (e) => {
            songEffects[idx].reverb.time = e.target.valueAsNumber;})
        
        document.getElementById(`t${idx}-reverb-decay`).addEventListener('mouseup', (e) => {
            songEffects[idx].reverb.decay = e.target.valueAsNumber;})
        
        document.getElementById(`t${idx}-reverb-mix`).addEventListener('mouseup', (e) => {
            songEffects[idx].reverb.mix= e.target.valueAsNumber;})
        
        document.getElementById(`t${idx}-dist-gain`).addEventListener('mouseup', (e) => {
            songEffects[idx].distortion.gain = e.target.valueAsNumber;})

        document.getElementById(`t${idx}-pan`).addEventListener('mouseup', (e) => {
            songEffects[idx].pan.pan = e.target.valueAsNumber;})
        })

    tracksLoaded();
}

const tracksLoading = () => {
    document.getElementById('loading-wrap').style.display = "flex";
    document.getElementsByClassName('playback')[0].style.display = "none";
}

const tracksLoaded = () => {
    document.getElementById('loading-wrap').style.display = "none";
    document.getElementById('paused').style.display = "block";
}

const resetTrack = () => {
    wavesurfer.stop();
    tracks.forEach(track => { track.stop(); })
    songEffects = [];
    loadTracks(latest);

    Array.from(document.getElementsByClassName('input-wrapper')).forEach(
        wrapper => Array.from(wrapper.children).forEach(
            input => {
                if (input.id.slice(3) == "vol") { input.value = "0.7" }
                else if (input.id.slice(3) == "reverb-time") { input.value = ".01" }
                else { input.value = "0" };
            })
    )
    
    let playback = document.getElementsByClassName('playback')[0];
    playback.innerHTML = "► Play"; playback.id = "paused";
}

const togglePlayback = (e) => {
    let playback = e.target;
    
    if (playback.id == "paused"){
        setTimeout(() => {
            wavesurfer.play();
            tracks.forEach(track => track.play())
            playback.innerHTML = "Ⅱ Pause"; 
            playback.id = "playing"}, 
            100);
    } else {
        setTimeout(() => {
            wavesurfer.pause();
            tracks.forEach(track => { track.pause(); })
            playback.innerHTML = "► Play"; 
            playback.id = "paused"}, 
            100);
    }
}


// TOGGLES
const eventInterpreter = (event) => {
    
    const track = tracks[parseInt(event.target.parentElement.parentElement.parentElement.id.slice(6))];
    const action = event.target.innerHTML;

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

const solo = (soloTrack) => {
    tracks.forEach(track => { 
        if (track !== soloTrack) {
            track.volume = 0 } 
        });

        if (soloTrack.volume < .1) {
            soloTrack.volume = .7;
        }
}

const add = (track) =>{
    track.volume = 1;
}

const mute = (track) =>{
    track.volume = 0; 
}


// WAVEFORM
const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#666666',
    progressColor: 'green',
    height: '70',
    barWidth: '3'
});

const loadWaveform = (input) => {
    wavesurfer.load(input);
    wavesurfer.setMute(true); 
}
    

// HOVER

const revealReverb = (event) => {
    let t = event.target;
    const spacing = (n) => {
        let str = ""
        for (i=0;i<n;i++) str += "&nbsp;"
        return str;
    }
    t.innerHTML = `Time ${spacing(11)} Decay ${spacing(13)} Mix`;
}

const hideReverb = (event) => {
    let t = event.target;
    t.innerHTML = "Reverb";
}



