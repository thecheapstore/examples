import repoLink from "../../components/repo-link.js";

export default {
  title: "Proxy requests to another source",
  metaDescription: "Make requests to other sources via an Edge Function",
  page: function() {
    return `
    <section>
      <h1>Proxy requests to another source</h1>
      <p>You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch" target="_BLANK" rel=noopener><code>fetch()</code></a> to make requests to other sources via an Edge Function.</p>
      <pre><code>import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {

  const joke = await fetch("https://icanhazdadjoke.com/", {
    "headers": {
      "Accept": "application/json"
    }
  });
  
  const jsonData = await joke.json();
  return Response.json(jsonData);
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/fetch-joke">Fetch a random joke from https://icanhazdadjoke.com/ via an Edge Function</a></li>
        <li>${repoLink("proxy-requests.ts")}</li>
      </ul>

      <blockquote>
        <h2>Pro tip!</h2>
        <p>Curious about <code>Response.json()</code> in the code example above? Check out how you can return a <a href="/example/json">JSON response</a> using Edge Functions.</p>
      </div>
    </blockquote>
`;
  },
};