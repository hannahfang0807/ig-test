import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberFavList.scss'
import fun00 from './images/fun00.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'

function MemberCoupon(props) {
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
        <div className="member-btn-group text-center row">
          <div
            className="member-btn col col1"
            onClick={() => {
              props.history.push('/member')
            }}
          >
            <img src={fun00} alt={fun00} />
            <p className="py-1 m-0">會員中心</p>
          </div>
          <div
            className="member-btn col col2"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun01} alt={fun01} />
            <p className="py-1 m-0">查詢訂單</p>
          </div>
          <div
            className="member-btn col col3"
            onClick={() => {
              props.history.push('/member/memberReservation')
            }}
          >
            <img src={fun02} alt={fun02} />
            <p className="py-1 m-0">查詢預約</p>
          </div>
          <div
            className="member-btn col col4"
            onClick={() => {
              props.history.push('/member/memberFavList')
            }}
          >
            <img src={fun03} alt={fun03} />
            <p className="py-1 m-0">我的最愛</p>
          </div>

          <div
            className="member-btn col col5"
            onClick={() => {
              props.history.push('/member/memberCoupon')
            }}
          >
            <img src={fun04} alt={fun04} className="btn-active" />
            <p className="py-1 m-0 btn-active">我的優惠券</p>
          </div>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">優惠券名稱</th>
                <th scope="col">優惠內容</th>
                <th scope="col">獲得日期</th>
                <th scope="col">使用期限</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6月份小遊戲優惠券</td>
                <td>商城購物結帳金額-100元</td>
                <td>2021-06-08</td>
                <td>2021-07-31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default withRouter(MemberCoupon)
