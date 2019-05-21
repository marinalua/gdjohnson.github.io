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
    setToggles();
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

const setToggles = () => {
    Array.from(document.getElementsByClassName('toggle')).forEach(
        toggle => Array.from(toggle.children).forEach(
            childButton => {
                childButton.style.color = "inherit";
                childButton.addEventListener('click', eventInterpreter);
            }
        ) 
    )
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

    document.getElementById('track-title').innerText = selection;

    for (i=0; i<5; i++) {
        trackButtons.push(document.getElementById(`track-${i}`).firstElementChild)
    }

    let loadingMsg = document.getElementById('loading-wrap').children[1]
    
    // Track loading is structured as a series of callbacks, called when the parent function
    // is loaded & ready to play
    if (selection == "Don't Let Me Down"){
        track0 = new Pizzicato.Sound("./audio/Don't Let Me Down (drums).mp3", () => {
            loadWaveform("./audio/Don't Let Me Down.mp3");
            track1 = new Pizzicato.Sound("./audio/Don't Let Me Down (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/Don't Let Me Down (guitar).mp3", () => {
                    loadingMsg.innerText = "Buffering...";
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

    if (selection == "Lucy in the Sky with..."){
        track0 = new Pizzicato.Sound("./audio/Lucy (drums).mp3", () => {
            loadWaveform("./audio/Lucy.mp3");
            track1 = new Pizzicato.Sound("./audio/Lucy (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/Lucy (organ).mp3", () => {
                    loadingMsg.innerText = "Buffering...";
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
                    loadingMsg.innerText = "Buffering...";
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
                track2 = new Pizzicato.Sound("./audio/Something (guitar).mp3", () => {
                    loadingMsg.innerText = "Buffering...";
                    track3 = new Pizzicato.Sound("./audio/Something (vox).mp3", () => {
                        track4 = new Pizzicato.Sound("./audio/Something (orchestral).mp3", () => {
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Guitar";
                            trackButtons[3].innerHTML = "Vox";
                            trackButtons[4].innerHTML = "Orchestra";
                            tracks = [track0, track1, track2, track3, track4];
                            addEffects(tracks);
        });});});});}); 
    }

    if (selection == "I Want You"){
        track0 = new Pizzicato.Sound("./audio/I Want You (drums).mp3", () => {
            loadWaveform("./audio/I Want You.mp3")
            track1 = new Pizzicato.Sound("./audio/I Want You (bass).mp3", () => {
                track2 = new Pizzicato.Sound("./audio/I Want You (guitar).mp3", () => {
                    loadingMsg.innerText = "Buffering...";
                    track3 = new Pizzicato.Sound("./audio/I Want You (vox).mp3", () => {
                        track4 = new Pizzicato.Sound("./audio/I Want You (organ).mp3", () => {
                            trackButtons[0].innerHTML = "Drums";
                            trackButtons[1].innerHTML = "Bass";
                            trackButtons[2].innerHTML = "Guitar";
                            trackButtons[3].innerHTML = "Vox";
                            trackButtons[4].innerHTML = "Organ";
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


// Adapted event listener by Andrew Willems. Tracks live range input changes cross-browser
function onRangeChange(rangeInputElmt, changeMonitor) {

    let inputEvtHasNeverFired = true;
    let rangeValue = {current: undefined, mostRecent: undefined};
    
    rangeInputElmt.addEventListener("input", function(event) {
      inputEvtHasNeverFired = false;
      rangeValue.current = event.target.value;
      if (rangeValue.current !== rangeValue.mostRecent) {
        changeMonitor(event);
      }
      rangeValue.mostRecent = rangeValue.current;
    });
  
    rangeInputElmt.addEventListener("change", function(event) {
      if (inputEvtHasNeverFired) {
        changeMonitor(event);
      }
    }); 
  
}

const changeMonitor = (event) => {
    document.getElementById('global-value').innerText = event.target.value;
}

const addListeners = (tracks) => {
    tracks.forEach((track, idx) => {
        const vol = document.getElementById(`t${idx}-vol`);
        onRangeChange(vol, changeMonitor);
        vol.addEventListener('mouseup', e => track.volume = e.target.valueAsNumber)
       
        const time = document.getElementById(`t${idx}-reverb-time`);
        onRangeChange(time, changeMonitor);
        time.addEventListener('mouseup', e => songEffects[idx].reverb.time = e.target.valueAsNumber)
        
        const decay = document.getElementById(`t${idx}-reverb-decay`);
        onRangeChange(decay, changeMonitor);
        decay.addEventListener('mouseup', e =>  songEffects[idx].reverb.decay = e.target.valueAsNumber)
        
        const mix = document.getElementById(`t${idx}-reverb-mix`);
        onRangeChange(mix, changeMonitor);
        mix.addEventListener('mouseup', e => songEffects[idx].reverb.mix = e.target.valueAsNumber)
        
        const gain = document.getElementById(`t${idx}-dist-gain`);
        onRangeChange(gain, changeMonitor);
        gain.addEventListener('mouseup', e => songEffects[idx].distortion.gain = e.target.valueAsNumber)

        const pan = document.getElementById(`t${idx}-pan`);
        onRangeChange(pan, changeMonitor);
        pan.addEventListener('mouseup', e => songEffects[idx].pan.pan = e.target.valueAsNumber)
    })

    tracksLoaded();
}

const tracksLoading = () => {
    document.getElementById('loading-wrap').style.display = "flex";
    document.getElementsByClassName('playback')[0].style.display = "none";
}

const tracksLoaded = () => {
    document.getElementById('loading-wrap').style.display = "none";
    document.getElementById('paused').style.display = "flex";
}

const resetTrack = () => {
    wavesurfer.stop();
    tracks.forEach(track => { track.stop(); })
    setToggles();
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
    playback.children[0].name = 'play'; 
    playback.children[1].innerText = ' Play';
    playback.id = "paused";
}

const togglePlayback = (e) => {
    let playback = document.getElementsByClassName('playback')[0];
    if (playback.id == "paused"){
        setTimeout(() => {
            wavesurfer.play();
            tracks.forEach(track => track.play())
            playback.children[0].name = 'pause'; 
            playback.children[1].innerText = ` Pause`
            playback.id = "playing"}, 
            100);
    } else {
        setTimeout(() => {
            wavesurfer.pause();
            tracks.forEach(track => { track.pause(); })
            playback.children[0].name = 'play';
            playback.children[1].innerText = ' Play' 
            playback.id = "paused"}, 
            100);
    }
}


// TOGGLES
const eventInterpreter = (event) => {
    
    const track = tracks[parseInt(event.target.parentElement.parentElement.parentElement.id.slice(6))];
    const action = event.target.innerHTML;

    if (action == "Solo") {
        event.target.style.color = "green";
        solo(track);
    } 

    if (action == "Add") {
        event.target.style.color = "yellow";
        add(track);
    }

    if (action == "Mute") {
        event.target.style.color = "red";
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
    waveColor: '#999999',
    progressColor: '#666666',
    height: '70',
    barWidth: '3',
    hideScrollbar: true
});

const loadWaveform = (input) => {
    document.getElementById('loading-wrap').children[1].innerText = "Drawing..."
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



