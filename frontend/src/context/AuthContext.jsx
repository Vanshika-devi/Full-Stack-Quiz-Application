/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useState
} from "react";

import {

  loginUser,

  registerUser

}
from "../services/authService";

export const AuthContext =
  createContext();

function AuthProvider({
  children
}) {

  const [user, setUser] =
    useState(

      JSON.parse(
        localStorage.getItem(
          "user"
        )
      ) || null

    );

  /* LOGIN */
  const login =
  async (userData)=>{

    try{

      const data =
        await loginUser(
          userData
        );

      localStorage.setItem(

        "user",

        JSON.stringify(data)

      );

      setUser(data);

      return {
        success:true
      };

    }catch(error){

      return {

        success:false,

        message:
        error.response?.data
        ?.message

      };

    }

  };

  /* REGISTER */
  const register =
  async (userData)=>{

    try{

      const data =
        await registerUser(
          userData
        );

      localStorage.setItem(

        "user",

        JSON.stringify(data)

      );

      setUser(data);

      return {
        success:true
      };

    }catch(error){

      return {

        success:false,

        message:
        error.response?.data
        ?.message

      };

    }

  };

  /* LOGOUT */
  const logout = ()=>{

    localStorage.removeItem(
      "user"
    );

    setUser(null);

    window.location.href =
      "/";

  };

  return (

    <AuthContext.Provider
      value={{

        user,

        login,

        register,

        logout

      }}
    >

      {children}

    </AuthContext.Provider>

  );
}

export default AuthProvider;