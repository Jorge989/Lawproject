// const email = document.getElementById('email'); //Pego um elemento que tenha o ID email
// const senha = document.getElementById('senha'); // Pego um elemento que tenha um id senha
// const form = document.getElementById('form'); // Pego um elemento que tenha um id form
// const errorElement = document.getElementById('error'); // Pego um elemento que tenha um id error
// form.addEventListener('submit', (e) => {
//   // estou adicionando no elemento form, para ele escutar o evento submit. Ou seja, antes de dar o submit, execute essa funcao abaixo

//   e.preventDefault(); //Aqui eu estoiu prevenindo que o form tenha o comportamento padrao do submit que é fazer reload da pagina
//   let messages = [];
//   if (email.value) { //verificando se tem algo no campo email
//     messages.push('Email é requerido');
//   }
//   if ( email.indexOf(".")!=email.value){
//     messages.push('Email é requerido ter ao menos um .');
//   }
//   if ( email.indexOf("@")!=email.lenght){
//     messages.push('Email é requerido ter ao menos @');
//   }

//   if (senha.value.lenght <= 6) { // verificando se a senha é maior que 6
//     messages.push('Senha precisa ser maior que 6');
//   }
//   if ((email.length >=1) &&
//   (email.length >=3) &&
//   (email.search("@")==-1) &&
//   (email.search("@")==-1) &&
//   (email.search(" ")==-1) &&
//   (email.search(" ")==-1) &&
//   (email.search(".")!=-1) &&
//   (email.indexOf(".") >=1)&&
//   (email.lastIndexOf(".") < email.length - 1)) {
// document.getElementById("msgemail").innerHTML="E-mail válido";
// alert("E-mail valido");
// }

//   errorElement.innerText = messages.join(','); //Jogando tudo que tem no array para a div error
// });