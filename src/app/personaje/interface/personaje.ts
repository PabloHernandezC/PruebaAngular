import { Locacion } from "./locacion";

export interface Personaje {
    id:number,
    name:string,
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:Locacion,
    location:Locacion,
    image:string,
    episode:string[],
    url:string,
    created:string

}