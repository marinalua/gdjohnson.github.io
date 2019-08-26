# Dissect
Remix The Beatles. 

**[Live Link](https://gdjohnson.github.com/Dissect)**

**Technologies**: ES6, Web Audio API, PizzicatoJS, WaveformJS.

![Music](/../dev/img/Dissect%202.png)

### Background

Audio stems are isolated tracks that get combined to form a song's final mix. Depending on the way the track is being produced and recorded, stems can contain anything from a minor audio effect to a vocal line to the rhythm sectin of a song. By toggling, isolating, combining, and remixing these audio stems, listeners can get a better sense of how a song is put together. Elements that were once hidden in the mix, or which played subtle, supplementary roles can be given the spotlight.

Come Together takes a handful of Beatles MOGG files from albums like _Abbey Road_, _Revolver_, and _Sgt. Peppers_ and allows users to manipulate their audio stems. Instruments are represented graphically to allow easier navigation of the mix, and track "tours" (feature in-progress) can be toggled to guide the listener around the mix with a predetermined sequence of toggles and volumes.

### Code
Track loading is structured as a series of callbacks, called when the parent function is loaded & ready to play. Audio contexts are created which bind the audio files, audio effects, and form range inputs.

```
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
```
Audio effects are added as properties of objects via the Pizzicato library.
```
const reverb = new Pizzicato.Effects.Reverb({
                    time: 0, 
                    decay: 0, 
                    mix: 0
                });
```

### Functionality & MVPs

Users will be able to:
- [x] Play and pause the mix.
- [x] Mute, solo, and pan individual stems.
- [x] Adjust the mix volume of individual stems.
- [x] Add effects like reverb and gain.
- [ ] Take track tours with predetermined mixes (in progress).

### Architecture and Technologies

Still exploring; will update this section as I get a better sense of the necessary technologies beyond JavaScript.

### Implementation Timeline

**Day 2**: Learn Web Audio API. Get basic audio playback. Explore synchronous play.

**Day 3**: Continue work on synchronous play if needed. Style page. Handle panning. Start work on track tour.

**Day 4**: Continue work on track tour. Polish styling and interface.