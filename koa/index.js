// Import required packages
const Koa = require('koa');
const Router = require('koa-router');

// Initialize Koa application
const app = new Koa();
const router = new Router();

// Define routes
// Home page route
router.get('/', (ctx) => {
  ctx.body = '<h1>Anasayfaya hoşgeldiniz</h1>';
});

// About page route
router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
});

// Contact page route
router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
});

// Register the routes
app.use(router.routes());
app.use(router.allowedMethods());

// Define the port number
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/**
 * Source Links:
 * https://www.npmjs.com/package/koa
 * https://koajs.com
 * 
 */