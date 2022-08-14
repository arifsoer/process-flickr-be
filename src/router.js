import { Router } from "express"

import flicker from "./modules/flickr/flickr.router.js"

const router = Router()

router.use("/flickr", flicker)


export default router;
