import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

const Button = (props) => {
  // 如果scss檔有設定好 就可以透過props來控制共用button的顏色

  const { link, buttonText, className, isDisabled } = props
  return (
    <Link to={link}>
      {/* add a conditional statement to className */}
      <button
        disabled={isDisabled}
        className={`general-button ${isDisabled && 'button-disabled '} ${
          className && className
        }`}
      >
        {buttonText}
      </button>
    </Link>
  )
}

export default Button
