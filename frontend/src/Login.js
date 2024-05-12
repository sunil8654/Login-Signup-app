import React,{ useState } from 'react'  // rfce
import { Link } from 'react-router-dom';
import Validation from './loginValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const[errors, setErrors] = useState({})

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if( errors.email === "" && errors.password === "" ){
      axios.post('http://localhost:8081/login', values)
      .then(res => {
         if(res.data === "Success"){
          navigate('/home');
         } else{
          alert("No record existed");
         }
      })      
      .catch(err => console.log(err));
    }
  }

  return (
    <div className='d-flex justify-content-center align-item-center bg-primary vh-100 '>
      <div className='bg-white p-3 rounded w-25' style ={{height: "fit-content" , marginTop: "80px"}}>
        
        <h2>Sign-in</h2>
        <form action='' onSubmit ={handleSubmit}>
          
<div className='mb-3'>
  <label htmlFor='Email'><strong>Email</strong></label>
  <input type='email' placeholder='Enter Email' name='email'
   onChange ={handleInput} className='form-control rounded-0 '/>
{errors.email && <span className='text-danger'>{errors.email}</span>}
</div>

<div className='mb-3'>
  <label htmlFor='password'><strong>Password</strong></label>
  <input type='password' placeholder='Enter Password' name='password' onChange ={handleInput} 
  className='form-control rounded-0' autoComplete='current-password ' />
  {errors.password && <span className='text-danger'>{errors.password}</span>}
</div>

<button type='submit' className='btn btn-success w-100 rounded-0 '>login</button>
<p>you are agree to our term & condition</p>
<Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login ;
