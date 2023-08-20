import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type authProviderProps = {
  children: React.ReactNode;
};

// interface IAuthContext {
//   setAuth: Dispatch<SetStateAction<boolean>>;
// }
const authContext = createContext<boolean>(false);
const authDispatchContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);

const AuthProvider: React.FC<authProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return (
    <authContext.Provider value={auth}>
      <authDispatchContext.Provider value={setAuth}>
        {children}
      </authDispatchContext.Provider>
    </authContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): boolean => {
  const Auth = useContext(authContext);
  if (Auth === null) {
    throw new Error("useAuth must be used within a cartProvider");
  }
  return Auth;
};
export const useDispatchAuth = (): Dispatch<SetStateAction<boolean>> => {
  const setAuth = useContext(authDispatchContext);
  if (setAuth === null) {
    throw new Error("useDispatchAuth must be used within a cartProvider");
  }
  return setAuth;
};
