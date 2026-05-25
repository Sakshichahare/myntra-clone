

import {
  createContext,
  useContext,
  useState,
} from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [user, setUser] = useState(
     JSON.parse(
      localStorage.getItem("user")
    ) || null

  );

  function login(userData) {

    
    console.log(userData);

    //save token
    localStorage.setItem(
      "token",
      userData.accessToken
    );

    //save user
    localStorage.setItem(
     "user",
     JSON.stringify(userData)
    );

    setToken(userData.accessToken);

    setUser(userData);
  }

  function logout() {


    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken("");

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () =>
  useContext(AuthContext);