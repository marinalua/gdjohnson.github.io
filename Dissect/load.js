let play = document.getElementsByName("play")[0];
let track1 = document.getElementById('track-1');
let track2 = document.getElementById('track-2');
let track3 = document.getElementById('track-3');
let track4 = document.getElementById('track-4');
let track5 = document.getElementById('track-5');



const loadTracks = (event) => {
    let navLinks = document.getElementById('nav-bar-tracks').children
    
    if (event.style){
        navLinks[1].style.color = "black"
        navLinks[2].style.color = "black"
        navLinks[3].style.color = "black"
        navLinks[4].style.color = "black"
        event.style.color = "green";
    }

    if (track1) {
        track1.parentElement.removeChild(track1)
        track2.parentElement.removeChild(track2)
        track3.parentElement.removeChild(track3)
        track4.parentElement.removeChild(track4)
        track5.parentElement.removeChild(track5)
    }
    track1 = new Audio();
    track1.id = "track-1";
    track1.controls = true;
    src1 = document.createElement('source');
    src1.type = "audio/mpeg"
    track1.appendChild(src1);
    document.getElementById('_1').parentElement.append(track1)

    track2 = new Audio();
    track2.id = "track-2";
    track2.controls = true;
    src2 = document.createElement('source');
    src2.type = "audio/mpeg"
    track2.appendChild(src2);
    document.getElementById('_2').parentElement.append(track2)


    track3 = new Audio();
    track3.id = "track-3";
    track3.controls = true;
    src3 = document.createElement('source');
    src3.type = "audio/mpeg"
    track3.appendChild(src3);
    document.getElementById('_3').parentElement.append(track3)


    track4 = new Audio();
    track4.id = "track-4";
    track4.controls = true;
    src4 = document.createElement('source');
    src4.type = "audio/mpeg"
    track4.appendChild(src4);
    document.getElementById('_4').parentElement.append(track4)


    track5 = new Audio();
    track5.id = "track-5";
    track5.controls = true;
    src5 = document.createElement('source');
    src5.type = "audio/mpeg"
    track5.appendChild(src5);
    document.getElementById('_5').parentElement.append(track5)


    if (event.innerHTML == "Don't Let Me Down"){
        debugger
        track1.parentElement.firstElementChild.innerHTML = "Drums";
        src1.src = "audio/Don't Let Me Down (drums).mp3"

        track2.parentElement.firstElementChild.innerHTML = "Bass";
        src2.src = "audio/Don't Let Me Down (bass).mp3";
        
        track3.parentElement.firstElementChild.innerHTML = "Guitar";
        src3.src = "audio/Don't Let Me Down (guitar).mp3";

        track4.parentElement.firstElementChild.innerHTML = "Vox";
        src4.src = "audio/Don't Let Me Down (vox).mp3";
        
        track5.parentElement.firstElementChild.innerHTML = "Organ";
        src5.src = "audio/Don't Let Me Down (organ).mp3"; 
    }

    if (event.innerHTML == "Norwegian Wood"){
        track1.parentElement.firstElementChild.innerHTML = "Drums"
        src1.src = "audio/Norwegian Wood (drums).mp3";
 
        track2.parentElement.firstElementChild.innerHTML = "Bass"
        src2.src = "audio/Norwegian Wood (bass).mp3";
  
        track3.parentElement.firstElementChild.innerHTML = "Sitar"
        src3.src = "audio/Norwegian Wood (sitar).mp3";
  
        track4.parentElement.firstElementChild.innerHTML = "Vox + Acoustic"
        src4.src = "audio/Norwegian Wood (vox + guitar).mp3";
        
        track5.parentElement.firstElementChild.innerHTML = "Count"
        src5.src = "audio/Norwegian Wood (count).mp3";
    }

    if (event.innerHTML == "Lucy in the Sky with Diamonds"){
        track1.parentElement.firstElementChild.innerHTML = "Drums"
        src1.src = "audio/Lucy (drums).mp3";

        track2.parentElement.firstElementChild.innerHTML = "Bass"
        src2.src = "audio/Lucy (bass).mp3"; 

        track3.parentElement.firstElementChild.innerHTML = "Lowrey Organ"
        src3.src = "audio/Lucy (organ).mp3";

        track4.parentElement.firstElementChild.innerHTML = "Vox"
        src4.src = "audio/Lucy (vox).mp3";

        track5.parentElement.firstElementChild.innerHTML = "Acoustic + Organ"
        src5.src = "audio/Lucy (acoustic + organ).mp3";
    }

    if (event.innerHTML == "Something"){
        track1.parentElement.firstElementChild.innerHTML = "Drums"
        src1.src = "audio/Something (drums).mp3";

        track2.parentElement.firstElementChild.innerHTML = "Bass"
        src2.src = "audio/Something (bass).mp3";

        track3.parentElement.firstElementChild.innerHTML = "Guitar"
        src3.src = "audio/Something (guitar).mp3";

        track4.parentElement.firstElementChild.innerHTML = "Vox"
        src4.src = "audio/Something (vox).mp3";

        track5.parentElement.firstElementChild.innerHTML = "Strings + Organ"
        src5.src = "audio/Something (orchestral).mp3";
    }

    panTracks();
    resetTrack();
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

const resetTrack = () => {
    track1.load(); track2.load(); track3.load(); track4.load(); track5.load();
    play.innerHTML = "Play"; play.id = "paused";
}