Blockly.JavaScript['sht20_begin'] = function(block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += '#EXTINC#include <uFire_SHT20.h>#END\n';
	code += '#EXTINC#include <Wire.h>#END\n';
	code += '#VARIABLE uFire_SHT20 sht20;#END\n';
	code += '\n';
	code += '#SETUP ' + WIRE_OBJ + '.begin(' + SDA_PIN + ', ' + SCL_PIN + ');#END\n';
	code += '#SETUP sht20.begin();#END\n';
	return code;
};

Blockly.JavaScript['sht20_read_temperature'] = function(block) {
	var code = 'sht20.temperature()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sht20_read_humidity'] = function(block) {
	var code = 'sht20.humidity()';
	return [code, Blockly.JavaScript.ORDER_NONE];
};

