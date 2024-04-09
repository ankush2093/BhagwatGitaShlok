// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../css/Slokcard.css";
// import { useSpeechSynthesis } from 'react-speech-kit';

// const Slokcard = () => {
//   const [chapters, setChapters] = useState([]);
//   const [expandedChapterIndex, setExpandedChapterIndex] = useState(null);
//   // Set base URL for Axios

//  axios.defaults.baseURL = "https://bhagvadgitabackend.onrender.com/gita/";

// // Now, you can make requests without repeating the domain
//   const { speak } = useSpeechSynthesis();

//   useEffect(() => {
//     const fetchChapters = async () => {
//       try {
//         const response = await axios.get("chapters");
//         setChapters(response.data);
//       } catch (error) {
//         console.error("Error", error);
//       }
//     };

//     fetchChapters();
//   }, []);

//   const handleToggleChapter = (index) => {
//     setExpandedChapterIndex(index === expandedChapterIndex ? null : index);
//   };

//   const speakSlowly = (text) => {
//     speak({ text, rate: 0.5 });
//   };

//   return (
//     <div className="slok-card-container">
//       {chapters.map((chapter, index) => (
//         <div key={index} className="slok-card">
//           <h2>{chapter.name}</h2>
//           <p>Chapter Number: {chapter.chapter_number}</p>
//           <p>Verses Count: {chapter.verses_count}</p>
//           <div className="dropdown">
//             <button className="dropbtn" onClick={() => handleToggleChapter(index)}>
//               View More
//             </button>
//             {expandedChapterIndex === index && (
//               <div className="dropdown-content">
//                 <p>Summary (English): {chapter.summary.en}</p>
//                 <button className="speak-button" onClick={() => speakSlowly(chapter.summary.en)}> <i class="fa-solid fa-volume-high"></i> Speak</button>
//                 <p>Summary (Hindi): {chapter.summary.hi}</p>

//               </div>
//             )}
//           </div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slokcard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Slokcard.css";
import { useSpeechSynthesis } from "react-speech-kit";

const Slokcard = () => {
  const [chapters, setChapters] = useState([]);
  const [expandedChapterIndex, setExpandedChapterIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          "https://bhagvadgitabackend.onrender.com/gita/chapters"
        );
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
    speak({ text, rate: 0.5 });
  };

  const filteredChapters = chapters.filter((chapter) => {
    return (
      chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.chapter_number.toString().includes(searchTerm) ||
      chapter.verses_count.toString().includes(searchTerm) ||
      chapter.summary.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.summary.hi.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="slok-card-container">
      <div className="input-group">
        <div className="form-outline" data-mdb-input-init>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="button" class="btn btn-primary" data-mdb-ripple-init>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <br></br>
      
      {filteredChapters.map((chapter, index) => (
        <div key={index} className="slok-card">
          <h2>{chapter.name}</h2>
          <p>Chapter Number: {chapter.chapter_number}</p>
          <p>Verses Count: {chapter.verses_count}</p>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => handleToggleChapter(index)}
            >
              View More
            </button>
            {expandedChapterIndex === index && (
              <div className="dropdown-content">
                <p>Summary (English): {chapter.summary.en}</p>
                <button
                  className="speak-button"
                  onClick={() => speakSlowly(chapter.summary.en)}
                >
                  {" "}
                  <i className="fa-solid fa-volume-high"></i> Speak
                </button>
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
