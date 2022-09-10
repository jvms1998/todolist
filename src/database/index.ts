import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { User } from "../entities/User";
import { CreateUser1662380849353 } from "./migration/1662380849353-CreateUser";
import { CreateCategory1662639407804 } from "./migration/1662639407804-CreateCategory";

const dataSource = new DataSource({
    type: "mysql",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    entities: [
        User,
        Category
    ],
    migrations: [
        CreateUser1662380849353,
        CreateCategory1662639407804
    ],
})

dataSource.initialize();

export default dataSource;