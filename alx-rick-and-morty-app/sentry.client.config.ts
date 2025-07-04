// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ee35d19e6a7c9587a83826b36b912a1f@o4509609959030784.ingest.us.sentry.io/4509609960013824",
  tracesSampleRate: 1.0,
});
