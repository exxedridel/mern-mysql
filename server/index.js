import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const expressServer = express();

expressServer.use(indexRoutes);
expressServer.use(taskRoutes);

expressServer.listen(PORT);
console.log(`🚀 Server is running at http://localhost:${PORT}`);
