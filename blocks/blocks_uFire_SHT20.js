Blockly.Blocks['sht20_begin'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SHT20 begin");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(135);
		this.setTooltip("Config SHT20 and setup I2C");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['sht20_read_temperature'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SHT20 read temperature (*C)");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("Read temperature from SHT20");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['sht20_read_humidity'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("SHT20 read humidity (%RH)");
		this.setOutput(true, null);
		this.setColour(135);
		this.setTooltip("Read humidity from SHT20");
		this.setHelpUrl("");
	}
};

