import { useEffect, useState, useRef } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from  '../../styles/formStyle.module.css'

export function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailCad, setEmailCad] = useState('');
    const [PasswordCad, setPasswordCad] = useState('');

    const buttonRefLog = useRef(null);
    const buttonRefCad = useRef(null);

    useEffect(() => {
        if (emailLogin === '' || passwordLogin === '') {
            buttonRefLog.current.disabled = true;
        } else {
            buttonRefLog.current.disabled = false;
        }
    }, [emailLogin, passwordLogin]);
    useEffect(() => {
        if (emailCad === '' || PasswordCad === '') {
            buttonRefCad.current.disabled = true;
        } else {
            buttonRefCad.current.disabled = false;
        }
    }, [emailCad, PasswordCad]);

    function handleClickLogin(e) {
        e.preventDefault();
    }
    function handleClickCad(e) {
        e.preventDefault();
    }
    return(
        <div className={style.container}>
        
              <form action="/verification/log" method="post" className={style.content_form_log}>
            <h1>Login</h1>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="e-mail" 
                     id="fullWidth" 
                     onChange={(e)=>{setEmailLogin(e.target.value)}}
                     value={emailLogin}
                    />
                </div>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="password"  
                     id="fullWidth"
                     type="password"
                     onChange={(e)=>{setPasswordLogin(e.target.value)}}
                     value={passwordLogin}
                    />
                </div>
                <div className="btn">
                    <Button 
                     variant="contained" 
                     disableElevation 
                     type="submit" 
                     ref={buttonRefLog} 
                     onClick={handleClickLogin}>
                        Logar
                    </Button>
                </div>
              </form>

              <form action="/verification/cad" method="post" className={style.content_form_cad}>
                <h1>Cadastro</h1>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="e-mail" 
                     id="fullWidth" 
                     onChange={(e)=>{setEmailCad(e.target.value)}}
                     value={emailCad}
                    />
                </div>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="password"
                     type="password" 
                     id="fullWidth" 
                     onChange={(e)=>{setPasswordCad(e.target.value)}}
                     value={PasswordCad}
                    />
                </div>
                <div className="btn">
                    <Button 
                     variant="contained" 
                     disableElevation 
                     type="submit" 
                     ref={buttonRefCad} 
                     onClick={handleClickCad}>
                        Cadastrar
                    </Button>
                </div>
              </form>
          </div>
    )
}