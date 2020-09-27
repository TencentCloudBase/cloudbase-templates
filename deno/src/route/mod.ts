import {
  Application,
  Router,
} from "../deps.ts";
import {
  site,
  api,
} from "../controller/mod.ts";

export const router = new Router();

export function setRoutes(app: Application) {
  router.get("/", site.home);
  router.get("/info", site.info);
  router.get("/error", site.error);
  router.get("/api/info", api.info);
  router.get("/api/error", api.error);

  app.use(router.routes());
  app.use(router.allowedMethods());
}
