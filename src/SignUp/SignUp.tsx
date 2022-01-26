import { Wrapper } from './SignUp.style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SignUp: React.FC = () => {
  return(
    <Wrapper>
      <h3>Sign Up</h3>
      <div className='contents-wrap'>
        <div className='name-input'>
          <TextField fullWidth id="outlined-basic" label="name" variant="outlined" />
        </div>
        <div className='email-input'>
          <TextField fullWidth id="outlined-basic" label="email" variant="outlined" />
        </div>
        <div className='password-input'>
          <TextField fullWidth id="outlined-basic" label="password" variant="outlined" />
        </div>
        <div className='confirm-input'>
          <TextField fullWidth id="outlined-basic" label="confirm" variant="outlined" />
        </div>
        <div className='submit-btn'>
          <Button fullWidth variant="contained" disableElevation>
            Submit
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default SignUp