import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// Hello World!
app.use((ctx) => {
  ctx.response.body = 'Hello Deno!';
});

const port:number = Number(Deno.env.get('PORT') || 80);

app.listen({
  port
});
console.log(`server listen at http://localhost:${port}/`);
