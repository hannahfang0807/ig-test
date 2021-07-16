import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberPwdEditSuccess.scss'

function MemberPwdEditSuccess(props) {
  const { auth } = props

  if (!auth) return <Redirect to="/login" />

  //   if (!auth)
  //     return (
  //       <Redirect>
  //         你沒登入，請連到<Link to="/login">登入頁面</Link>
  //       </Redirect>
  //     )

  return (
    <>
      ;
      <div className="container mt-5">
        <div className="forget-pwd row text-center">
          <h1 className="text-light">密碼修改成功</h1>
          <p>
            您的密碼已修改成功，
            <br />
            請使用新的密碼重新登入會員。
          </p>
          <button
            type="submit"
            className="btn btn-block"
            onClick={() => {
              props.history.push('/memberIndex')
            }}
          >
            回首頁
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(MemberPwdEditSuccess)
