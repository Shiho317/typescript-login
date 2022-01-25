import { Wrapper } from './App.style';
import SignIn from './SignIn/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import React, { useState } from 'react';
import datas from './data.json';

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
  };

  const [isLogin, setIsLogIn] = useState(false);


  const IsLogIn = () => {

  }

  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn Completed={FindUser}/>}/>
          
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
