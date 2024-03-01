// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Accordion from "react-bootstrap/Accordion";
// import Modal from "react-bootstrap/Modal";
// import ListGroup from "react-bootstrap/ListGroup";

// const Moreslok = () => {
//   const [chapters, setChapters] = useState([]);
//   const [show, setShow] = useState(false);
//   const [selectedChapter, setSelectedChapter] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = (chapter) => {
//     setSelectedChapter(chapter);
//     setShow(true);
//   };

//   useEffect(() => {
//     const fetchChapters = async () => {
//       try {
//         const response = await axios.get("https://bhagavadgitaapi.in/chapters");
//         console.log("Current Chapter response", response.data);
//         setChapters(response.data);
//       } catch (error) {
//         console.error("Error", error);
//       }
//     };

//     fetchChapters();
//   }, []);

//   return (
//     <div>
//       <Modal show={show} onHide={handleClose} centered>
//         <Modal.Header>
//           <Modal.Title className="text-center">
//             All Shlok From Chapter {selectedChapter?.chapter_number}
//           </Modal.Title>
//         </Modal.Header>


//         <Modal.Body>
//           <ListGroup>
//             {/* Render shloks here */}

//           </ListGroup>
//         </Modal.Body>


//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {chapters.map((chapter) => (

//         <div key={chapter.chapter_number} className="card border-warning">
//           <div className="card-body">
//          <h5 className="card-title"> {chapter.chapter_number}. {chapter.name}</h5>
//          <h5 className="card-title">{chapter.meaning.en} / {chapter.meaning.hi}  </h5>
//             <p className="card-text">
//               <Accordion>
//                 <Accordion.Item eventKey="0">
//                   <Accordion.Header>Hindi Summary</Accordion.Header>
//                   <Accordion.Body>
//                     <b>{chapter.summary?.hi}</b>
//                   </Accordion.Body>
//                 </Accordion.Item>
//                 <Accordion.Item eventKey="1">
//                   <Accordion.Header>English Summary</Accordion.Header>
//                   <Accordion.Body>
//                     <b>{chapter.summary?.en}</b>
//                   </Accordion.Body>
//                 </Accordion.Item>
//               </Accordion>
//             </p>
//             <p className="card-text text-center">
//               <button className="btn btn-outline-danger" onClick={() => handleShow(chapter)}>
//                 Read Sholks
//               </button>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Moreslok;





import React from 'react'
import Slokcard from './Slokcard'

const Moreslok = (props) => {
  return (
    <div>

      

        <Slokcard></Slokcard>
      </div>

      

      )
}

      export default Moreslok