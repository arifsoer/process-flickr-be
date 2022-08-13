import { Router } from "express";

import { getData } from "./flicker.controller.js";

const flickerUser = Router();

flickerUser.get("/public-image", getData);

export default flickerUser;
