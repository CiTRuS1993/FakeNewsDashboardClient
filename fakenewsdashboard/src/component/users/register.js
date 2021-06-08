
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from "../../utils/userContext.js";

export default function Register() {
    const [isAuthenticated,userHasAuthenticated]  = useUserContext();

    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    const submit = () => {

        axios.get('/api/token', {
            auth:{
            username: username,
            password: password
            }
        })
            .then(res => {
                userHasAuthenticated({auth:true,username:username,token:res.data.token});
                localStorage.setItem('token', res.data.token)
                console.log(res)
            }).catch(err=>console.log(err))
    }
    if(isAuthenticated.auth){
        return <Redirect to="/" />
    }
    return (
        <div className="Login   ">
            <TextField
             required id="standard-required-input"
              label="Username" 
              defaultValue="" 
              onChange={(e) => setusername(e.target.value)} />
            <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
             required id="standard-required-input"
              label="E-mail" 
              defaultValue="" 
              onChange={(e) => setMail(e.target.value)} />
            <Button variant="contained" color="primary" onClick={submit}>
                submit
            </Button>
        </div>
    )

}