
var request = require('request');

var address= '4C-EF-C0-EE-96-FB';
var address2 = '00-71-47-76-66-0C';
var address3= '50-DC-E7-DF-20-0B';
var address4 = '50-DC-E7-4D-F1-E6';
var creatDeviceQuery={json: {query: '{contexts{name}}'}}
var serverAddress='http://localhost:4000'




///////////////////////////////////////////
//Button 1

var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();
btSerial.findSerialPortChannel(address, function(channel) {
	btSerial.connect(address, channel, function() {
		console.log('> button 1 is connected using ' + address);
		btSerial.on('data', function(buffer) {
			

			var isPressed = buffer[buffer.length-2] == 0xc6;

			if(isPressed){
			 console.log(' >> button 1 is ' + 'pressed');

					request.post(serverAddress, creatDeviceQuery, function (error, response, body) {console.log('body:', body); }
			);

			}else{
			 console.log(' >> button 1 is ' + 'released');
			}});

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



///////////////////////////////////////////
//Button 2


var btSerial2 = new (require('bluetooth-serial-port')).BluetoothSerialPort();
	btSerial2.findSerialPortChannel(address2, function(channel) {
	btSerial2.connect(address2, channel, function() {
		console.log('> button 2 is connected using ' + address2);
		btSerial2.on('data', function(buffer) {
			

			var isPressed = buffer[buffer.length-2] == 0xce;

			if(isPressed){
			 console.log(' >> button 2 is ' + 'pressed');

					request.post(serverAddress, creatDeviceQuery, function (error, response, body) {console.log('body:', body); }
			);

			}else{
			 console.log(' >> button 2 is ' + 'released');
			}});

	}, function () {
		console.log('> cannot connect');
	});

}, function() {
	console.log('found nothing');
});


process.on('SIGINT', function() {
	console.log("> closing bluetooth connection.");
	btSerial2.close();
	process.exit();
});


///////////////////////////////////////////
//Button 3
var btSerial3 = new (require('bluetooth-serial-port')).BluetoothSerialPort();
btSerial3.findSerialPortChannel(address3, function(channel) {
	btSerial3.connect(address3, channel, function() {
		console.log('> button 3 is connected using ' + address3);
		btSerial3.on('data', function(buffer) {
			

			var isPressed = buffer[buffer.length-2] == 0xc3;

			if(isPressed){
			 console.log(' >> button 3 is ' + 'pressed');

					request.post(serverAddress, creatDeviceQuery, function (error, response, body) {console.log('body:', body); }
			);

			}else{
			 console.log(' >> button 3 is ' + 'released');
			}});

	}, function () {
		console.log('> cannot connect');
	});

}, function() {
	console.log('found nothing');
});


process.on('SIGINT', function() {
	console.log("> closing bluetooth connection.");
	btSerial3.close();
	process.exit();
});




///////////////////////////////////////////
//Button 4


var btSerial4 = new (require('bluetooth-serial-port')).BluetoothSerialPort();
btSerial4.findSerialPortChannel(address4, function(channel) {
	btSerial4.connect(address4, channel, function() {
		console.log('> button 4 is connected using ' + address4);
		btSerial4.on('data', function(buffer) {
			

			var isPressed = buffer[buffer.length-2] == 0xba;

			if(isPressed){
			 console.log(' >> button 4 is ' + 'pressed');

					request.post(serverAddress, creatDeviceQuery, function (error, response, body) {console.log('body:', body); }
			);

			}else{
			 console.log(' >> button 4 is ' + 'released');
			}});

	}, function () {
		console.log('> cannot connect');
	});

}, function() {
	console.log('found nothing');
});


process.on('SIGINT', function() {
	console.log("> closing bluetooth connection.");
	btSerial4.close();
	process.exit();
});



