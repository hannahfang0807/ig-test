class User {
    constructor( email, password, name, nickname, gender, phone, birthday, address) {
      // this.id = 0
      this.email = email
      this.password = password
      this.name = name
      this.nickname = nickname
      this.gender = gender
      this.phone = phone
      this.birthday = birthday
      this.address = address
    }
  
    // 註冊
    addUserSQL() {
      let sql = `INSERT INTO members(userEmail, userPwd) \
                     VALUES('${this.email}', '${this.password}')`
      return sql
    }

    // login用
    getUserByEmailAndPasswordSQL() {
        let sql = `SELECT * FROM members WHERE userEmail = '${this.email}' AND userPwd = '${this.password}' LIMIT 0,1`
    return sql
    }

    // 更新會員資料
    updateUserByIdSQL(id) {
      console.log(`pwd received = ${this.address}`)
      let sql = `UPDATE members \
                 SET userEmail = '${this.email}', userName = '${this.name}', userNickname = '${this.nickname}', userGender = '${this.gender}',userPhone = '${this.phone}',userBirthday = '${this.birthday}', userAddress = ${this.address} \
                 WHERE userId =  ${id}`
      return sql
    }

    // 更新會員密碼
    updatePwdByIdSQL(id) {
      console.log(`pwd received = ${this.password}`)
      let sql = `UPDATE members \
                 SET password = '${this.password}' \
                 WHERE id =  ${id}`
      return sql
    }

  
  
}
  
  //export default User
  module.exports = User
  