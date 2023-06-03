import { GithubUser } from "./github-user.interface";

/**
 * Las interfaces no tienen una traducción a javascrip
 * esto es para manejar un tipado de datos.
 */
export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}
