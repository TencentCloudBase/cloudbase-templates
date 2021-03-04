import { Router } from "../deps.ts";
import { api, site } from "../controller/mod.ts";

export const router = new Router();

router.get("/", site.home);
router.get("/info", site.info);
router.get("/error", site.error);
router.get("/api/env", api.env);
router.get("/api/info", api.info);
router.get("/api/error", api.error);
