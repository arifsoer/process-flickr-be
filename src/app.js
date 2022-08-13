import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

import {
  errorHandler,
  errorLog,
  failSafeHandler,
} from "./middlewares/error.middleware.js";
import { ForbiddenError } from "./utils/error.js";
import { PORT } from "./utils/envConfig.js";

import globalRouter from "./router.js";

const app = express();

app.use(json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", globalRouter);

app.use("*", (_, _1) => {
  throw new ForbiddenError();
});

app.use(errorLog);
app.use(errorHandler);
app.use(failSafeHandler);

app.listen(PORT, () => {
  console.log("server ready get request");
});
