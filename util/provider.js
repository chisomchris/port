import React, { createContext, useContext, useState } from "react";
import { users } from "./db.user";

const sessionContext = createContext();
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({ isSession: false, user: null });

  const signIn = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return {
        error: "user doesn't exist",
      };
    }

    setSession({
      isSession: true,
      user,
    });
  };

  const signOut = () => {
    setSession({ isSession: false, user: null });
  };
  const signUp = ( data ) => {
    // setSession({ isSession: false, user: null });
    console.log(data)
  };

  return (
    <sessionContext.Provider value={{ session, setSession, signIn, signOut ,signUp}}>
      {children}
    </sessionContext.Provider>
  );
};

export const useProvider = () => {
  return useContext(sessionContext);
};
