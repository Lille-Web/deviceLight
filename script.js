(function() {

	var tmp = new Array();
	var i = 0;
	var smooth = 10;
	window.addEventListener('devicelight', function(e) {
	  var lux = Math.round(e.value);
	  tmp.push({'index' : i++, 'lux' : lux});
	  if( i == smooth){
	  	var avLux = 0;
		for(var key in tmp){
		  avLux += tmp[key].lux;
		}
		avLux = avLux / smooth;
		document.querySelector('#result').textContent = avLux + ' lux';
		if(avLux > 1){
			document.querySelector('body').style.backgroundColor = 'white';
			document.querySelector('body').style.color = "black"
		}
		else{
			document.querySelector('body').style.backgroundColor = 'black';
			document.querySelector('body').style.color = "white"
		}
		tmp = new Array();
		i = 0;
	  }
	});
})();
