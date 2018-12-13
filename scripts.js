let paginas = new Array();
let contador = 0;
let paginaAtual = 1;

$(document).ready(function() {

  //removendo divs inutilizaveis
  $( "conteudo1" ).remove();


  var globalDiv = $('.conteudo1').html();
  $('.divGlobal').html(globalDiv);
  paginas.push('1');
  paginas.push('2','3','4','5','6','7','8','9','10'); //refatorar isso aqui
  console.log(paginas);
  paginas.forEach(function(item) {
    contador++;
    $('div#paginacao-botoes').append(
        //'<button type="button" class="btn btn-primary">' + item + '</button>');
        '<button type="button" class="btn btn-primary" value="'+contador+'" >' + item + '</button>');
        //o value dele n ta dando append no paragrafo
  });
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary" value="100" > ' + 'Próximo' + '</button>');
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary">' + 'Último' + '</button>');
});

$(document).ready(function() {

  $('#paginacao-botoes .btn').on('click', function() {
  //alert($(this).val());
    numPag = $(this).val();
    switch (numPag) {
      case "-1":
        if(paginaAtual > 1){
          var paginaAnterior = paginaAtual - 1;
          paginaAnterior = paginaAnterior.toString();
          paginaAtual = paginaAnterior;
          console.log('pagina anterior: '+paginaAnterior);
          var a = '.conteudo';
          var globalDiv = $(a.concat(paginaAnterior)).html();
          $('.divGlobal').html(globalDiv);
        }
        break;
      case "0":
        paginaAtual = 1;
        var globalDiv = $('.conteudo1').html();
        $('.divGlobal').html(globalDiv);
        break;
      case "1":
        paginaAtual = 1;
        var globalDiv = $('.conteudo1').html();
        $('.divGlobal').html(globalDiv);
        break;
      case "2":
        paginaAtual = 2;
        var globalDiv = $('.conteudo2').html();
        $('.divGlobal').html(globalDiv);
        break;
      case "100":
        if(paginaAtual < 10){
          var proximaPagina = paginaAtual + 1;
          proximaPagina = proximaPagina.toString();
          paginaAtual = proximaPagina;
          console.log('proxima pagina: '+proximaPagina);
          var a = '.conteudo';
          var globalDiv = $(a.concat(proximaPagina)).html();
          $('.divGlobal').html(globalDiv);
        }
    }
  });
});
