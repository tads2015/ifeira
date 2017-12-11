import {User} from "../user/user";
import {Endereco} from "../user/endereco";
import { Observable } from "tns-core-modules/data/observable/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { DadosProdutor } from "../dadosProdutor/dadosProdutor";
export class UsuarioS{
    static LEntrega : Array<Object> = [];
    static DadosProdutor: Array<Object> = [];
    static dp: DadosProdutor;
    static EnderecoProdutor: Endereco;
}
    