import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { categoryRouter } from "./category.routes";
import sessionsRouter from "./sessions.routes";
import { todoRouter } from "./todo.routes";
import { usersRouter } from "./users.routes";


const routes = Router();

routes.use("/users", usersRouter)
routes.use("/category", ensureAuthenticated, categoryRouter)
routes.use("/todo", ensureAuthenticated, todoRouter)
routes.use("/sessions", sessionsRouter)

export default routes; 