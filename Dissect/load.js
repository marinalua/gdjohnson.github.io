let track1 = document.getElementById('track-1');
let track2 = document.getElementById('track-2');
let track3 = document.getElementById('track-3');
let track4 = document.getElementById('track-4');
let track5 = document.getElementById('track-5');

const loadTracks = (event) => {
    event.style.color = "green";

    let context;
    let panNode; let src;
    let panControl;

    if (event.innerHTML == "Don't Let Me Down"){
        
        //TRACK 1
        //Source & Context
        track1.parentElement.firstElementChild.innerHTML = "Drums";
        track1.firstChild.nextSibling.src = "audio/Don't Let Me Down (drums).mp3"
        context = new window.AudioContext;
        src = context.createMediaElementSource(track1);
        //Panning & Connection
        panNode = context.createStereoPanner();
        panControl = document.getElementById('panning-control-1')
        panControl.onclick = () => {
            panNode.pan.value = panControl.value;}
        src.connect(panNode);
        panNode.connect(context.destination);    

        //TRACK 2
        //Source & Context
        track2.parentElement.firstElementChild.innerHTML = "Bass";
        context = new window.AudioContext;
        track2.firstChild.nextSibling.src = "audio/Don't Let Me Down (bass).mp3";
        src = context.createMediaElementSource(track2);
        //Panning & Connection
        panNode = context.createStereoPanner();
        panControl = document.getElementById('panning-control-2')
        panControl.onclick = () => {
            panNode.pan.value = panControl.value;}
        src.connect(panNode);
        panNode.connect(context.destination);    

        //TRACK 3
        //Source & Context
        track3.parentElement.firstElementChild.innerHTML = "Guitar";
        context = new window.AudioContext;
        track3.firstChild.nextSibling.src = "audio/Don't Let Me Down (guitar).mp3";
        src = context.createMediaElementSource(track3);
        //Panning & Connection
        panNode = context.createStereoPanner();
        panControl = document.getElementById('panning-control-3')
        panControl.onclick = () => {
            panNode.pan.value = panControl.value;}
        src.connect(panNode);
        panNode.connect(context.destination);    

        //TRACK 4
        //Source & Context
        track4.parentElement.firstElementChild.innerHTML = "Vox";
        context = new window.AudioContext;
        track4.firstChild.nextSibling.src = "audio/Don't Let Me Down (vox).mp3";
        src = context.createMediaElementSource(track4);
        //Panning & Connection
        panNode = context.createStereoPanner();
        panControl = document.getElementById('panning-control-4')
        panControl.onclick = () => {
            panNode.pan.value = panControl.value;}
        src.connect(panNode);
        panNode.connect(context.destination);    

        //TRACK 5
        //Source & Context
        track5.parentElement.firstElementChild.innerHTML = "Organ";
        context = new window.AudioContext;
        track5.firstChild.nextSibling.src = "audio/Don't Let Me Down (organ).mp3";
        src = context.createMediaElementSource(track5);
        //Panning & Connection
        panNode = context.createStereoPanner();
        panControl = document.getElementById('panning-control-5')
        panControl.onclick = () => {
            panNode.pan.value = panControl.value;}
        src.connect(panNode);
        panNode.connect(context.destination);    
    }

    // if (event.innerHTML == "Norwegian Wood"){
    //     track1.parentElement.firstElementChild.innerHTML = "Drums"
    //     track1.firstChild.nextSibling.src = "audio/Norwegian Wood (drums).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track2.parentElement.firstElementChild.innerHTML = "Bass"
    //     context = new window.AudioContext;
    //     src = context.createMediaElementSource("audio/Norwegian Wood (bass).mp3");
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track3.parentElement.firstElementChild.innerHTML = "Sitar"
    //     track3.firstChild.nextSibling.src = "audio/Norwegian Wood (sitar).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track4.parentElement.firstElementChild.innerHTML = "Vox + Acoustic"
    //     track4.firstChild.nextSibling.src = "audio/Norwegian Wood (vox + guitar).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track5.parentElement.firstElementChild.innerHTML = "Count"
    //     track5.firstChild.nextSibling.src = "audio/Norwegian Wood (count).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    
    // }

    // if (event.innerHTML == "Lucy in the Sky with Diamonds"){
    //     track1.parentElement.firstElementChild.innerHTML = "Drums"
    //     track1.firstChild.nextSibling.src = "audio/Lucy (drums).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track2.parentElement.firstElementChild.innerHTML = "Bass"
    //     context = new window.AudioContext;
    //     src = context.createMediaElementSource("audio/Lucy (bass).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track3.parentElement.firstElementChild.innerHTML = "Lowrey Organ"
    //     track3.firstChild.nextSibling.src = "audio/Lucy (organ).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track4.parentElement.firstElementChild.innerHTML = "Vox"
    //     track4.firstChild.nextSibling.src = "audio/Lucy (vox).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track3.parentElement.firstElementChild.innerHTML = "Acoustic + Organ"
    //     track5.firstChild.nextSibling.src = "audio/Lucy (acoustic + organ).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    
    // }

    // if (event.innerHTML == "Something"){
    //     track1.parentElement.firstElementChild.innerHTML = "Drums"
    //     track1.firstChild.nextSibling.src = "audio/Something (drums).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track2.parentElement.firstElementChild.innerHTML = "Bass"
    //     context = new window.AudioContext;
    //     src = context.createMediaElementSource("audio/Something (bass).mp3");
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track3.parentElement.firstElementChild.innerHTML = "Guitar"
    //     track3.firstChild.nextSibling.src = "audio/Something (guitar).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track4.parentElement.firstElementChild.innerHTML = "Vox"
    //     track4.firstChild.nextSibling.src = "audio/Something (vox).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    

    //     track5.parentElement.firstElementChild.innerHTML = "Strings + Organ"
    //     track5.firstChild.nextSibling.src = "audio/Something (orchestral).mp3";
    //     //Panning & Connection
    //     panNode = context.createStereoPanner();
    //     panControl = document.getElementById('panning-control-1')
    //     panControl.onclick = () => {
    //         panNode.pan.value = panControl.value;}
    //     src.connect(panNode);
    //     panNode.connect(context.destination);    
    // }

    resetTrack();
}