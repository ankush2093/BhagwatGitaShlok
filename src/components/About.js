import React from 'react'
import HeroProfile from '../img/heroiprofile.png'

const About = () => {
  return (
    <>
      

      <div className='text-center'>
        <img
          src={HeroProfile}
          className="rounded-circle mb-3"
          style={{ width: 150 }}
          alt="Avatar"
        />
        <h5 className="mb-2">
          <strong>Ankush Kumar</strong>
        </h5>
        <p className="text-muted">
          Web Developer <span className="badge bg-primary">PRO</span>
        </p>
      </div>



    </>

  )
}

export default About