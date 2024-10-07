import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthenticatedRoute = ({children}) => 
{
  const [auth, setAuth] = useState();
  const [loggedIn, setLoggedIn] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>
  {
    if (auth?.user) 
    {
      setLoggedIn(true);
    } 
    else 
    {
      setLoggedIn(false)
    }
  }, [auth, navigate]);

  return  loggedIn? 'home' : children
}

export default AuthenticatedRoute