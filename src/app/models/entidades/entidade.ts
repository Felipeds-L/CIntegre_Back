import { IUser } from "../../types/types";

export class User implements IUser {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public password: string
    ){}
}