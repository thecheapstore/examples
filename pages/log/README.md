![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Logging with Netlify Edge Functions

Output content to the logs from an Edge Function using `console.log()`.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  console.log("Hello from the logging service");
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/log.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/log

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/examples/&create_from_path=examples/edge-functions/&utm_campaign=dx-examples&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
