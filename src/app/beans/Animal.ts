import { Usuario } from './Usuario';

export class Animal {

    nome?:string;
    tipo?:string;
    raca?:string;
    idade?:string;
    descricao?:string;
    estado?:string;
    cidade?:string;
    sexo?:string;
    porte?:string;
    status?:string;
    foto?: File;
    usuario_id?: Usuario;
}
