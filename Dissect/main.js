// play = document.getElementsByName("play")[0];

// window.addEventListener('DOMContentLoaded', () => {
//     loadTracks({innerHTML: "Something", style: true});
// });

// const togglePlayback = () => {
//     if (play.id === "paused"){
//         setTimeout(() => {
//             tracks.forEach(track => { track.play(); })
//             play.innerHTML = "Ⅱ Pause"; 
//             play.id = "playing"}, 
//             300);
//         } else {
//         setTimeout(() => {
//             tracks.forEach(track => { track.play(); })
//             play.innerHTML = "► Play"; 
//             play.id = "paused"}, 
//             300);
//     }
// }

// const showControls = (event) => {
//     const controls = event.parentElement.children[0];

//     if (controls.style.display = "none"){
//         controls.style.display = "flex";
//     } else {
//         controls.style.display = "none";
//     }
// }

// const eventInterpreter = (event) => {
//     const track = tracks[parseInt(event.parentElement.key)];
//     const action = event.innerHTML;

//     if (action == "Solo") {
//         solo(track);
//     } 

//     if (action == "Add") {
//         add(track);
//     }

//     if (action == "Mute") {
//         mute(track);
//     }
// }

// const solo = (track) => {
//     tracks.forEach(track => { track.volume = 0 });
//     track.volume = 1;
// }

// const add = (track) =>{
//     track.volume = 1;
// }

// const mute = (track) =>{
//     track.muted = 0; 
// }




