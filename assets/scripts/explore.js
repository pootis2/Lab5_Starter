// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textToSpeak = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  function populateVoiceList() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  if (typeof synth !== 'undefined' && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking.');
      return;
    }

    if (textToSpeak.value !== '') {
      const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      const voices = synth.getVoices();
      utterance.voice = voices.find((voice) => voice.name === selectedOption);

      faceImage.src = `./assets/images/smiling-open.png`;
      utterance.onend = () => {
        faceImage.src = `./assets/images/smiling.png`;
      };

      synth.speak(utterance);
    }
  });
}