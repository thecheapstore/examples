![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# JSON Response with Netlify Edge Functions

You can use Edge Functions to return a JSON response by returning `Response.json()` with a JavaScript object — no need to
`JSON.stringify`!

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "world" });
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/json.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/json

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/examples/&create_from_path=examples/edge-functions/&utm_campaign=dx-examples&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
