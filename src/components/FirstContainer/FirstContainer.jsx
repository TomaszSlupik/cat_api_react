import React from 'react'
import './FirstContainer.css'
import Question from '../Question/Question'
import Answear from '../Answear/Answear'

export default function FirstContainer() {
  return (
    <div>
        <div className="box">
            <div className="shadow"></div>
            <div className="boxcenter">
            <div className="boxWrapper">
                    <div className="container">
                    <div className="firstBox">
                        <Question />
                    </div>
                    </div>
                    <div className="container">
                    <div className="secondBox">
                        <Answear />
                    </div>
                    </div>
            </div>

            </div>
           
        </div>
    </div>
  )
}
