play = document.getElementsByName("play")[0];

window.addEventListener('DOMContentLoaded', () => {
    loadTracks({innerHTML: "Something"})
});

const togglePlayback = () => {
    if (play.id === "paused"){
        setTimeout(() => {
            panTracks();
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

const eventInterpreter = (event) => {
    debugger
    const track = event.parentElement.parentElement.firstElementChild.id;
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

const add = (track) =>{
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

const mute = (track) =>{
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

const panTracks = () => {

    let context; let src;
    let panNode1; let panNode2; let panNode3; let panNode4; let panNode5; 
    let panControl1; let panControl2; let panControl3; let panControl4; let panControl5;
    
    //TRACK 1
    //Source & Context
    context = new window.AudioContext;
    src = context.createMediaElementSource(track1);
    //Panning & Connection
    panNode1 = context.createStereoPanner();
    panControl1 = document.getElementById('panning-control-1')
    panControl1.onclick = () => {
        panNode1.pan.value = panControl1.value;}
    src.connect(panNode1);
    panNode1.connect(context.destination);    

    //TRACK 2
    //Source & Context
    context = new window.AudioContext;
    src = context.createMediaElementSource(track2);
    //Panning & Connection
    panNode2 = context.createStereoPanner();
    panControl2 = document.getElementById('panning-control-2')
    panControl2.onclick = () => {
        panNode2.pan.value = panControl2.value;}
    src.connect(panNode2);
    panNode2.connect(context.destination);
    
    //TRACK 3
    //Source & Context
    context = new window.AudioContext;
    src = context.createMediaElementSource(track3);
    //Panning & Connection
    panNode3 = context.createStereoPanner();
    panControl3 = document.getElementById('panning-control-3')
    panControl3.onclick = () => {
        panNode3.pan.value = panControl3.value;}
    src.connect(panNode3);
    panNode3.connect(context.destination);   
    
    //TRACK 4
    //Source & Context
    context = new window.AudioContext;
    src = context.createMediaElementSource(track4);
    //Panning & Connection
    panNode4 = context.createStereoPanner();
    panControl4 = document.getElementById('panning-control-4')
    panControl4.onclick = () => {
        panNode4.pan.value = panControl4.value;}
    src.connect(panNode4);
    panNode4.connect(context.destination);  
    
     //TRACK 5
    //Source & Context
    context = new window.AudioContext;
    src = context.createMediaElementSource(track5);
    //Panning & Connection
    panNode5 = context.createStereoPanner();
    panControl5 = document.getElementById('panning-control-5')
    panControl5.onclick = () => {
        panNode5.pan.value = panControl5.value;}
    src.connect(panNode5);
    panNode5.connect(context.destination);   
}



