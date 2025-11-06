document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.querySelector('.form-container - container');
    const statusMensagem = document.querySelector('Mensagem-status');


    if(formulario && statusMensagem){
        formulario.addEventListener('submit', (event)=> {
            event.preventDefault;
            const nome = formulario.querySelector('#nome').value.trim();
            const email = formulario.querySelector('#email').value.trim();
            const mensagem = formulario.querySelector('#mensagem').value.trim();
        } )
    }

    if(nome =='' || email == '' || mensagem == ''){
        statusMensagem.innerHTML = '<p class=erro>Por favor, preencha todos os campos. </p>';
        statusMensagem.className = 'status-erro';
        return ;

    }else{
        statusMensagem.innerHTML = '<p class="sucesso">Mensagem enviada como sucesso.</p>';
        statusMensagem.classname  = 'status-sucesso';
        formulario.reset();
        return;
    }


})