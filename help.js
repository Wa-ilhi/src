import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Function to store user data in local storage
export const storeUser = (data) => {
  localStorage.setItem('user', JSON.stringify({   //convert data into string with the help of JSON.string 
    username: data.user.username,
    jwt: data.jwt,
  }));
};

//Function to retrieve user data from local storage
export const userData = () => {
  const stringifiedUser = localStorage.getItem('user') || ' "" ';
  return JSON.parse(stringifiedUser);     //retrieves user data
};

// Component to protect routes by requiring user authentication
// In this part, only authenticated user can access  the application
// Otherwise, it redirected to login page
export const Protect = ({ Component }) => {
  const navigate = useNavigate();
  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate('/login');
    }
  }, [navigate, jwt]);

  return <Component />;
};
