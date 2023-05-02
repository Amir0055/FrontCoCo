import { Authority } from "./Authority";

export interface User {
    last_name: string;
    first_name: string;
    premium: boolean| null;
    email: string;
    password: string;
    loyalty_point: number| null;
    Assosiation_info: string| null;
    Files: string| null;
    region: string| null;
    enabled: boolean| null;
    nbr_tentatives: number| null;
    availability: boolean| null;
    num_phone: string;
    autority: Authority[]| null;
  }