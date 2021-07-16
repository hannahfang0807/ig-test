import React from 'react'
import { withRouter } from 'react-router-dom'
import './styles/forgetPwdMailSent.scss'

function ForgetPwdMailSent(props) {
  return (
    <>
      ;
      <div className="container mt-5">
        <div className="forget-pwd row text-center">
          <h1 className="text-light">忘記密碼通知信已寄出</h1>
          <p>
            『重新設定密碼』的信件已寄到您的信箱，
            <br />
            請到信箱中收取信件，並重新設定密碼。
          </p>
          <button
            type="submit"
            className="btn btn-block"
            onClick={() => {
              props.history.push('../')
            }}
          >
            回首頁
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(ForgetPwdMailSent)
