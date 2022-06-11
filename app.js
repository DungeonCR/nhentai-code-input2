let input = document.querySelector('input');

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        window.open('https://nhentai.net/g/' + e.target.value, '_blank');
    }
})



var websites = new Array(
	"http://www.hurriyet.com",
	"http://www.milliyet.com",
	"http://www.amazon.com"
);
var counter = 0;
var sTimeOut = setInterval(function () {
    var index = counter%(websites.length);
    
    $("#website_div").html($('<iframe src="' + websites[index] + '" width="500" height="500" border="0"/>' ));
    counter++;	
}, 5000);
