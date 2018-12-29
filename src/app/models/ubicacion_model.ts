import { ContactoModel } from '../models/contacto_model';

export class UbicacionModel {
    public id: number;
    public descripcion: string;
    public calle_numero: string;
    public colonia: string;
    public codigo_postal: string;
    public alcaldia: string;
    public ciudad: string;
    public estado: string;
    public contactos: Array<ContactoModel>;         
    public created_at: any;
    public updated_at: any;

    public constructor() {}
}