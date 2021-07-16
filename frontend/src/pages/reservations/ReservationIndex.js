import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BookingStep from './pages/BookingStep'
import BookingProcess from './pages/BookingProcess'
import BookingConfirm from './pages/BookingConfirm'
import BookingSuccess from './pages/BookingSuccess'

const reservationIndex = () => {
    return (
        <>
            <Route path="/booking/steps" exact component={BookingStep} />
            {/* todo: 我的下面三頁也要用到會員登入狀態 待改 */}
            <Route path="/booking" exact component={BookingProcess} />
            <Route path="/booking/confirm" exact component={BookingConfirm} />
            <Route path="/booking/success/:id" component={BookingSuccess} />
        </>

    )
}

export default reservationIndex
