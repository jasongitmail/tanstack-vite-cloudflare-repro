import { createServerFileRoute } from '@tanstack/react-start/server'
import { getBindings } from '../../../lib/bindings';


export const ServerRoute = createServerFileRoute().methods({
  GET: async (ctx) => {
    const env = await getBindings();
    return Response.json(env);
  },
});
