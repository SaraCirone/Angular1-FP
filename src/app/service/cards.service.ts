import { Card } from "../models/card.interface";

export async function getPost(): Promise<Card[]> {
    return await (await fetch('http://localhost:3000/lista')).json();
}
