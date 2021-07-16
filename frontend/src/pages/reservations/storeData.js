// 這個檔案目前不需要了，也許可以拿來做error handling, 如果資料庫連結失敗就用這個檔案
export const store1 = {
  storeId: '1',
  storeImg: 'https://fakeimg.pl/300/',
  storeName: '大安店',
  address: '台北市大安區通化街28巷2號',
  tel: '02-2703-6603 | 0906-666-265',
  availibility: {
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: false,
    19: false,
    20: true,
    21: true,
  },
}

export const store2 = {
  storeId: '2',
  storeName: '松山店',
  storeImg: 'https://fakeimg.pl/300/',
  address: '台北市松山區八德路三段12巷11號',
  tel: '02-2579-8608 | 0906-666-265',
  availibility: {
    13: true,
    14: false,
    15: true,
    16: true,
    17: true,
    18: true,
    19: false,
    20: false,
    21: true,
  },
}
