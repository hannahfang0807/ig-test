import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './bookingProcess.css'
import DatePicker from '../components/calendar/DatePicker'
import PeopleSelect from '../components/peopleSelect/PeopleSelect'
import StoreInfo from '../components/storeInfo/StoreInfo'
import Button from '../components/Button'
import StoreSelectButtons from '../components/storeSelectButtons/StoreSelectButtons'
import { store1, store2 } from '../storeData'

const BookingProcess = () => {
  const today = new Date() //date object might be a problem
  const [selectedDate, setSelectedDate] = useState(today)

  const [people, setPeople] = useState('2')

  // store value could be: all (default), daan, songshan
  // 控制頁面要出現哪家分店
  const [store, setStore] = useState('all')

  const [locationAndTime, setLocationAndTime] = useState({
    storeName: null, //大安店、松山店
    time: null,
  })
  // store1 & store2 are the default value, aka when server failed, it won't break at least phew
  const [store1Info, setStore1Info] = useState(store1)
  const [store2Info, setStore2Info] = useState(store2)

  useEffect(() => {
    // every time the dependency arr changes, make request to the server
    const formattedDate = dateFormatter(selectedDate)
    axios
      // http://localhost:8080/booking?formattedDate=2021-07-14
      .get('http://localhost:8080/booking', {
        params: { formattedDate },
      })
      .then((res) => {
        // client要求的資料格式列在storeData這個檔案
        // then pass the data to TimeButton component, then use className to en/disable buttons
        const { store1, store2 } = res.data
        setStore1Info(store1)
        setStore2Info(store2)
      })
      .catch((e) => {
        // todo: handle error message
        console.log(e)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  // todo: repetitve code=> make a module
  const dateFormatter = (date) => {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return [year, month, day].join('-')
    // expected output: 2021-07-21
    // todo: 2-30 可能會沒有=>day.js
  }

  // 最後要傳到下一頁的data
  localStorage.setItem('date', dateFormatter(selectedDate))
  localStorage.setItem('numberOfPeople', people)
  localStorage.setItem('location', locationAndTime.storeName)
  localStorage.setItem('time', locationAndTime.time)

  return (
    <div className="container p-5">
      <div className="row mb-5 d-flex">
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          <PeopleSelect people={people} setPeople={setPeople} />
          <StoreSelectButtons store={store} setStore={setStore} />
        </div>
      </div>
      <StoreInfo
        locationAndTime={locationAndTime}
        setLocationAndTime={setLocationAndTime}
        showStores={store}
        store1Info={store1Info}
        store2Info={store2Info}
      />
      <div className="booking-process-button-wrapper">
        <Button link="/booking-steps" buttonText="回上一頁" className={''} />
        <Button
          link="/booking/confirm"
          buttonText="確認預約"
          className={''}
          isDisabled={
            locationAndTime.storeName === null && locationAndTime.time === null
              ? true
              : false
          }
        />
      </div>
    </div>
  )
}

export default BookingProcess
