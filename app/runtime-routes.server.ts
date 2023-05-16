import type { EntryContext } from "@remix-run/node";
// import {getSitemapXml} from './utils/sitemap.server'

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null;

/**
 * This object maps paths to handlers. If a request comes in for a path that
 * isn't in this object, we'll fall back to the routes defined in `app/routes/*`.
 *
 * Handler is a function that takes a request and remix context and returns a
 * response or null. If it returns null, we'll fall back to the routes defined
 */
const runtimeRoutes: Record<string, Handler> = {
  "/sitemap.xml": async (request, remixContext) => {
    // const sitemap = await getSitemapXml(request, remixContext)
    // return new Response(sitemap, {
    //   headers: {
    //     'Content-Type': 'application/xml',
    //     'Content-Length': String(Buffer.byteLength(sitemap)),
    //   },
    // })

    const sitemap = JSON.stringify({
      hello: "world",
    });
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/json",
        "Content-Length": String(Buffer.byteLength(sitemap)),
      },
    });
  },
};

/**
 * This is the array of handlers that Remix will use to match requests to
 * responses. It's a flat array of functions that take a request and remix
 * context and return a response or null. If they return null, we'll fall back
 * to the routes defined in `app/routes/*`.
 */
const runtimeRoutesHandlers: Array<Handler> = [
  ...Object.entries(runtimeRoutes).map(([_, handler]) => handler),
];

export { runtimeRoutesHandlers, runtimeRoutes };
