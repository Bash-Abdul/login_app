import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the Login component
const Login = () => {
  // State variables to store email, password, and error message
  const [email, setEmail] = useState('');  // Stores the user's email input
  const [password, setPassword] = useState('');  // Stores the user's password input
  const [error, setError] = useState(null);  // Stores any error messages
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Resets the error state before attempting login

    try {
      // Send a POST request to the login API endpoint
      const response = await axios.post('https://dms-api.apps.ginnsltd.com/v1/login', {
        email,  // Include the email from the state
        password,  // Include the password from the state
      });

      // Handle successful login, typically by storing a token or redirecting the user
      console.log(response.data); 

      // Example: Store the authentication token in local storage
      localStorage.setItem('token', response.data.token);
      navigate('./successful_login');

    } catch (err) {
      // Handle errors, such as incorrect credentials
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          {/* Input field for email, updating the state on change */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          {/* Input field for password, updating the state on change */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        {/* Submit button to trigger form submission */}
        <button type="submit">Login</button>
      </form>
      {/* Display error message if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
