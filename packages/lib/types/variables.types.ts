import { Parameters } from './Card'

export interface Variable {
    id: string;
    type: Parameters;
    name: string;
    value?: string | number | boolean;
}

export enum VariableType {
    get = "get",
    set = "set"
}