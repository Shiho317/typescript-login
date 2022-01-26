import { Wrapper } from './App.style';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import SignIn from './SignIn/SignIn';

function App(){
  return(
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App