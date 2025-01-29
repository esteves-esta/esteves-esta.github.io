// https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/
import type { Config } from "@netlify/edge-functions";
import agents from "./agents";
// npm i @netlify/edge-function
export default async (request: Request) => {
  const ua = request.headers.get("user-agent");
  let isBot = false;
  agents.forEach((agent) => {
    if (ua.toLowerCase().includes(agent.toLowerCase())) {
      isBot = true;
      return;
    }

    if (isBot) return new Response(null, { status: 401 });
    else return;
  });
};

// This edge function is executed for all requests across the site
export const config: Config = {
  path: "*"
};
