let paginas = new Array();
let contador = 1;


$(document).ready(function() {
  paginas.push('1');
  console.log(paginas);
  paginas.forEach(function(item) {
    contador++;
    $('div#paginacao-botoes').append(
        //'<button type="button" class="btn btn-primary">' + item + '</button>');
        '<button type="button" class="btn btn-primary" value=" ' + contador +' " >' + item + '</button>');
        //o value dele n ta dando append no paragrafo
  });
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary">' + 'Próximo' + '</button>');
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary">' + 'Último' + '</button>');
});

$(document).ready(function() {

  $('#paginacao-botoes .btn').on('click', function() {
    alert($(this).val());
    numPag = $(this).val();
    switch (numPag) {
      case "-1":
        $("p").append(document.createTextNode(numPag));
        break;
      case "0":
        $("p").append(document.createTextNode(numPag));
        break;
      case "1":
        $("p").append(document.createTextNode(numPag));
        break;
      case "2":
        $("p").append(document.createTextNode(numPag));
        break;
    }
  });
});
