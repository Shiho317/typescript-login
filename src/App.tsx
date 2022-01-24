import { Wrapper } from './App.style';
import SignIn from './SignIn/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';

export type UserInfo = {
  name: string;
  email: string;
  password: string;
  consfirm: string;
}

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/login" element={<SignIn/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;
