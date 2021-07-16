import React from 'react'
import Calendar from 'react-calendar'
import './datePicker.css'

function DatePicker(props) {
  // selectedDate: default value = new Date()
  const { selectedDate, setSelectedDate } = props

  return (
    <Calendar
      onChange={setSelectedDate}
      // value={date}
      defaultValue={selectedDate}
      locale={'en'}
      minDate={new Date()}
      next2Label={null}
      prev2Label={null}
    />
  )
}

export default DatePicker
