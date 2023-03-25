import React, { useContext } from 'react'
import Loader from '../components/Loader';
import { Context } from '../main';

const Profile = () => {

  const { isAuthenticated, loading, user } = useContext(Context);
  console.log(user);



  return ( loading ? <Loader/> :  <h1>{user.name}</h1> 
  )
}

export default Profile