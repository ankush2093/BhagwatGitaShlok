import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Slokcard.css";
import { useSpeechSynthesis } from 'react-speech-kit';

const Slokcard = () => {
  const [chapters, setChapters] = useState([]);
  const [expandedChapterIndex, setExpandedChapterIndex] = useState(null);
  
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get("https://bhagavadgitaapi.in/chapters");
        setChapters(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchChapters();
  }, []);

  const handleToggleChapter = (index) => {
    setExpandedChapterIndex(index === expandedChapterIndex ? null : index);
  };

  const speakSlowly = (text) => {
    speak({ text, rate: 0.5 }); // Set rate to 0.5 for slower speech
  };

  return (
    <div className="slok-card-container">
      {chapters.map((chapter, index) => (
        <div key={index} className="slok-card">
          <h2>{chapter.name}</h2>
          <p>Chapter Number: {chapter.chapter_number}</p>
          <p>Verses Count: {chapter.verses_count}</p>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleToggleChapter(index)}>
              View More
            </button>
            {expandedChapterIndex === index && (
              <div className="dropdown-content">
                <p>Summary (English): {chapter.summary.en}</p>
                <button className="speak-button" onClick={() => speakSlowly(chapter.summary.en)}> <i class="fa-solid fa-volume-high"></i> Speak</button>
                <p>Summary (Hindi): {chapter.summary.hi}</p>

              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Slokcard;



