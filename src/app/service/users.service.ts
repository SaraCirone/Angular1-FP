import { Users } from "../models/users.interface";

export async function getUsers(): Promise<Users[]> {
    return await (await fetch('http://localhost:3000/users')).json();
}
