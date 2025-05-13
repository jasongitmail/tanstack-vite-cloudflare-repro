import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute().methods({
  GET: async (ctx) => {
    console.info('hello server route called')
    return new Response("Hello, World! from api/hello");
  },
});
