interface CloudflareEnv extends Env {
  SOME_SECRET: string;
  ANOTHER_SECRET: string;
}

/**
 *  https://developers.cloudflare.com/workers/frameworks/framework-guides/tanstack
 *  Run `wrangler types` to generate types from bindings in `wrangler.jsonc` and
 *  to define the `Env` type. Use the above interface to extend it for env secrets.
 */
export async function getBindings() {
  if (import.meta.env.DEV) {
    const { getPlatformProxy } = await import("wrangler");
    const { env } = await getPlatformProxy();
    return env as unknown as CloudflareEnv;
  }

  return process.env as unknown as CloudflareEnv;
}
