// A $( document ).ready() block.
// $(document).ready(function() {
//     $("body").click(funtion(){

//     });
// });
// var red = Math.floor(Math.random()*256);
// var green = Math.floor(Math.random()*256);
// var blue = Math.floor(Math.random()*256);

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomColor = getRandomColor();
var bodyElement = document.getElementById("coloredBody");
document.getElementById("coloredBody").style.backgroundColor = "rgb(0,0,0)";
document.getElementById("colorValue").textContent = "Click or tap to get a random color";



document.getElementById("coloredBody").addEventListener('click', function(){

	if (randomColor === "#ffffff")
		{
			document.getElementById("coloreValue").style.color = "rgb(0,0,0)";
		}
	else
		{
			randomColor = getRandomColor();
			document.getElementById("coloredBody").style.backgroundColor = randomColor;
			document.getElementById("colorValue").textContent = randomColor;

		}
});