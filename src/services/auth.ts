interface Response {
    token: string;
    user:{
        nome: string;
        email: string;
        senha: string;
        perfil: string;
    }
}


export default function signIn(): Promise<Response>{
    return new Promise((resolve) =>{
        setTimeout(()=> {

        
        resolve({
            token:'ushuashuashuauashashaush',
            user:{
            email: '',
            nome: '',
            senha: '',
            perfil: '',

        },
    });
    }, 2000);
});
}


