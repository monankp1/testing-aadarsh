// // src/contexts/AuthContext.js

// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => setIsLoggedIn(true);
//   const logout = () => setIsLoggedIn(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// src/contexts/AuthContext.js

// src/contexts/AuthContext.js

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (id, role, gender, name, phone_number, emergency_number, xetra, mandal, bus_detail, bus_leader_1, bus_leader_1_no, bus_leader_2, bus_leader_2_no, nasik_utara, pune_utara, tithal_utara, view_mandal_attendance, edit_mandal_attendance, bus_leader) => {
    const userInfo = { id, role, gender, name, phone_number, emergency_number, xetra, mandal, bus_detail, bus_leader_1, bus_leader_1_no, bus_leader_2, bus_leader_2_no, nasik_utara, pune_utara, tithal_utara, view_mandal_attendance, edit_mandal_attendance, bus_leader };
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
