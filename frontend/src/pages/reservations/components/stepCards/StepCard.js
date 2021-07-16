import React, { useState } from 'react'
import './StepCard.css'

const StepCard = (props) => {
  //props: step (str), stepIcon(img, src), Hover(component), stepImage(img,src), stepHeader(str), stepDetail(str)
  const {
    step,
    stepIcon,
    Hover,
    link,
    buttonText,
    stepImage,
    stepHeader,
    stepDetail,
  } = props.step

  //for components' hover state
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className="step-card"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="img-wrapper">
        <img src={stepImage} alt="pricing-table" />
        {/* hover than show the button */}
        {Hover && (
          <Hover
            link={link}
            buttonText={buttonText}
            className={'card-button ' + (hover ? 'button-show' : '')}
          />
        )}
      </div>
      <div className="step-header">
        {' '}
        <span className="step">{step}</span>
        {stepHeader}
      </div>
      <div className="step-detail">{stepDetail}</div>
      <div className="step-icon">
        <img src={stepIcon} alt="step" />
      </div>
    </div>
  )
}

export default StepCard
