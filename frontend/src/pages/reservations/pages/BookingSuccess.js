import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './bookingSuccess.css'
import BoardingPass from '../components/boardingPass/BoardingPass'
import Button from '../components/Button'

const BookingSuccess = ({ match }) => {
  const reservationId = match.params.id
  const [orderData, setOrderData] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8080/booking/success/${reservationId}`)
      .then((res) => {
        console.log(res.data)
        setOrderData(res.data)
      })
      .catch((e) => {
        // todo: handle error message
        console.log(e)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BoardingPass orderData={orderData} />

      {/* todo: fix style */}
      <div className="booking-success-button-wrapper">
        <Button
          link={'/'}
          buttonText={'去商城逛逛'}
          className="muted-purple-background"
          isDisabled={false}
        />
        <Button
          link={`/users/booking/${reservationId}`}
          buttonText={'查看預約'}
          className={null}
          isDisabled={false}
        />
      </div>
    </>
  )
}

export default BookingSuccess
