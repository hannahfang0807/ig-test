import React, { useState, useRef } from 'react'
import { withRouter } from 'react-router-dom'
import './styles/forgetPwd.scss'

function ForgetPwd(props) {
  const formRef = useRef(null)
  const [fields, setFields] = useState({
    email: '',
  })

  const [fieldErrors, setFieldErrors] = useState({
    email: '',
  })
  const handleFieldChange = (e) => {
    const updatedFields = {
      ...fields,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    }

    setFields(updatedFields)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
  }

  const handleChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  const handleInvalid = (e) => {
    e.preventDefault()

    const form = formRef.current

    let errorMsg = {}

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i]

      if (
        element.tagName !== 'button' &&
        element.willValidate &&
        !element.validity.valid
      ) {
        if (element.validity.valueMissing) {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.validationMessage,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
      ;
      <div className="container mt-5">
        <div className="forget-pwd row text-center">
          <h1 className="text-light">修改個人資訊</h1>
          <p>
            請輸入您的註冊電子郵件或手機號碼，
            <br />
            我們將會寄送『重新設定密碼』連結給您進行密碼設定。
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onInvalid={handleInvalid}
            className="pt-3"
          >
            <div className="input-box">
              <label htmlFor="userEmail">註冊信箱</label>
              <div className="input-frame">
                <input
                  type="email"
                  name="email"
                  className="form-control transparent-input"
                  value={fields.email}
                  onChange={handleFieldChange}
                  required
                  id="userEmail"
                  placeholder="E-mail"
                  title="請確實輸入您註冊時使用的信箱"
                />
              </div>
              {fieldErrors.email && (
                <small className="text-danger form-text ">
                  {fieldErrors.email}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-block mt-5"
              // onClick={() => {
              //   props.history.push('/forgetPwdMailSent')
              // }}
            >
              確認送出
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default withRouter(ForgetPwd)
