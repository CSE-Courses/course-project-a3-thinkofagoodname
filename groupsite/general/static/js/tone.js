console.clear();
let 
    synthType = "new Tone.Synth().toMaster()",
    soundSelected = "Synth",
    oscillatorType = "triangle",
    effectsAddedList = [],
    synth = new Tone.Synth().toMaster(),
    frequency = synth.frequency.value;

document.onkeypress = (e) => {
  e = e || window.event;
  let charCode = e.keyCode;

  if (charCode) {
    determineNote(charCode);
  }
}

function selectSynthType(sound) {
  if(soundSelected !== sound) {
    document.getElementById(soundSelected).classList.remove("active");
    document.getElementById(sound).classList.add("active");
    soundSelected = sound;
  }
}

function changeOscillator(type) {
  if(oscillatorType !== type) {
    document.getElementById(oscillatorType).classList.remove("active");
    document.getElementById(type).classList.add("active");
    oscillatorType = type;
  }
}

const determineNote = (note) => {
  selectSynthSound();

  switch(note) {
    





    case 97:
      synth.triggerAttackRelease("C" + 4 , "8n");
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
    


  };

  frequency = synth.frequency.value;
  
}

const wKPress = (selector) => {
  document.querySelector(selector).style.fill = "#5E503F";
  setTimeout(function(){
  document.querySelector(selector).style.fill = "#C6AC8F";
  }, 200)
}

const bKPress = (selector) => {
  document.querySelector(selector).style.fill = "#22333B";
  setTimeout(function(){
  document.querySelector(selector).style.fill = "#0A0908";
  }, 200)
}

const selectSynthSound = () => {
  let effects = effectsAddedList.toString();

  switch(soundSelected) {
    case "Synth":
      synthType =  "new Tone.Synth().toMaster()";
      synth = eval(synthType);
      break;
    case "MonoSynth":
      synthType =  "new Tone.MonoSynth().toMaster()";
      synth = eval(synthType);
      break;
    case "AMSynth":
      synthType =  "new Tone.AMSynth().toMaster()";
      synth = eval(synthType);
      break;
    case "FMSynth":
      synthType =  "new Tone.FMSynth().toMaster()";
      synth = eval(synthType);
      break;
    case "MembraneSynth":
      synthType =  "new Tone.MembraneSynth().toMaster()";
      synth = eval(synthType);
      break;
    default:
      synth = new Tone.Synth().toMaster();
  }
  synth.oscillator.type = oscillatorType;
}


