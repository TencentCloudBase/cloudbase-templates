import { Application } from "./deps.ts";
import { router } from "./route/mod.ts";
import {
  curl,
  error,
  logger as midLogger,
  statics,
  timing,
} from "./middleware/mod.ts";
import { logger } from "./service/logger.ts";

const app = new Application();

app.use(error);
app.use(midLogger);
app.use(curl);
app.use(timing);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(statics);

const port: number = Number(Deno.env.get("PORT")) || 80;

app.listen({ port });
logger.success(`Server listen at http://localhost:${port}/`);
