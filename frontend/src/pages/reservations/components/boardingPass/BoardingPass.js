import React from 'react'
import { useScreen } from '../../../../hooks/useScreen'
import BoardingPassPc from './BoardingPassPc'
import BoardingPassMobile from './BoardingPassMobile'

const BoardingPass = (props) => {
  const { orderData } = props

  // custom hooks to monitor screen width
  const [width] = useScreen()

  return width > 1000 ? (
    <BoardingPassPc {...orderData} />
  ) : (
    <BoardingPassMobile {...orderData} />
  )
}

export default BoardingPass
