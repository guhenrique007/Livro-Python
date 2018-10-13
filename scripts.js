let paginas = new Array();


$(document).ready(function() {
  paginas.push('1');
  console.log(paginas);
  paginas.forEach(function(item) {
    $('div#paginacao-botoes').append(
        '<button type="button" class="btn btn-primary">' + item + '</button>');
  });
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary">' + 'Próximo' + '</button>');
  $('div#paginacao-botoes').append('<button type="button" class="btn btn-primary">' + 'Último' + '</button>');
});

$(document).ready(function() {

  $('#paginacao-botoes .btn').on('click', function() {
    alert($(this).val());
    numPag = $(this).val();
    switch (numPag) {
      case "0":
        $("p").append(document.createTextNode(numPag));
        break;
      case "1":
        $("p").append(document.createTextNode(numPag));
        break;
    }
  });
});
