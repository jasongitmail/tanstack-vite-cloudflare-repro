import { createServerFileRoute } from '@tanstack/react-start/server'
import { getPlatformProxy } from "wrangler";

export const ServerRoute = createServerFileRoute().methods({
  GET: async (ctx) => {
    const { env } = await getPlatformProxy<Env>();
    return Response.json(env);
  },
});
