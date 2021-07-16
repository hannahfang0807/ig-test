import React from 'react'
import { useScreen } from '../../../../hooks/useScreen'
import PeopleRadioButton from './PeopleRadioButton'
import astronaut from '../../images/astronaut.svg'
import SelectButton from '../SelectButton'

const PeopleSelect = (props) => {
  const { people, setPeople } = props

  const [width] = useScreen()

  //console.log('current width: ', width)
  // width只是暫時設定為800 最後以最後的style guide為主
  return width > 800 ? (
    <div>
      <PeopleRadioButton
        value="2"
        selected={people}
        text="2 - 4 人"
        iconLength={4}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="4"
        selected={people}
        text="4 - 6 人"
        iconLength={6}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="6"
        selected={people}
        text="6 - 8 人"
        iconLength={8}
        onChange={setPeople}
      />
      <PeopleRadioButton
        value="8"
        selected={people}
        text="8人以上"
        iconLength={10}
        onChange={setPeople}
      />
    </div>
  ) : (
    <div className="booking-people-select-button-mobile-wrapper">
      <SelectButton
        text="2人"
        icon={astronaut}
        setValue={setPeople}
        value={people}
        buttonValue="2"
        customStyle="booking-people-select-button-mobile"
      />
      <SelectButton
        text="4人"
        icon={astronaut}
        setValue={setPeople}
        value={people}
        buttonValue="4"
        customStyle="booking-people-select-button-mobile"
      />
      <SelectButton
        text="6人"
        icon={astronaut}
        setValue={setPeople}
        value={people}
        buttonValue="6"
        customStyle="booking-people-select-button-mobile"
      />
      <SelectButton
        text="8人"
        icon={astronaut}
        setValue={setPeople}
        value={people}
        buttonValue="8"
        customStyle="booking-people-select-button-mobile"
      />
    </div>
  )
}

export default PeopleSelect
