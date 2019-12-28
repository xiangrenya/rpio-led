const rpio = require('rpio');

const TARGET_PIN = 11;

rpio.open(TARGET_PIN, rpio.OUTPUT, rpio.LOW);

function blink() {
	rpio.write(TARGET_PIN, rpio.HIGH);
	rpio.sleep(1);
	rpio.write(TARGET_PIN, rpio.LOW);
}

setInterval(blink, 2000);
