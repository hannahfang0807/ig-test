import React from 'react'
import Store from './Store'

const StoreInfo = (props) => {
  const {
    locationAndTime,
    setLocationAndTime,
    showStores,
    store1Info,
    store2Info,
  } = props

  switch (showStores) {
    // don't fucking repeat yourself!
    case 'daan':
      return (
        <>
          <Store
            // 大安店
            store={store1Info}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
    case 'songshan':
      return (
        <>
          <Store
            // 松山店
            store={store2Info}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
    default:
      return (
        <>
          <Store
            // 大安店
            store={store1Info}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
          <Store
            // 松山店
            store={store2Info}
            onLocationAndTimeChange={setLocationAndTime}
            locationAndTime={locationAndTime}
          />
        </>
      )
  }
}

export default StoreInfo
