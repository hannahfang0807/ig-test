import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import './timeButton.css'

const TimeButton = (props) => {
  // custom style for react-icons
  const timeIconStyle = {
    marginBottom: '2px',
    marginRight: '2px',
    fontSize: '20px',
  }

  // locationAndTime: { storeName: null (default) 大安店、松山店, time: null(default) 13-21}
  const { value, isAvailible, onLocationAndTimeChange, locationAndTime } = props

  // if selected, add 'selected' to className
  let isSelected = false
  if (
    value.storeName === locationAndTime.storeName &&
    value.time === locationAndTime.time
  ) {
    isSelected = true
  }

  return (
    <button
      // if isAvailible, add 'availible' to className
      // 這邊要從資料庫得到bool
      className={`time-button ${isAvailible && 'availible '}${
        isSelected && 'selected'
      }`}
      disabled={!isAvailible}
      onClick={() => {
        onLocationAndTimeChange(value)
      }}
    >
      <span className="time-icon">
        <AiOutlineClockCircle style={timeIconStyle} />
      </span>
      <span className="time-info">{value.time}:00</span>
    </button>
  )
}

export default TimeButton
