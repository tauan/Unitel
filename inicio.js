window.onload = tiraLink;

function tira() {
	alert('ola');
}
function carregaImg(){
	imgs = Array('../imagens/1.jpg', '../imagens/2.jpg','../imagens/3.jpg','../imagens/4.jpg',);
	qtdimg = imgs.length;
	for(i=0;i<qtdimg;i++){
		var precarrega = new Image();
		precarrega.src=imgs[i];
	}
}