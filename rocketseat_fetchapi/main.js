const url = "http://localhost:5500/api" //api local: https://github.com/jakeliny/node-api-discover
// ======================================================================
// GET
function getUsers(){ //função para pegar os usuarios
    fetch(url) // bate na url
    .then( response => (response.json())) // recebe uma resposta da url e  devolve em formato json.
    .then(data => renderApiResult.textContent = //retornba em json os datas do objeto da api e mostra no body.
        JSON.stringify((data)))
    
    .catch(error => console.error(error)) //se p fetch nao funcionar ele cai no catch mostrando o erro.
}
// ======================================
// GET com parametros
function getUser(id){
    fetch(`${url}/${id}`) //pega somente o usuario id 1
    .then(response => response.json()) //recebe a resposta do fetch e devolve em json.
    .then(data =>{
        userName.textContent = data.name // preenche a tag p no html com a dom textContent com o resultado de data.name da api.
        userCity.textContent = data.city // preenche a tag p no html com a dom textContent com o resultado da api.
        userAvatar.src = data.avatar // preenche a tag <img src> com o dom ".src" de acordo com o que ta na api.
    })
    .catch(error=> console.error(error)) //caso tenha um erro no then ele mostra no console.
}
// ======================================
// POST
function addUser(newUser){ //função de adduser recebendo o newUser
    fetch(url, {
        method: "POST", //especificando o metodo post
        body: JSON.stringify(newUser), //transforma em json //o fetch vai pegar oq tem dentro do body e enviar para dentro da url
        headers: { //requisição da api
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then( response => response.json())// retorno do fetch transformado em json
        .then(data => alertApi.textContent = data) //adiciona os dados de data na div alertApi.
        .catch(error => console.error(error)) //caso tenha um erro no then ele mostra no console.
}

const newUser = { // novos atributos que serão passados para a api.
    name: "Aryel Ramos", //name do user
    avatar: "https://picsum.photos/200/300", // avatar do user
    city: "Fortaleza" //city do user
}
// ==================================================================
//  PUT
function updateUser(updatedUser, id){
fetch(`${url}/${id}`, { //chaves pq o fetch espera o 2 argumento sendo um objeto. ler a documentacao cajo haja duvidas
    method: "PUT", //especificando put como requisição da url.
    body: JSON.stringify(updatedUser), // no body vai o conteudo que a gente ta mandando pra api. como updatedUser é um objeto, transforma-se para um texto simples em json.
    headers: { //informado para o https, que ta fazendo a transferencia de dados do front para a api que está sendo passado um json e um charset.
        "Content-type": "application/json;charset=UTF-8"
    }
}) //passando um id para a url.
    .then(response => response.json()) //transforma a resposta em json
    .then(data => alertApi.textContent = data)//pega os dados da resposta sucessida e armazena na variavel data. tranforma em texto com a dom e da data como resposta.
    .catch(error => console.error(error)) //caso tenha um erro no then ele mostra no console.
}
//valores quer irao atualizar
const updatedUser = {
    name: "Maria Eduarda",
    avatar: "https://picsum.photos/200/300",
    city: "Fortaleza"
}
// ==================================================================
// DELETE
function deleteUser(id){
    fetch(`${url}/${id}`,{ //passando um método para a url
        method: "DELETE",
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
    }) //url com template id
    .then(response => response.json())
    .then(data => alertApi.textContent = data)// passa os dados da requisição para a tag no html.
    .catch(error => console.error(error))
}


addUser(newUser) //pega o conteudo de newUser() e manda para dentro da função addUser() // adicionar usuarios
updateUser(updatedUser, 1)//roda a funcao funcao com id // atualizar usuarios
getUsers() //roda a função //pegar usuarios
getUser() //roda a função com o id //pega usuario
deleteUser(33) // roda a função com o id // apaga o usuario atraves do id