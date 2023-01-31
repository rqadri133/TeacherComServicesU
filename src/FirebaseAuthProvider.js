import {React , useState } from "react";
import firebase from "firebase/app";
import AuthContext from './AuthContext';

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user };

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, [setUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { FirebaseAuthProvider };