let Koa = require('koa');
let KoaRouter = require('koa-router');
let cors = require('koa-cors');

const app = new Koa();
const router = new KoaRouter();

app.use(cors());

let takeoutData = require('./datas/takeoutData.json');
router.get('/takeout_bin/fetchdata', (ctx, next) => {
	ctx.body = takeoutData;
})

let history = require('./datas/history.json');
router.post('/takeout_bin/getHistory', (ctx, next) => {
	ctx.body = history;
})

router.post('/takeout_bin/adminlogin', (ctx, next) => {
	ctx.response.body = {
		message: 'success'
	}
})

router.post('/takeout_bin/adddata', (ctx, next) => {
	ctx.response.body = {
		message: 'success'
	}
})

router.post('/takeout_bin/judge', (ctx, next) => {
	ctx.response.body = {
		message: 'needwhole'
	}
})

router.post('/takeout_bin/takeout', (ctx, next) => {
	ctx.response.body = {
		message: '14'
	}
})

router.post('/takeout_bin/changepwd', (ctx, next) => {
	ctx.response.body = {
		message: 'success'
	}
})
app.use(router.routes())

app.listen('8080', (err) => {
	if (err) {
		console.log(err);
	}
	else console.log('launched success!');
})
