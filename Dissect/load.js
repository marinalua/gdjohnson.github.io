let play = document.getElementsByName("play")[0];
let track1 = document.getElementById('track-1');
let track2 = document.getElementById('track-2');
let track3 = document.getElementById('track-3');
let track4 = document.getElementById('track-4');
let track5 = document.getElementById('track-5');
let tracks = [track1, track2, track3, track4, track5];



const loadTracks = (event) => {
    let navLinks = document.getElementById('nav-bar-tracks').children
    //  let navLinks = Array.from(document.getElementById('nav-bar-tracks').children)

    
    if (event.style){
        //navLinks.forEach((link, idx) => { 
        //  link[idx+1].style.color = "rgb(102, 102, 102)";
        //})
        navLinks[1].style.color = "rgb(102, 102, 102)";
        navLinks[2].style.color = "rgb(102, 102, 102)";
        navLinks[3].style.color = "rgb(102, 102, 102)";
        navLinks[4].style.color = "rgb(102, 102, 102)";
        event.style.color = "green";
    }

    if (track1) {
        // tracks.forEach(track => {track.parentElement.removeChild(track)};)
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

    play.innerHTML = "Play"; play.id = "paused";
    helper();
}

const helper = () => {
    track1.load(); track2.load(); track3.load(); track4.load(); track5.load();
    
    //Reset all pan sliders
    Array.from(document.getElementsByClassName('input-wrapper')).forEach(
        (wrapper) => {
            wrapper.firstElementChild.value = 0;
        }
    )
}

const resetTrack = () => {
    loadTracks({innerHTML: "Something"});
    helper();

    // //Reset all control hide/show
    // Array.from(document.getElementsByClassName('track')).forEach(
    //     (track) => {
    //         track.children[1].style.display = "none";
    //         track.children[2].style.display = "none";
    //     }
    // )
    play.innerHTML = "Play"; play.id = "paused";
    window.newTrack = false;
}