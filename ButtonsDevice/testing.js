
var request = require('request');

var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();
var address= '50-DC-E7-DF-20-0B';


btSerial.findSerialPortChannel(address, function(channel) {
	btSerial.connect(address, channel, function() {
		console.log('> button one is connected using ' + address);
		btSerial.on('data', function(buffer) {
			

			var isPressed = buffer[buffer.length-2] == 0xc3;

			if(isPressed){
			 console.log(' >> button is ' + 'pressed');

					request.post(
			    'http://localhost:4000/graphql',
			    { json: {query: '{hello}'} },
			    function (error, response, body) {


  console.log('body:', body); 


			    }
			);

			}else{
			 console.log(' >> button 1 is ' + 'released');
			}

		});

	}, function () {
		console.log('> cannot connect');
	});

}, function() {
	console.log('found nothing');
});


process.on('SIGINT', function() {
	console.log("> closing bluetooth connection.");
	btSerial.close();
	process.exit();
});


