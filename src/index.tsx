import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.html(
  <html>
    <head>
      <title>Hono SSG TEST</title>
    </head>
    <body>
      <p>Hello World</p>
    </body>
  </html>
))

export default app