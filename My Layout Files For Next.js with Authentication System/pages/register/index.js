import React from 'react'
import css from "../Auth.module.css"

export default function index() {
  return (
    <div className={css.authPageContainer}>
        <div className={css.formContainer}>
            <form className={css.authForms}>
                <h2 style={ { textAlign: "center" } }>Aşşağıdaki Formu Doldurarak Kaydolun.</h2>

                <div className={css.formInputsGrid}>
                    <label>
                        <span>Müstearınız:</span>
                        <input type="text" required />
                    </label>

                    <label>
                        <span>Şifreniz:</span>
                        <input type="password" required />
                    </label>

                    <label>
                        <span>E-postanız:</span>
                        <input type="email" required />
                    </label>

                    <label>
                        <input className={css.checkBox} type="checkbox" required/>
                        <span style={ { fontSize: "0.75rem" } }>Bu kutuyu işaretleyerek şerait-i istimaliyemizi kabul etmiş addolunursunuz.</span>
                    </label>
                </div>

                <div className={css.submitButtonContainer}>
                    <input className='link-buttons' type="submit" value="Register" />
                </div>
            </form>
        </div>
    </div>
  )
}
