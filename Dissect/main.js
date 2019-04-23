play = document.getElementsByName("play")[0];

window.addEventListener('DOMContentLoaded', () => {
    loadTracks({innerHTML: "Something"});
    setTimeout(() => { alert("Welcome to Dissect! Make sure all the tracks have buffered before pressing Play."); }, 1);

    // var context1; var context2; var context3; var context4; var context5;
    window.context1 = new window.AudioContext;
    // context1.createMediaElementSource(track1);

    window.context2 = new window.AudioContext;
    // context2.createMediaElementSource(track2);

    window.context3 = new window.AudioContext;
    // context3.createMediaElementSource(track3);

    window.context4 = new window.AudioContext;
    // context4.createMediaElementSource(track4);

    window.context5 = new window.AudioContext;
    // context5.createMediaElementSource(track5);

    window.newTrack = false;
    
});

const togglePlayback = () => {
    if (play.id === "paused"){
        setTimeout(() => {
            panTracks();
            track1.play(); track2.play(); track3.play(); track4.play(); track5.play();
            play.innerHTML = "᜶ Pause"; 
            play.id = "playing"}, 
            300);
        } else {
            setTimeout(() => {
                track1.pause(); track2.pause(); track3.pause(); track4.pause(); track5.pause();
                play.innerHTML = "► Play"; 
                play.id = "paused"}, 
                300);
            window.newTrack = false;
    }
}

const showControls = (event) => {
    const range = event.parentElement.children[1];
    const toggle = event.parentElement.children[2];

    if (range.style.display = "none"){
        range.style.display = "flex";
    } else {
        range.style.display = "none";
    }
    if (toggle.style.display = "none"){
        toggle.style.display = "flex";
    } else {
        toggle.style.display = "none";
    }
}

const eventInterpreter = (event) => {
    const track = event.parentElement.parentElement.children[3];
    const action = event.innerHTML;

    // MAKE SURE TO TEST TRACK MUTING VIA THE SELECTOR BELOW vv

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

const solo = (track) => {
    tracks.forEach(track => { track.muted = true })
    track.muted = false
}

const add = (track) =>{
    track.muted = false;
}

const mute = (track) =>{
    track.muted = true; 
}

const panTracks = () => {
    if (window.newTrack === false){
        context1.resume();
        context2.resume();
        context3.resume();
        context4.resume();
        context5.resume();
    } else {
    
        let panNode1; let panNode2; let panNode3; let panNode4; let panNode5; 
        let panControl1; let panControl2; let panControl3; let panControl4; let panControl5;
        
        //TRACK 1
        panNode1 = context1.createStereoPanner();
        panControl1 = document.getElementById('panning-control-1')
        panControl1.onclick = () => {
            panNode1.pan.value = panControl1.value;
        }
        src1 = context1.createMediaElementSource(track1);
        src1.connect(panNode1);
        panNode1.connect(context1.destination);    

        //TRACK 2
        panNode2 = context2.createStereoPanner();
        panControl2 = document.getElementById('panning-control-2')
        panControl2.onclick = () => {
            panNode2.pan.value = panControl2.value;
        }
        src2 = context2.createMediaElementSource(track2);
        src2.connect(panNode2);
        panNode2.connect(context2.destination);
        
        //TRACK 3
        panNode3 = context3.createStereoPanner();
        panControl3 = document.getElementById('panning-control-3')
        panControl3.onclick = () => {
            panNode3.pan.value = panControl3.value;
        }
        src3 = context3.createMediaElementSource(track3);
        src3.connect(panNode3);
        panNode3.connect(context3.destination);   
        
        //TRACK 4
        panNode4 = context4.createStereoPanner();
        panControl4 = document.getElementById('panning-control-4')
        panControl4.onclick = () => {
            panNode4.pan.value = panControl4.value;
        }
        src4 = context4.createMediaElementSource(track4);
        src4.connect(panNode4);
        panNode4.connect(context4.destination);  
        
        //TRACK 5
        panNode5 = context5.createStereoPanner();
        panControl5 = document.getElementById('panning-control-5')
        panControl5.onclick = () => {
            panNode5.pan.value = panControl5.value;
        }
        src5 = context5.createMediaElementSource(track5);
        src5.connect(panNode5);
        panNode5.connect(context5.destination);   
    }
}



