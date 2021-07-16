import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberEditSuccess.scss'

function MemberEditSuccess(props) {
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
      ; ;
      <div className="container mt-5">
        <div className="forget-pwd row text-center">
          <h1 className="text-light">修改個人資料成功</h1>
          <p>您的個人資料已修改成功！</p>
          <button
            type="submit"
            className="btn btn-block"
            onClick={() => {
              props.history.push('/member')
            }}
          >
            回到會員中心
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(MemberEditSuccess)
