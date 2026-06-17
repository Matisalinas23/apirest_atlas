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

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD"

interface IEndpoint {
    id: number;
    name: string
    url: string
    method: HttpMethod
}

export type { IProject, IModule, IEndpoint, HttpMethod }