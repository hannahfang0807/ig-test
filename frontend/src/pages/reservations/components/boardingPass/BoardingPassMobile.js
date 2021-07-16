import React from 'react'
import './boardingPassMobile.css'

import boardingPassMobile from '../../images/boardingPassMobile.png'
import boardingPassStampMobile from '../../images/boardingPassStampMobile.png'

const BoardingPassMobile = (props) => {
  const today = new Date().toISOString().split('T')[0]

  const {
    date = '2021-07-28',
    numberOfPeople = 2,
    reservationId,
    startTime = 13,
    storeName = '大安店',
    userName = '張祐如',
    userPhone = '0919145665',
  } = props

  return (
    <div className="container">
      <div
        className="boarding-pass-mobile-wrapper"
        style={{ fontSize: '12px' }}
      >
        <img
          className="boarding-pass"
          src={reservationId ? boardingPassStampMobile : boardingPassMobile}
          alt="boarding pass"
        />
        <div className="booking-info-wrapper-m">
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂單編號</div>
            <div className="booking-info-content-m">
              {reservationId || <i>待確認</i>}
            </div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂位大名</div>
            <div className="booking-info-content-m">{userName}</div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂單成立日</div>
            <div className="booking-info-content-m">{today}</div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">聯絡資訊</div>
            <div className="booking-info-content-m">
              {userPhone || '0926554778'}
            </div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">人數</div>
            <div className="booking-info-content-m">
              {numberOfPeople + ' - ' + (Number(numberOfPeople) + 2)} 人
            </div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂位日期</div>
            <div className="booking-info-content-m">{date}</div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂位時間</div>
            <div className="booking-info-content-m">{startTime}:00</div>
          </div>
          <div className="booking-main-info-row-m">
            <div className="booking-info-title-m">訂位地點</div>
            <div className="booking-info-content-m">{storeName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardingPassMobile
