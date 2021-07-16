import React, { useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles/register.scss'
import googleLogin from './images/google-login.png'

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  async function addUserToSever() {
    //確認密碼
    if (password != checkPassword) {
      console.log('密碼不相同')
      return
    }

    const newData = { email, password }

    const url = 'http://localhost:3000/members/register'

    const request = new Request(url, {
      method: 'POST',
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
  }

  const formRef = useRef(null)

  // const [fields, setFields] = useState({
  //   email: '',
  //   password: '',
  //   agree: false,
  // })

  // const handleFieldChange = (e) => {
  //   const updatedFields = {
  //     ...fields,
  //     [e.target.name]:
  //       e.target.type === 'checkbox'
  //         ? e.target.checked
  //         : e.target.value,
  //   }

  //   setFields(updatedFields)
  // }

  const display = (
    <>
      <div className="login">
        <div className="container">
          <div className="login-area row">
            <div className="login-left col-12 col-lg-6 flex-column text-center">
              <h2 className="text-light text-center">快速註冊</h2>
              <div className="btn-box align-items-center">
                <button type="submit" className="btn">
                  <img src={googleLogin} alt="google-login" />
                  Google帳號註冊
                </button>
              </div>
            </div>
            <div className="login-right col-12 col-lg-6">
              <h2 className="text-light text-center">一般註冊</h2>
              <div className="input-box pb-3">
                <label htmlFor="email">E-mail*</label>
                <div className="input-frame">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    required
                    className="form-control transparent-input "
                    id="email"
                    placeholder="請輸入你的E-mail作為登入帳號"
                  />
                </div>
              </div>
              <div className="input-box pb-3">
                <label htmlFor="password">密碼*</label>
                <div className="input-frame">
                  <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                    required
                    className="form-control transparent-input "
                    id="password"
                    placeholder="密碼必須為6個字以上包含大寫的英數字母"
                    minLength="6"
                  />
                </div>
              </div>
              <div className="input-box pb-3">
                <label htmlFor="checkPassword">確認密碼*</label>
                <div className="input-frame">
                  <input
                    type="text"
                    name="checkPassword"
                    value={checkPassword}
                    onChange={(event) => {
                      setCheckPassword(event.target.value)
                    }}
                    required
                    className="form-control transparent-input "
                    id="checkPassword"
                    placeholder="請再輸入一次密碼"
                    minLength="6"
                  />
                </div>
              </div>
              {/* <div className="form-check">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={fields.agree}
                    onChange={handleFieldChange}
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label text-light"
                    htmlFor="exampleCheck1"
                  >
                    我同意網站的使用者規章
                  </label>
                </div> */}
              <button
                type="submit"
                className="btn btn-block mt-5"
                onClick={() => {
                  addUserToSever()
                }}
              >
                註冊
              </button>
              <p className="text-light mt-3 text-center">
                已經有會員了？
                <Link to="/login">會員登入</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      <h1 className="text-light text-center">會員註冊</h1>

      {display}
    </>
  )
}

export default withRouter(Register)
