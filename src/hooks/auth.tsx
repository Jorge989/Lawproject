import  React,{ createContext, useState,useContext, useCallback} from 'react';
import * as auth from '../services/auth'
import api from '../services/api';


interface AuthState{
    token: string;
    user: object;
}



interface SignInCredentials {
    email: string;
  senha: string;
}



interface AuthContextData{
   user: object;
   signIn(credentials: SignInCredentials): Promise<void>;
   signOut(): void;
}



export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) =>{
    const [data, setData] = useState<AuthState>(() =>{
        const token =   localStorage.getItem('@ActionLaw: token');
         const user =      localStorage.getItem('@ActionLaw: user');
      
         if (token && user && user !== 'undefined' ) {
            return  { token, user: JSON.parse(user) };
         }
         return {} as AuthState;
      }); 
      async function signIn({email, senha}: SignInCredentials) {
        const response = await  api.post('autenticar', {
            email,
            senha,
        });

        const {token, user} = response.data;
        localStorage.setItem('@ActionLaw: token', token);
        localStorage.setItem('@ActionLaw: user', JSON.stringify(user));
        setData({ token, user})
        console.log(response.data)
    };

const signOut = useCallback(() =>{
    localStorage.removeItem('@ActionLaw: token');
    localStorage.removeItem('@ActionLaw: user');
    setData ({} as AuthState);
}, []);
  
    return(
    <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
    {children}
    </AuthContext.Provider>
    );

    function useAuth(): AuthContextData{
        const context = useContext(AuthContext);

        if (!context){
            throw new Error('useAuth must be used within a AuthProvider')
        }
        return context;
    }  
};
 export function  useAuth(): AuthContextData{
    const context= useContext(AuthContext);

    if (!context){
        throw new Error('useAuth must be used whithin an AuthProvider')
    }
    return context;
}


