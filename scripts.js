let paginas = new Array();
let contador = 0;
let paginaAtual = 1;
let esconderModal = true;

$(document).ready(function() {

  //removendo divs inutilizaveis
  $( "conteudo1" ).remove();
  
  //ativando-desativando modal
  if(esconderModal){$('.modal').css("display","none")};

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
          $('html, body').animate({scrollTop: 0}, 100, 'linear');
        }
        break;
      case "0":
        paginaAtual = 1;
        var globalDiv = $('.conteudo1').html();
        $('.divGlobal').html(globalDiv);
        $('html, body').animate({scrollTop: 0}, 100, 'linear');
        break;
      case "1":
        paginaAtual = 1;
        var globalDiv = $('.conteudo1').html();
        $('.divGlobal').html(globalDiv);
        $('html, body').animate({scrollTop: 0}, 100, 'linear');
        break;
      case "2":
        paginaAtual = 2;
        var globalDiv = $('.conteudo2').html();
        $('.divGlobal').html(globalDiv);
        $('html, body').animate({scrollTop: 0}, 100, 'linear');
        break;
      case "100":
        if(paginaAtual < 10){
          console.log('pagina atual: ' +paginaAtual);
          paginaAtual = parseInt(paginaAtual);
          var proximaPagina = paginaAtual + 1;
          proximaPagina = proximaPagina.toString();
          paginaAtual = proximaPagina;
          console.log('proxima pagina: '+proximaPagina);
          var a = '.conteudo';
          var globalDiv = $(a.concat(proximaPagina)).html();
          $('.divGlobal').html(globalDiv);
          $('html, body').animate({scrollTop: 0}, 100, 'linear');
        }
    }
  });
});


function novoAcesso(){
	var modal = document.getElementById('loginModal');
}

function verificaCamposModal() {
	var checked = verifica_checked();
	var selected = verifica_selected();

	if (selected == false && checked == false) {
		alert("Por favor, selecione um aluno previamente cadastrado OU entre com os dados, caso o aluno não esteja na lista");
	} else {
		var modal = document.getElementById('loginModal');
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
		//salvaNomeAluno();
	}
}

function verifica_checked() {
	var checkBox_auditiva = document.getElementById("d_auditiva");
	var checkBox_visual = document.getElementById("d_visual");
	var checkBox_baixa_visao = document.getElementById("d_baixa_visao");
	var checkBox_intelectual = document.getElementById("d_intelectual");
	var checkBox_autismo = document.getElementById("d_autismo");

	var checked = false;

	if (checkBox_auditiva.checked || checkBox_visual.checked
			|| checkBox_baixa_visao.checked || checkBox_intelectual.checked
			|| checkBox_autismo.checked) {
		checked = true;
	}

	if (document.getElementById("form_matricula").value == "") {
		document.getElementById("form_matricula").focus();
		checked = false;
	} else if (document.getElementById("form_aplicador").value == "") {
		document.getElementById("form_aplicador").focus();
		checked = false;

	} else if (document.getElementById("form_escola").value == "") {
		document.getElementById("form_escola").focus();
		checked = false;
	}
	return checked
}

function verifica_selected() {
	var selected = false
	var label_escola = $("#lista-escola option:selected").val();
	var label_aluno = $("#lista-aluno option:selected").val();

	if (label_escola != "ESCOLA" && label_escola != "ALUNO") {
		selected = true;
	}
	return selected
}

/* MODAL */
window.onload = function() {
	var preModal = document.getElementById('preModal');
	//var videoModal = document.getElementById('video-modal');
	//var modalDeErro = document.getElementById('erroModal');
	var closeBtn = document.getElementsByClassName('button_matricula')[0];
	var closeBtnModal = document.getElementsByClassName('close_modal')[0];
	var closeErro = document.getElementsByClassName('close_erroModal')[0];
	var tituloUp = document.getElementById('tituloNovo');
	var tituloIn = document.getElementById('tituloExist');
	var listasIn = document.getElementById('existenteL');
	var listasUp = document.getElementById('novo-aluno');

/*
	closeBtnModal.addEventListener('click', function() {
		videoModal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}); 

	closeErro.addEventListener('click', function() {
		modalDeErro.style.display = 'none';
		document.body.style.overflow = 'auto';
	}); */

	tituloUp.addEventListener('click', function() {
		// alert('clicou');
		listasIn.style.display = 'none';
		listasUp.style.display = 'block';
	});

	tituloIn.addEventListener('click', function() {
		// alert('clicou');
		listasIn.style.display = 'block';
		listasUp.style.display = 'none';
	});

}