import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberEdit.scss'

//pop up套件
import swal from 'sweetalert'

// image
import memberImg from './images/member-img.png'
import googleLogin from './images/google-login.png'

// 日期格式套件
const moment = require('moment-timezone')

function MemberEdit(props) {
  // 從localStorage抓取該會員所有資料
  const userData = JSON.parse(localStorage.getItem('userData'))
  // console.log(userData)
  // const userB = moment(userData.userBirthday).format('YYYY-MM-DD')
  // console.log(userB)
  const [nickname, setNickname] = useState(userData.userNickname)
  const [name, setName] = useState(userData.userName)
  const [gender, setGender] = useState(userData.userGender)
  const [birthday, setBirthday] = useState(userData.userBirthday)
  const [email, setEmail] = useState(userData.userEmail)
  const [phone, setPhone] = useState(userData.userPhone)
  const [address, setAddress] = useState(userData.userAddress)

  // 更新會員資料
  async function updateUserToSever() {
    // 開啟載入指示

    const newData = {
      name,
      nickname,
      gender,
      phone,
      birthday,
      address,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/' + userData.userId

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 彈出提示視窗
    if (data) {
      swal({
        text: '個人資料儲存成功',
        icon: 'success',
        button: false,
        timer: 3000,
      })

      // 如果登入成功
      // 改動react App母層變數以紀錄現在的用戶登入狀態
      // setCurrentUser(data.userId)
      localStorage.setItem('userData', JSON.stringify(data))
      // console.log(
      //   'localStorge:',
      //   localStorage.getItem('userId', JSON.stringify(data.userId))
      // )
      // setLoginmode(true)
    } else {
      swal({
        text: '個人資料儲存失敗，請重新編輯',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
    setTimeout(() => {
      // data.id = undefined
      if (data.userId != undefined) {
        window.location.replace(`/member/`)
        return data.userId
      } else {
        return 0
      }
    }, 1000)
  }

  const display = (
    <>
      ;
      <div className="container">
        <div className="member-edit row text-center ">
          <h1 className="text-light">修改個人資訊</h1>
          <button type="submit" className="btn">
            <img src={googleLogin} alt="googleLogin" /> Google登入中
          </button>
          <div className="editTop text-center">
            <div className="memberA">
              <img src={memberImg} alt="memberImg" />
            </div>
            <div className="memberB">
              <button className="btn mb-3">上傳新頭貼</button>
              <button className="btn my-3">使用預設頭貼</button>
            </div>
          </div>
          <div className="edit-form">
            <div className="input-box pb-4">
              <label htmlFor="nickname">暱稱*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="nickname"
                  value={nickname}
                  placeholder="請輸入你的暱稱"
                  onChange={(event) => {
                    setNickname(event.target.value)
                  }}
                />
              </div>
              {/* <small id="nickname" className="form-text hidden">
                  此暱稱已有人使用過
                </small> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="name">真實姓名*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="name"
                  value={name}
                  placeholder="請輸入你的真實姓名"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>
              {/* <small id="name" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="gender">性別*</label>
              <div className="input-frame">
                <select
                  className="form-control transparent-input "
                  id="gender"
                  placeholder="E-mail"
                  value={gender}
                  onChange={(event) => {
                    setGender(event.target.value)
                  }}
                >
                  <option value="male">男</option>
                  <option value="female">女</option>
                </select>
              </div>
              {/* <small id="gender" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="gender">生日*</label>
              <div className="input-frame">
                <input
                  type="date"
                  className="form-control transparent-input "
                  id="gender"
                  value={birthday}
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  onChange={(event) => {
                    setBirthday(event.target.value)
                  }}
                />
              </div>
              {/* <small id="gender" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="email">E-mail*</label>
              <div className="input-frame">
                <input
                  readOnly
                  type="text"
                  className="form-control transparent-input text-muted"
                  id="email"
                  value={email}
                />
              </div>
              <small id="email" className="form-text text-left text-danger" />
              Email作為登入帳號無法變更
            </div>
            <div className="input-box py-4">
              <label htmlFor="phone">手機*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="phone"
                  placeholder="請輸入你的手機號碼"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                />
              </div>
              {/* <small id="phone" className="form-text hidden" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="address">地址*</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="address"
                  placeholder="請輸入你的收件地址"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value)
                  }}
                />
              </div>
              {/* <small id="address" className="form-text hidden" /> */}
            </div>

            <button
              className="btn btn-block"
              onClick={() => {
                updateUserToSever()
              }}
            >
              儲存會員資料
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(MemberEdit)
