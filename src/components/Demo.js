import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Demo = () => {
  const { speak } = useSpeechSynthesis();

  const speakHindiText = () => {
    const hindiText = "नमस्ते, कैसे हैं आप Kiashe ho aap";
    speak({ text: hindiText, lang: 'hi-IN' }); // Specify language as Hindi (hi-IN)
  };

  return (
    <div>
      <button onClick={speakHindiText}>Speak Hindi</button>
    </div>
  );
};

export default Demo;