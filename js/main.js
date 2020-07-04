//FUNÇÃO SELETOR DE VALORES
function funcaoChange(elemento){
    console.log(elemento.value)
}

//FUNÇÃO DE ALERTA AO CARREGAR O BODY
function load(){
    alert("página carregada!")
}


//FUNÇÃO PARA MOSTAR ALGO AO PASSAR O MOUSE E OUTRA DEFINIR O ESTADO SEGUINTE
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";  
}


function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar por aqui...";
}



//Função CLIQUE E AGRADECIMENTO
function clicou(){
   document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>")};


//FUNÇÃO ABRIR JANELA EM OUTRA PÁGINA OU NA MESMA    
function redirecionar(){
  window.open("https://digitalinnovation.one/");  
 window.location.href = "https://digitalinnovation.one/";



//LINKAR AÇÃO BOTÃO DO INDEX.HTML A FUNÇÃO DE ALERTA JS
//function clicou(){
//    alert("Obrigado por clicar!")
//}


/*
FUNÇÃO VALIDAR IDADE

function validaIdade(idade){
        var validar;
        if (idade >= 18){
            validar = true
        }
        else {
            validar = false
        }
        return validar;
    }

    var idade = prompt("Qual a sua idade?");
    console.log(validaIdade(idade));
*/

/*
FUNÇÃO SOMA

function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
FUNÇÃO DE SUBSTITUIÇÃO

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


//EXIBIR MÊS
//var d = new Date();
//alert(d.getMonth () - 2);

/*
LOOP FOR
var count;
for(count=0; count <= 5; count ++){
    alert(count)
}
*/

/*
LOOP WHILE
var count = 0;
while (count <= 5){
    console.log(count);
 //   count = count + 1;
    count ++;
}
*/

/*
CHECAR IDADE E PROMPT - IF / ELSE

var idade = prompt("Qual a sua idade?")

if (idade >= 18) {
    alert("Maior de idade");}
else {
    alert("Menor de idade");}
*/



//MATRIZ ARRAY
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; 
//console.log(frutas)

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta)
//alert(fruta.cor)

//MATRIZ COM PUSH E POP
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.toString());
//console.log(lista.join(" - "))
//alert(lista[1]);

/*
TESTE DE CONSOLE.LOG E CONCATENAÇÃO

var nome = "Marcelo Daniliauskas";
var idade = 40;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!";
*/

//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

//CONSOLE.LOG E SUBSTITUIÇÃO
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase())
