import React from 'react'
import { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4">
    <div className="footer-copyright text-center py-3">
      © 2024 Copyright: Made By
      <Link to="/about"> Ankush</Link>
      &nbsp;&nbsp;&nbsp;
      <br />
      <a
        href="https://www.linkedin.com/in/ankush2093/" target='_blank'
        style={{ color: "blue" }}
      >
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href="https://github.com/ankush2093" target='_blank' style={{ color: "black"  }}>
        <i class="fab fa-github fa-2x"></i>
      </a> 
      &nbsp;&nbsp;&nbsp;
      <a href="https://www.instagram.com/codecraftiness/" target='_blank' style={{ color: "pink" }}>
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a
        href="https://www.facebook.com/ankushsingh2093/" target='_blank'
        style={{ color: "blue" }}
      >
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      &nbsp;&nbsp;&nbsp;
      <br />
      <br />
      <a
        className="btn btn-outline-primary"
        href="https://github.com/ankush2093/BhagwatGitaShlok" target='_blank'
      >
        <i class="fab fa-github "></i> Source Code{" "}
      </a>
      <br />
    
      <p className="mt-5 mb-3 text-muted">
        <a href="https://www.hitwebcounter.com">
          <img 
            style={{height:'50px',width:'200px'}}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cab_Speed_300V_blink.gif/640px-Cab_Speed_300V_blink.gif"
            title="Free Counter"
            Alt="web counter"
            border="0"
          />
        </a>
      </p>
    </div>
  </footer>
  )
}

export default Footer

