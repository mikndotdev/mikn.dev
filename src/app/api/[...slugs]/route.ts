import { Elysia } from 'elysia'

const app = new Elysia({ prefix: '/api' })

app.get('/hello', 'Hello Nextjs')

export const GET = app.fetch
export const POST = app.fetch
export type API = typeof app