import React, {useMemo, useState, useEffect } from "react";

export const AccessibleFeature = (props) => {
  const [speechState, setSpeechState] = useState("stopped");
  const [speed, setSpeed] = useState(.75);
  const [utteranceText, setUtteranceText] = useState("");

  const utterance = useMemo(() => new SpeechSynthesisUtterance(), []);
  utterance.text = utteranceText; // Use the utteranceText state instead of props

  utterance.rate = speed; // Set the initial speech rate based on the state

  useEffect(() => {
    const handleVoicesChanged = () => {
      let voices = speechSynthesis.getVoices();
      utterance.voice = voices[9]; // Set the desired voice after 'voiceschanged' event
    };

    speechSynthesis.addEventListener("voiceschanged", handleVoicesChanged);

    // Clean up the event listener when the component unmounts
    return () => {
      speechSynthesis.removeEventListener("voiceschanged", handleVoicesChanged);
    };
  }, [utterance]);

  useEffect(() => {
    utterance.rate = speed; // Update the speech rate when the 'speed' state changes
  }, [utterance, speed]);

  useEffect(() => {
    setUtteranceText(props.question); // Update utteranceText state when props.question changes
  }, [props.question]);

  const speechOn = () => {
    if (speechState === "stopped") {
      setSpeechState("playing");
      window.speechSynthesis.speak(utterance);
    } else if (speechState === "paused") {
      window.speechSynthesis.resume();
      setSpeechState("playing");
    } else if (speechState === "playing") {
        window.speechSynthesis.cancel();
        setSpeechState("stopped");
        setSpeechState("playing");
        window.speechSynthesis.speak(utterance);
        setSpeechState("stopped");
      }
  };

  const speechOff = () => {
    if (speechState !== "stopped") {
      window.speechSynthesis.cancel();
      setSpeechState("stopped");
      
    }
  };

  const pause = () => {
    if (speechState === "playing") {
      window.speechSynthesis.pause();
      setSpeechState("paused");
    }
  };

  

  // return the html for the accessibility feature
  return (
    <div className="accessibility-container">
      <label htmlFor="speed">Speed</label>
      <input
        type="range"
        id="speed"
        name="speed"
        min="0.25"
        max="5"
        step={0.5}
        value={speed}
        onChange={(e) => setSpeed(parseFloat(e.target.value))}
      />
      <button id="play" onClick={speechOn}>
        Play
      </button>
      <button id="pause" onClick={pause}>
        Pause
      </button>
      <button id="stop" onClick={speechOff}>
        Stop
      </button>
    </div>
  );
};
