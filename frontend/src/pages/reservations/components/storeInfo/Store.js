import React from 'react'
// import {IoLocationSharp} from 'react-icons/io'
import { ImPhone } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'

import TimeButton from './TimeButton'
import './store.css'

const Store = (props) => {
  // availibility: {13: true, 14: true, 15: true, 16: true, ...},
  // 由父層傳過來的店家資訊
  const { storeId, storeName, storeImg, address, tel, availibility } =
    props.store
  // 由父層傳過來的state
  const { onLocationAndTimeChange, locationAndTime } = props

  const buttons = []
  for (const [key, isAvailible] of Object.entries(availibility)) {
    buttons.push(
      <TimeButton
        key={key}
        value={{ storeName, time: key }}
        isAvailible={isAvailible}
        onLocationAndTimeChange={onLocationAndTimeChange}
        locationAndTime={locationAndTime}
      />
    )
  }

  return (
    <div className="store-info-container">
      <div className="store-img-wrapper">
        <img src={storeImg} alt={storeName} />
      </div>
      <div className="store-info-wrapper">
        <h3 className="store-name">{storeName}</h3>
        <h4 className="store-address">
          <span>
            <MdLocationOn />
          </span>
          {address}
        </h4>
        <h4 className="store-tel">
          <span>
            <ImPhone />
          </span>
          {tel}
        </h4>
        <div className="time-button-group">{buttons}</div>
      </div>
    </div>
  )
}

export default Store
