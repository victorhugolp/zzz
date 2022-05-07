

function Clicar(){
    console.log("");
    let recebe = document.querySelector('[name = "pesquisa"]').nodeValue;
    console.log(recebe);
    document.querySelector('#pokemonButton');
}

function buscaApi() {
    let recebe = document.querySelector('[name = "pesquisa"]').value;
    var http = new XMLHttpRequest();
    http.open("get", `https://pokeapi.co/api/v2/pokemon/${recebe}`, true);
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            result = JSON.parse(http.responseText);
            console.log(result);
            document.querySelector(".pokename").value = result.name;
        }
    }
    http.send();
}

function check() {
    form = document.getElementById("login")
    let login = document.querySelector('#email').value;
    let password = document.querySelector('#senha').value;
    let button = document.querySelector('#login-btn');
    
    if(login.length > 3 && password.length > 3) {
        button.classList.add("btn-active")
        button.disabled = false
        campo.classList.add('active');
    } else {
        button.classList.remove("btn-active")
        button.disabled = true
    }
}

 

 
        document.querySelector('#login-btn').addEventListener('click', async () => {
            let token = localStorage.getItem('token');

            try {
                form = document.getElementById("login")

                let username = form.children[0].value;
                let pass = form.children[1].value;

                let response = await axios.post('https://reqres.in/api/login', {
                    email: username,
                    password: pass
                });

                if (json.data.token) {
                    token = json.data.token;
                    localStorage.setItem('token', token);
                    localStorage.setItem('active', json.status);
                }
            }
            catch (e) {

            }
         });
  