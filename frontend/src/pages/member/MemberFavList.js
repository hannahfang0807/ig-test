import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberFavList.scss'
import fun00 from './images/fun00.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'
import item001 from './images/item001.jpg'

function MemberFavList(props) {
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
            <img src={fun03} alt={fun03} className="btn-active" />
            <p className="py-1 m-0 btn-active">我的最愛</p>
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
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={3}>
                  商品
                </th>
                <th scope="col">金額</th>
                <th scope="col">移除最愛</th>
                <th scope="col">商品詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="item-img">
                  <img src={item001} alt="目擊者之夜商品圖" />
                </td>
                <td>目擊者之夜</td>
                <td />
                <td>NT$1800</td>
                <td>
                  <i className="far fa-trash-alt" />
                </td>
                <td>
                  <div className="order-btn">查看商品</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default withRouter(MemberFavList)
