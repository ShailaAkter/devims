import axios from "axios";
import { useEffect, useState } from "react"
import AdminLayout from "../layouts/AdminLayout";
import Spinner from "../components/loaders/Spinner";

const AdminRoute = () => 
{
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useState();
   
  useEffect(() =>
  {
      const authCheck = async() =>
      {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/auth/admin-auth`);
          if(res.data.ok)
          {
            setOk(true);
          }
          else
          {
            setOk(false);
          }
      }
      if(auth?.token)
      {
        authCheck();
      }
  }, [auth?.token])

  return ok ? <AdminLayout/> : <Spinner path=""/>
}

export default AdminRoute