import type { IEndpoint } from "./endpoint.interface";

interface IProject {
    name: string
    id: number
    modules: IModule[]
    lastModifyDate: string
}

interface IModule {
    id: number;
    name: string
    endpoints?: IEndpoint[]
    modules?: IModule[]
}

export type { IProject, IModule }