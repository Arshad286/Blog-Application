import {Box, TextField, Button, styled, Typography} from '@mui/material';
import { useState } from 'react';
import { signupInitialValues } from '../../utils/intials';
import { Link } from 'react-router-dom';


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: #fff;
  text-align: center;

  img {
    width: 300px;
    margin-bottom: 1rem;
  }

  .MuiTextField-root {
    margin-bottom: 1rem;
  }

  .MuiButton-root {
    margin: 0.5rem 0;
    width: 100%;
  }

  .MuiButton-contained {
    background-color: #3f51b5;
    color: white;
    &:hover {
      background-color: #303f9f;
    }
  }

  .MuiButton-outlined {
    border-color: #3f51b5;
    color: #3f51b5;
    &:hover {
      border-color: #303f9f;
      color: #303f9f;
    }
  }

   .text-field-container {
    display: flex;
    flex-direction: column;
    & > div > button {
      marigin-top:20px,
    }
  }`
;

const SignUp = () => {
    const imgUrl = 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png'

    const [signup, setSignup] = useState<SignupValues>(signupInitialValues);

    const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signUpUser = () => {

    }
  return (
    <Component>
        <img src={imgUrl} alt='login' />
        <div className='text-field-container'>
       <TextField   onChange={(e) => onInputChange(e)} variant='standard'  placeholder='First name'/>
       <TextField  onChange={(e ) => onInputChange(e)}   variant='standard' placeholder='Last name'/>
       <TextField  onChange={(e ) => onInputChange(e)}   variant='standard' placeholder='enter email address'/>
        <TextField  onChange={(e) => onInputChange(e)} variant='standard' placeholder='password'/>
        </div>
            <Button 
            onClick={() => signUpUser()}
            variant='contained'>SignUp</Button>
            <Typography>OR</Typography>
            <Link to="/" className="link">Already an account</Link>
        
    </Component>
  )
}

export default SignUp;
