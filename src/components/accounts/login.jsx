import {Box, TextField, Button, styled, Typography} from '@mui/material';
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

    .link {
    margin-top: 1rem;
    display: block;
    text-decoration: none;
    color: #3f51b5;
    &:hover {
      text-decoration: underline;
    }
  }
    
`
;

const login = () => {
    const imgUrl = 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png'
  return (
    <Component>
        <img src={imgUrl} alt='login' />
        <div className='text-field-container'>
       <TextField variant='standard' placeholder='email address'/>
        <TextField variant='standard' placeholder='password'/>
        </div>
            <Button variant='contained'>Login</Button>
            <Typography>OR</Typography>
            <Link to="/signup" className="link">Create an account</Link>
        
    </Component>
  )
}

export default login;
