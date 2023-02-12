import React from 'react'
import css from "../Auth.module.css";

export default function index() {
  return (
    <div className={css.authPageContainer}>
        <div className={css.formContainer}>
            <form className={css.authForms}>
                <h2 style={ { textAlign: 'center' } }>Giriş Yapın</h2>

                <div className={css.formInputsGrid} style={ { width: "40vw"} }>
                    <label>
                        <span>Müstearınız:</span>
                        <input type="text" required />
                    </label>

                    <label >
                        <span style={ { width: "5em" } }>Şifreniz:</span>
                        <input type="password" required />
                    </label>
                </div>

                <div className={css.submitButtonContainer}>
                    <input className='link-buttons' type="submit" value="Login" />
                </div>
            </form>
        </div>
    </div>
  )
}
