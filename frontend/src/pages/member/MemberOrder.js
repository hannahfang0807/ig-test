import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberOrder.scss'
import fun00 from './images/fun00.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'

function MemberOrder(props) {
  const OrderDisplay = (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">訂單編號</th>
            <th scope="col">訂購日期</th>
            <th scope="col">總金額</th>
            <th scope="col">付款狀態</th>
            <th scope="col">配送狀態</th>
            <th scope="col">訂單狀態</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#00424</td>
            <td>2021-06-07</td>
            <td className="text-yellow">NT$1800</td>
            <td>已完成</td>
            <td>等待配送中</td>
            <td>
              <div className="order-btn">查看詳情</div>
            </td>
          </tr>
          <tr>
            <td>#00058</td>
            <td>2021-06-07</td>
            <td className="text-yellow">NT$500</td>
            <td>已完成</td>
            <td>待取貨</td>
            <td>
              <div className="order-btn">查看詳情</div>
            </td>
          </tr>
          <tr>
            <td>#00424</td>
            <td>2021-06-07</td>
            <td className="text-yellow">NT$1800</td>
            <td>已完成</td>
            <td>已送達</td>
            <td>
              <div className="order-btn">查看詳情</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )

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
            <img src={fun01} alt={fun01} className="btn-active" />
            <p className="py-1 m-0 btn-active">查詢訂單</p>
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
            <img src={fun04} alt={fun04} />
            <p className="py-1 m-0">我的優惠券</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(MemberOrder)
