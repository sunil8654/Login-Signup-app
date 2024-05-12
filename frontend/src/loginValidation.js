function Validation (values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern =  /^.{6,}$/;

    // Email validation
    if (values.email === "") {
      error.email = 'Email is required';
      
    } else if (!email_pattern.test(values.email)) {
      error.email = 'Invalid email address';
    }else{
      error.email = "";
    }
  
    // Password validation
    if (values.password === "") {
      error.password = 'password is required';
    } else if (!password_pattern.test(values.password)) {
      error.password = 'Invalid password address';
    }else{
      error.password = "";
    }
  
    return error;
   
  };
  
  export default Validation;
  