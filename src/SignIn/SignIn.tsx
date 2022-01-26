import { Wrapper } from './SignIn.style';
import Home from '../Home/Home';
import React, { useState } from 'react';
import datas from '../data.json';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';



export type UserInfo = {
    name: string;
    email: string;
    password: string;
    confirm: string;
    completed: boolean;
}

const initialInfo: UserInfo = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  completed: false
}

console.log(datas[3])

function SignIn() {

  const [isUser, setIsUser] = useState<UserInfo>(initialInfo);

  const onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsUser({...isUser, email: value});
  }

  const [isPassword, setIsPassword] = useState<UserInfo>(initialInfo);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsPassword({...isPassword, password: value})

    if(isPassword){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }

  const FindUser = (user: UserInfo) => {
    const findEmail = datas.find(data => data.email === user.email)
    if(findEmail && findEmail.password === isPassword.password){
      findEmail.completed = true;
      user.name = findEmail.name;
      user.confirm = findEmail.confirm;
      user.password = findEmail.password;
      user.completed = findEmail.completed;
    }else{
      setIsDisabled(true);
      alert('Your email or password is not correct')
    }
    console.log(findEmail)
    console.log(user)
  };

  const [isLogin, setIsLogIn] = useState(false);


  const IsLogIn = () => {

  }

  return (
    <Wrapper>
      <div className='login'>
      <h3>Log In</h3>
      <div className='contents-wrap'>
        <div className='email-input'>
          <TextField fullWidth id="outlined-basic" label="email" variant="outlined" value={isUser.email} onChange={onChangeUser} />
        </div>
        <div className='password-input'>
          <TextField fullWidth id="outlined-basic" label="password" variant="outlined" value={isPassword.password} onChange={onChangePassword}/>
        </div>
        <div className='submit-btn'>
          {isUser.completed ? (
            <Link to='/home'>
              <Button fullWidth variant="contained" disableElevation disabled={isDisabled} onClick={() => FindUser(isUser)}>
              Log In
              </Button>
            </Link>
          ) : (
            <Button fullWidth variant="contained" disableElevation disabled={isDisabled} onClick={() => FindUser(isUser)}>
              Log In
              </Button>
          )}
          
        </div>
      </div>
      </div>
    </Wrapper>
  );
}

export default SignIn;
