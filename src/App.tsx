import { Wrapper } from './App.style';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import React, { useState } from 'react';
import datas from './data.json';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export type UserInfo = {
    name: string;
    email: string;
    password: string;
    consfirm: string;
    completed: boolean;
}

const initialInfo: UserInfo = {
  name: '',
  email: '',
  password: '',
  consfirm: '',
  completed: false
}

console.log(datas[3])

function App() {

  const [isUser, setIsUser] = useState<UserInfo>(initialInfo);

  const onChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIsUser({...isUser, email: value});
  }

  const [isPassword, setIsPassword] = useState('');

  const FindUser = (user: UserInfo) => {
    const findEmail = datas.find(data => data.email === user.email)
    if(findEmail){
      datas.map(data => 
        data.email === user.email ? data : null )
    }
    console.log(findEmail)
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
          <TextField fullWidth id="outlined-basic" label="password" variant="outlined" />
        </div>
        <div className='submit-btn'>
          <Button fullWidth variant="contained" disableElevation onClick={() => FindUser(isUser)}>
            Log In
          </Button>
        </div>
      </div>
      </div>
    </Wrapper>
  );
}

export default App;
