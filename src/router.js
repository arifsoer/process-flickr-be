import { Router } from "express"

import flicker from "./modules/flicker/flicker.router.js"

const router = Router()

router.use("/flickr", flicker)

export default router;
