import { useEffect, useState, useRef } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from  '../../styles/formStyle.module.css';
import axios from 'axios'

export function Login() {

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [emailCad, setEmailCad] = useState('');
    const [PasswordCad, setPasswordCad] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('')
    const [isErrorVisible, setIsErrorVisible] = useState(false)

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

    async function handleClickLogin(e) {
        e.preventDefault();
        try {
            const responser = await axios.get('http://localhost:3220/users');
            setUsers(responser.data);
            if (Autorization()) {
                window.open('/get', '_self');
            } else {
                setError("Usuário não encontrado ou não autorizado.");
                setIsErrorVisible(true);
                setTimeout(() => {
                    setIsErrorVisible(false);
                }, 2000);
            }
        } catch (error) {
            alert('Algo de errado nao está certo, tente novamente mais tarde!')
            throw error;
        }
    }
    
    const handleClickCad = async(e) => {
        e.preventDefault();
        try {
            const newCad = await axios.post('http://localhost:3220/users/create', { email: emailCad, password: PasswordCad });
            console.log('um novo usuario foi cadastrado', newCad);
        } catch (error) {
            console.log({ error: error })
        }
    }
    
    const Autorization = () => {
        const findEmail = users.find(user => user.email === emailLogin);
        const findPassword = users.find(user => user.password === passwordLogin);
        if (findEmail && findPassword) {
            return true;
        } else {
            return false;
        }
    }
    
    return(
        <div className={style.container}>
        
              <form action="/users" method="get" className={style.content_form_log}>
                <h1>Login</h1>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="e-mail" 
                     onChange={(e)=>{setEmailLogin(e.target.value)}}
                     value={emailLogin}
                    />
                </div>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="password"  
                     type="password"
                     onChange={(e)=>{setPasswordLogin(e.target.value)}}
                     value={passwordLogin}
                    />
                </div>
                <small
                  className="error" 
                  style={{ display: isErrorVisible ? 'block' : 'none', color: "red"}}>
                  {error}
                </small>
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

              <form action="/users/create" method="post" className={style.content_form_cad}>
                <h1>Cadastro</h1>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="e-mail" 
                     onChange={(e)=>{setEmailCad(e.target.value)}}
                     value={emailCad}
                    />
                </div>
                <div className="input">
                    <TextField 
                     fullWidth 
                     label="password"
                     type="password" 
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