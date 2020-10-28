console.clear();
let keyboardPosition = 4,
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
    /*case 122:
      keyboardPosition--;
      break;
    case 120:
      keyboardPosition++;
      break;*/
    case 97:
      synth.triggerAttackRelease("C" + keyboardPosition, "8n");
      whiteKeyPress(".C");
      break;
    case 115:
      synth.triggerAttackRelease("D" + keyboardPosition, "8n");
      whiteKeyPress(".D");
      break;
    case 100:
      synth.triggerAttackRelease("E" + keyboardPosition, "8n");
      whiteKeyPress(".E");
      break;
    case 102:
      synth.triggerAttackRelease("F" + keyboardPosition, "8n");
      
      break;
    case 103:
      synth.triggerAttackRelease("G" + keyboardPosition, "8n");
      
      break;
    case 104:
      synth.triggerAttackRelease("A" + keyboardPosition, "8n");
      
      break;
    case 106:
      synth.triggerAttackRelease("B" + keyboardPosition, "8n");
      
      break;
    case 107:
      synth.triggerAttackRelease("C" + (keyboardPosition + 1), "8n");
      
      break;
    case 108:
      synth.triggerAttackRelease("D" + (keyboardPosition + 1), "8n");
      
      break;
    case 59:
      synth.triggerAttackRelease("E" + (keyboardPosition + 1), "8n");
     
      break;
    case 39:
      synth.triggerAttackRelease("F" + (keyboardPosition + 1), "8n");
      
      break;


    case 99:
      synth.triggerAttackRelease("A" + (keyboardPosition + 2), "8n");
     
      break;
    case 118:
      synth.triggerAttackRelease("B" + (keyboardPosition + 2), "8n");
      
      break;
    case 98:
      synth.triggerAttackRelease("C" + (keyboardPosition + 2), "8n");
      
      break;

    case 119:
      synth.triggerAttackRelease("C#" + keyboardPosition, "8n");
     
      break;
    case 101:
      synth.triggerAttackRelease("D#" + keyboardPosition, "8n");
     
      break;
    case 116:
      synth.triggerAttackRelease("F#" + keyboardPosition, "8n");
      
      break;
    case 121:
      synth.triggerAttackRelease("G#" + keyboardPosition, "8n");
     
      break;
    case 117:
      synth.triggerAttackRelease("A#" + keyboardPosition, "8n");
      
      break;
    case 111:
      synth.triggerAttackRelease("C#" + (keyboardPosition + 1), "8n");
      
      break;
    case 112:
      synth.triggerAttackRelease("D#" + (keyboardPosition + 1), "8n");
      
      break;
    case 110:
      synth.triggerAttackRelease("F#" + (keyboardPosition + 1), "8n");
     
      break;
    case 109:
      synth.triggerAttackRelease("G#" + (keyboardPosition + 1), "8n");
     
      break;
    case 44:
      synth.triggerAttackRelease("A#" + (keyboardPosition + 2), "8n");
     
      break;
    default:
     
  };

  frequency = synth.frequency.value;
  
}

const whiteKeyPress = (selector) => {
  document.querySelector(selector).style.fill = "#5E503F";
  setTimeout(function(){
    document.querySelector(selector).style.fill = "#C6AC8F";
  }, 200)
}

const blackKeyPress = (selector) => {
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


