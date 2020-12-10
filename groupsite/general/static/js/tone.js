console.clear();
let
    synthType = "new Tone.Synth().toMaster()",
    soundSelected = "Synth",
    oscillatorType = "triangle",

    synth = new Tone.Synth().toMaster(),
    reverbEffect = new Tone.JCReverb(0.4).connect(Tone.Master),
    frequency = synth.frequency.value;
reverbEffect.wet.value = 0.0;
//reverbEffect.roomSize.value = 0.9;
document.onkeypress = (e) => {
    e = e || window.event;
    let charCode = e.keyCode;

    if (charCode) {
        determineNote(charCode);
    }
}

function selectSynthType(sound) {
    if (soundSelected !== sound) {
        document.getElementById(soundSelected).classList.remove("active");
        document.getElementById(sound).classList.add("active");
        soundSelected = sound;
    }
}

function changeOscillator(type) {
    if (oscillatorType !== type) {
        document.getElementById(oscillatorType).classList.remove("active");
        document.getElementById(type).classList.add("active");
        oscillatorType = type;
    }
}

const determineNote = (note) => {
    selectSynthSound();

    switch (note) {


        case 97:
            synth.triggerAttackRelease("C" + 4, "8n");
            wKPress(".C");
            break;
        case 115:
            synth.triggerAttackRelease("D" + 4, "8n");
            wKPress(".D");
            break;
        case 100:
            synth.triggerAttackRelease("E" + 4, "8n");
            wKPress(".E");
            break;
        case 102:
            synth.triggerAttackRelease("F" + 4, "8n");
            wKPress(".F");
            break;
        case 103:
            synth.triggerAttackRelease("G" + 4, "8n");
            wKPress(".G");
            break;
        case 104:
            synth.triggerAttackRelease("A" + 4, "8n");
            wKPress(".A");
            break;
        case 106:
            synth.triggerAttackRelease("B" + 4, "8n");
            wKPress(".B");
            break;
        case 107:
            synth.triggerAttackRelease("C" + 5, "8n");
            wKPress(".octave-up-C");
            break;
        case 108:
            synth.triggerAttackRelease("D" + 5, "8n");
            wKPress(".octave-up-D");
            break;
        case 59:
            synth.triggerAttackRelease("E" + 5, "8n");
            wKPress(".octave-up-E");
            break;
        case 39:
            synth.triggerAttackRelease("F" + 5, "8n");
            wKPress(".octave-up-F");
            break;


        case 99:
            synth.triggerAttackRelease("G" + 5, "8n");
            wKPress(".octave-up-A2");
            break;
        case 118:
            synth.triggerAttackRelease("A" + 5, "8n");
            wKPress(".octave-up-B2");
            break;
        case 98:
            synth.triggerAttackRelease("B" + 5, "8n");
            wKPress(".octave-up-C2");
            break;

        case 119:
            synth.triggerAttackRelease("C#" + 4, "8n");
            bKPress(".C-sharp");
            break;
        case 101:
            synth.triggerAttackRelease("D#" + 4, "8n");
            bKPress(".D-sharp");
            break;
        case 116:
            synth.triggerAttackRelease("F#" + 4, "8n");
            bKPress(".F-sharp");
            break;
        case 121:
            synth.triggerAttackRelease("G#" + 4, "8n");
            bKPress(".G-sharp");
            break;
        case 117:
            synth.triggerAttackRelease("A#" + 4, "8n");
            bKPress(".A-sharp");
            break;
        case 111:
            synth.triggerAttackRelease("C#" + 5, "8n");
            bKPress(".octave-up-C-sharp");
            break;
        case 112:
            synth.triggerAttackRelease("D#" + 5, "8n");
            bKPress(".octave-up-D-sharp");
            break;
        case 110:
            synth.triggerAttackRelease("F#" + 5, "8n");
            bKPress(".octave-up-F-sharp");
            break;
        case 109:
            synth.triggerAttackRelease("G#" + 5, "8n");
            bKPress(".octave-up-G-sharp");
            break;
        case 44:
            synth.triggerAttackRelease("A#" + 5, "8n");
            bKPress(".octave-up-A-sharp");
            break;


    }
    ;

    frequency = synth.frequency.value;

}

const wKPress = (selector) => {
    document.querySelector(selector).style.fill = "#5E503F";
    setTimeout(function () {
        document.querySelector(selector).style.fill = "#C6AC8F";
    }, 200)
}

const bKPress = (selector) => {
    document.querySelector(selector).style.fill = "#22333B";
    setTimeout(function () {
        document.querySelector(selector).style.fill = "#0A0908";
    }, 200)
}

const selectSynthSound = () => {


    switch (soundSelected) {
        case "Synth":

            synth = new Tone.Synth().chain(reverbEffect).toMaster();
            break;
        case "MonoSynth":

            synth = new Tone.MonoSynth().chain(reverbEffect).toMaster();
            break;
        case "AMSynth":

            synth = new Tone.AMSynth().chain(reverbEffect).toMaster();
            break;
        case "FMSynth":

            synth = new Tone.FMSynth().chain(reverbEffect).toMaster();
            break;
        case "MembraneSynth":

            synth = new Tone.MembraneSynth().chain(reverbEffect).toMaster();
            break;
        default:
            synth = new Tone.Synth().toMaster();
    }
    synth.oscillator.type = oscillatorType;
}
let slider = document.getElementById("myRange");
slider.oninput = () => {
    reverbEffect.roomSize.value = slider.value;
    if (slider.value == 0.00) {
        reverbEffect.wet.value = 0;
    } else {
        reverbEffect.wet.value = 0.4
    }
}

