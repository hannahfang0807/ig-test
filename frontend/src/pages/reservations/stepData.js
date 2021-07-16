import STEP1 from './images/step1.png'
import STEP2 from './images/step2.png'
import STEP3 from './images/step3.png'
import STEP4 from './images/step4.png'
import pricing from './images/pricing.png'
import Button from './components/Button'

export const step1 = {
  step: 'STEP1',
  stepIcon: STEP1,
  stepImage: 'https://fakeimg.pl/300/', //留言板的gif檔
  Hover: Button,
  link: '#',
  buttonText: '前往揪團留言板',
  stepHeader: '尋找夥伴',
  stepDetail: '尋找身邊想一起探索桌遊宇宙的太空人夥伴，建議3人以上成行！',
}

export const step2 = {
  step: 'STEP2',
  stepIcon: STEP2,
  stepImage: 'https://fakeimg.pl/300/', //this will be tricky, a carousel component maybe?
  Hover: Button,
  link: '#',
  buttonText: '查看艙房',
  stepHeader: '預約艙房',
  stepDetail: '我們有舒適寬敞的分店供您選擇，來看一下離你最近的分店！',
}

export const step3 = {
  step: 'STEP3',
  stepIcon: STEP3,
  stepImage: pricing,
  Hover: null,
  link: null,
  buttonText: null,
  stepHeader: '完成付款',
  stepDetail: '確認您的預約內容無誤，會開放付款功能，請您完成線上付款！',
}

export const step4 = {
  step: 'STEP3',
  stepIcon: STEP4,
  stepImage: 'https://fakeimg.pl/300/', //要再去找一個情境圖片
  Hover: null,
  link: null,
  buttonText: null,
  stepHeader: '探險開始',
  stepDetail: '付款完成後，請依照時間抵達預約探險的太空艙，開始您的探險！',
}
