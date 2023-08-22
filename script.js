document.addEventListener('DOMContentLoaded', function () {//Evento que aguarda o DOM ser totalmente carregado para ser manipulado
  var btnEnviar = document.getElementById('enviar');
  btnEnviar.addEventListener('click', function(event) {//Faz a chamada da função quando o botão enviar é clicado
    validarEmail(event);
  }); 
  
  function validarEmail(event) {//Função que será executada quando o botão enviar for clicado
    event.preventDefault();//Impede que o formulário seja submetido

    var mensagem = document.querySelector('#msg');
    var email = document.getElementById('email').value;
    const exReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;//Expressão regular que valida o endereço de e-mail

    if (email === '') {
      mensagem.innerHTML = "<div class='alert alert-warning' role='alert'>Informe um endereço de e-mail.</div>";
    } else if (!email.match(exReg)) {//Verifica se o e-mail inserido corresponde ao padrão definido na expressão regular
      mensagem.innerHTML = "<div class='alert alert-danger' role='alert'>Informe um endereço de e-mail válido. Exemplo: nome@dominio.com</div>";
      document.getElementById('email').value = '';
    } else {
      mensagem.innerHTML = "<div class='alert alert-success' role='alert'><strong>" + email + "</strong> é um endereço de e-mail válido.</div>";
      document.getElementById('email').value = '';

      setTimeout(function() {//Cria um atraso de 5 segundos (5000 milissegundos) antes de submeter o formulário
        document.getElementById('formulario').submit();
      }, 5000);
    }
  }
});
//console.log(msg);
