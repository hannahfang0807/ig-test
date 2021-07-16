import React from 'react'
import './storeSelect.css'
import allStore from '../../images/allStore.svg'
import daanStore from '../../images/daanStore.svg'
import songShanStore from '../../images/songShanStore.svg'
import SelectButton from '../SelectButton'

const StoreSelectButtons = (props) => {
  const { store, setStore } = props

  return (
    <div className="store-select-wrapper">
      <SelectButton
        text="全部"
        icon={allStore}
        setValue={setStore}
        buttonValue="all"
        value={store}
        customStyle="store-select-button"
      />
      <SelectButton
        text="大安店"
        icon={daanStore}
        setValue={setStore}
        buttonValue="daan"
        value={store}
        customStyle="store-select-button"
      />
      <SelectButton
        text="松山店"
        icon={songShanStore}
        setValue={setStore}
        buttonValue="songshan"
        value={store}
        customStyle="store-select-button"
      />
    </div>
  )
}

export default StoreSelectButtons
