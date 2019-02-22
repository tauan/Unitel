

function bg1() {
	document.getElementById('inicio').className = 'bg-1';
	document.getElementById('circle2').className = '';
	document.getElementById('circle3').className = '';
	document.getElementById('circle1').className = 'circle-active';
	document.getElementById('ganhatexto1').innerHTML = "No mes das muheres o presente é pra elas";
	document.getElementById('ganhatexto2').innerHTML = 'Recarregue R$ 200,00 ou mais e ganhe 20% de BONUS';
}
function alertar() {
	alert("funfando");
}
function bg2() {
	document.getElementById('inicio').className = 'bg-2';
	document.getElementById('circle1').className = '';
	document.getElementById('circle3').className = '';
	document.getElementById('circle2').className = 'circle-active';
	document.getElementById('ganhatexto1').innerHTML = 'Tenha internet onde quer que você vá';
	document.getElementById('ganhatexto2').innerHTML = 'A partir de R$30,00 ao mes você navega o quanto quiser';
}

function bg3() {
	document.getElementById('inicio').className = 'bg-3';
	document.getElementById('circle2').className = '';
	document.getElementById('circle1').className = '';
	document.getElementById('circle3').className = 'circle-active';
	document.getElementById('ganhatexto1').innerHTML = 'O mundo esta na malma da sua mão';
	document.getElementById('ganhatexto2').innerHTML = 'Aqui você se conecta nas redes e não paga mais po isso';
}


window.onload = carregaImg;
// <div id='strawberry-plant' data-fruit='12'></div>

// <script>
// // 'Getting' data-attributes using getAttribute
// var plant = document.getElementById('strawberry-plant');
// var fruitCount = plant.getAttribute('data-fruit'); // fruitCount = '12'

// // 'Setting' data-attributes using setAttribute
// plant.setAttribute('data-fruit','7'); // Pesky birds
// </script>