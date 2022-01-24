import { Wrapper } from './App.style';
import SignIn from './SignIn/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import { useState } from 'react';
import datas from './data.json';

export type UserInfo = {
    name: string;
    email: string;
    password: string;
    consfirm: string;
    completed: boolean;
}

function App() {

  const [isEmail, setIsEmail] = useState('')
  const [isPassword, setIsPassword] = useState('');

  const Completed = (user: UserInfo) => {
    const findUser = datas.filter(data => data.email === user.email)
    console.log(findUser)
  }

  const [isLogin, setIsLogIn] = useState(false);


  const IsLogIn = () => {

  }

  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp isEmail={isEmail} Completed={Completed}/>}/>
          <Route path="/login" element={<SignIn />}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
