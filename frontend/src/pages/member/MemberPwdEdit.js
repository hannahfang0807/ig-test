import React, { useState, useEffect } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'

// style
import './styles/memberPwdEdit.scss'

// pop up套件
import swal from 'sweetalert'

function MemberPwdEdit(props) {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userId = userData.userId
  // console.log('userId:', userId)

  const [password, setPassword] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [newPwdCheck, setNewPwdCheck] = useState('')

  // 從伺服器要資料
  async function getUserFromServer(userId) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/' + userId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(`[GET] response = ${data}`)

    setPassword(data.password)
  }

  // 檢查兩個密碼是否相同
  async function checkPassword(pwd1, pwd2) {
    if (newPwd === newPwdCheck && newPwdCheck != '') {
      return true
    } else {
      return false
    }
  }

  // 更新密碼
  async function updatePwdToSever() {
    if (await checkPassword(newPwd, newPwdCheck)) {
      const newData = {
        password: newPwd,
      }

      const url = 'http://localhost:3000/members/pwd/' + userId

      // 以下實際發出request
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'PUT',
        body: JSON.stringify(newData),
        // request:
        //    header
        //    body
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      console.log(`request header = ${request.headers}`)
      console.log(`request body = ${request.body}`)

      // if (newData.password != null) {
      const response = await fetch(request)
      const data = await response.json()
      // } else {
      //   alert(password)
      // }
      // end if

      console.log('伺服器回傳的json資料', data)
      // 要等驗証過，再設定資料(簡單的直接設定)

      //直接在一段x秒關掉指示器
      setTimeout(() => {
        swal({
          text: '密碼修改成功！！！',
          icon: 'success',
          button: false,
          timer: 3000,
        })
      }, 1000)
    } else {
      // 抓出了空字串或者兩行不同 警訊以下內容
      swal({
        text: '密碼有誤, 請重新檢查',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(userId)
  }, [])

  const display = (
    <>
      ;
      <div>
        <div className="container">
          <div className="pwd-edit row text-center ">
            <h1 className="text-light">修改密碼</h1>
            <div className="edit-form">
              <div className="input-box pb-4">
                <label htmlFor="password">當前密碼*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    required
                    className="form-control transparent-input "
                    id="userPwd"
                    placeholder="請輸入目前的密碼"
                    minLength="6"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwd">新密碼*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwd"
                    value={newPwd}
                    required
                    className="form-control transparent-input "
                    id="newPwd"
                    placeholder="請輸入您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwd(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwdCheck">新密碼確認*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwdCheck"
                    alue={newPwdCheck}
                    required
                    className="form-control transparent-input "
                    id="newPwdCheck"
                    placeholder="請再輸入一次您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwdCheck(event.target.value)
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block"
                onClick={() => {
                  updatePwdToSever()
                }}
              >
                確認修改密碼
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(MemberPwdEdit)
