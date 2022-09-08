import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { CreateUser1662380849353 } from "./migration/1662380849353-CreateUser";

const dataSource = new DataSource({
    type: "mysql",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    entities: [
        User,
    ],
    migrations: [
        CreateUser1662380849353,
    ],
})

dataSource.initialize();

export default dataSource;