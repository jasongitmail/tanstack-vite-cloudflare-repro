/**
 *  https://developers.cloudflare.com/workers/frameworks/framework-guides/tanstack
 *
 */
export async function getBindings() {
  if (import.meta.env.DEV) {
    const { getPlatformProxy } = await import("wrangler");
    const { env } = await getPlatformProxy();
    return env as unknown as Env;
  }

  return process.env as unknown as Env;
}
