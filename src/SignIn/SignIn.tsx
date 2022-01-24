import { Wrapper } from './SignIn.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserInfo } from '../App';

type Props = {
  user: UserInfo;
}

const SignIn: React.FC<Props> = ({user}) => {

  return(
    <Wrapper>
      <h3>Log In</h3>
      <div className='contents-wrap'>
        <div className='email-input'>
          <TextField fullWidth id="outlined-basic" label="email" variant="outlined" />
        </div>
        <div className='password-input'>
          <TextField fullWidth id="outlined-basic" label="password" variant="outlined" />
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