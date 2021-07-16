import React from 'react'
import './bookingStep.css'
import Button from '../components/Button'
import StepCard from '../components/stepCards/StepCard'
import { step1, step2, step3, step4 } from '../stepData'

const BookingStep = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <StepCard step={step1} />
          <StepCard step={step2} />
          <StepCard step={step3} />
          <StepCard step={step4} />
        </div>
        <div className="booking-now-button-wrapper">
          <Button className={null} link="/booking" buttonText="立即預約" />
        </div>
        <div className="booking-faq-button-wrapper">
          <div className="booking-steps-text">
            有任何問題嗎？歡迎查看我們的FAQ
          </div>
          <Button link={'/#'} buttonText={'FAQ'} />
        </div>
      </div>
    </>
  )
}

export default BookingStep
