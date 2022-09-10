import { Router } from "express";
import { categoryRouter } from "./category.routes";
import { usersRouter } from "./users.routes";


const routes = Router();

routes.use("/users", usersRouter)
routes.use("/category", categoryRouter)

export default routes; 