const Koa = require('koa');
const Router = require('@koa/router');
const rpio = require('rpio');

const TARGET_PIN = 11;

rpio.open(TARGET_PIN, rpio.OUTPUT, rpio.LOW);

function blink() {
	rpio.write(TARGET_PIN, rpio.HIGH);
	rpio.sleep(1);
	rpio.write(TARGET_PIN, rpio.LOW);
}

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  blink();
  console.log('欢迎光临树莓派');
  ctx.body = {
    success: true
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('服务正在运行在端口：3000'));
