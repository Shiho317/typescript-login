import { Wrapper } from './SignIn.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserInfo } from '../App';

type Props = {
  isEmail: UserInfo;
  Completed: (user: UserInfo) => void;
}

const SignIn: React.FC<Props> = ({isEmail, Completed}) => {

  return(
    <Wrapper>
      <h3>Log In</h3>
      <div className='contents-wrap'>
        <div className='email-input'>
          <TextField fullWidth id="outlined-basic" label="email" variant="outlined" value={isEmail} />
        </div>
        <div className='password-input'>
          <TextField fullWidth id="outlined-basic" label="password" variant="outlined" value={isPassword} />
        </div>
        <div className='submit-btn'>
          <Button fullWidth variant="contained" disableElevation>
            Log In
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default SignIn