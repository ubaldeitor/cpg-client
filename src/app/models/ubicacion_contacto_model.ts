import { ContactoModel } from '../models/contacto_model';
import { EspecialidadModel } from '../models/especialidad_model';
import { UbicacionModel } from '../models/ubicacion_model';
import { HorarioModel } from '../models/horario_model';

export class UbicacionContactoModel {
    id: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    especialidad: EspecialidadModel;
    ubicaciones: Array<UbicacionModel>;
    horarios: Array<HorarioModel>;

    public constructor() {}
}