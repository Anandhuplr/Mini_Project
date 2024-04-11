import React from 'react'
import './img1.css'
import img2 from '../../images/stud.jpg'
import img3 from '../../images/pic2.jpg'
import img4 from '../../images/pic3.jpg'
export default function img1() {
  return (
    <div className="image-container">
          <img className="image"
            src={img2} alt='1st'
            
          />
          <img className="image" src={img3}  alt='2nd'/>
          <img className="image" src={img4} alt='3rd' />
        </div>
  )
}
