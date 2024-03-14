function minhaFuncao1(){
    $('.btn-danger').empty().append('Novo Nome').css({color: 'black', width: '200px'});
};

function minhaFuncao2(){
    $('#area-mensagem').empty();
    var alunos = ['Aluno 01', 'Aluno 02', 'Aluno 03'];

    $.each(alunos, function(index, value){
        $('#area-mensagem').append(value);
    });
};