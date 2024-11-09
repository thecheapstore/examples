import repoLink from "../../components/repo-link.js";

export default {
  title: "JSON Response",
  metaDescription: "Use Edge Functions to return a JSON response using Response.json().",
  page: function () {
    return `
    <section>
      <h1>JSON Response</h1>
      <p>You can use Edge Functions to return a JSON response by returning <code>Response.json()</code> with a JavaScript object — no need to <code>JSON.stringify</code>!</p>
      <p>In this example, we return a JSON object containing <code>hello: "world"</code>.</p>

      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "world" });
};
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/json">View the response from the Edge Function</a></li>
        <li>${repoLink("json.ts")}</li>
      </ul>

      <blockquote>
        <h2>Pro tip!</h2>
   <p>Need to return text/html from an Edge Function? Check out the <a href="/example/hello">Hello, world</a> example.</p>
      </blockquote>
    </section>
  `;
  },
};
