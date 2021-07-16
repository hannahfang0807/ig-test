import React from 'react'

const SelectButton = (props) => {
  //value: all, daan, songshan
  const { text, icon, setValue, value, buttonValue, customStyle } = props

  let isSelected = ''

  if (buttonValue === value) {
    isSelected = true
  }

  return (
    <button
      className={`${isSelected && 'selected'} ${customStyle && customStyle}`}
      onClick={() => {
        setValue(buttonValue)
      }}
    >
      <img src={icon} alt="store" />
      {text}
    </button>
  )
}

export default SelectButton
