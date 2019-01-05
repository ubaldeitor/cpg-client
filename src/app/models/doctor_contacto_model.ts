import { DoctorsModel } from "./doctors_model";
import { ContactoModel } from "./contacto_model";
import { HorarioModel } from "./horario_model";

export class DoctorContactoModel {
    public doctor: DoctorsModel;
    public contactos: Array<ContactoModel>;
    public horarios: Array<HorarioModel>;
    constructor() {}
}