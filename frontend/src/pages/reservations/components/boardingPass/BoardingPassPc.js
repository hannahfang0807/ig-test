import React from 'react'
import './boardingPass.css'
import boardingPass from '../../images/boardingPass.png'
import boardingPassStamp from '../../images/boardingPassStamp.png'

const BoardingPassPc = (props) => {
  // 這邊應該統一用同樣的dateFormatter處理
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
  //const farmattedDate = date.split('T')[0]
  return (
    <div className="boarding-pass-wrapper">
      <img
        className="bording-pass"
        src={reservationId ? boardingPassStamp : boardingPass}
        alt="boarding pass"
      />
      <div className="booking-info-wrapper">
        <div className="main-text-wrapper">
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂單編號</div>
            <div className="booking-info-content">
              {reservationId || <i>待確認</i>}
            </div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂位大名</div>
            <div className="booking-info-content">{userName || '張祐如'}</div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">訂單成立日</div>
            <div className="booking-info-content">{today}</div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">聯絡資訊</div>
            <div className="booking-info-content">
              {userPhone || '0926554778'}
            </div>
          </div>
          <div className="booking-main-info-row">
            <div className="booking-info-title">人數</div>
            <div className="booking-info-content">
              {/* 到底是誰說要人數要用範圍的== */}
              {numberOfPeople + ' - ' + (Number(numberOfPeople) + 2)} 人
            </div>
          </div>
        </div>
        <div className="sub-text-wrapper">
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位日期</div>
            <div className="booking-sub-info-content">{date}</div>
          </div>
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位時間</div>
            <div className="booking-sub-info-content">{startTime}:00</div>
          </div>
          <div className="booking-sub-info-row">
            <div className="booking-sub-info-title">訂位地點</div>
            <div className="booking-sub-info-content">{storeName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardingPassPc
