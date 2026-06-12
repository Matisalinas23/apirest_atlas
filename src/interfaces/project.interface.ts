interface IProject {
    name: string
    id: number
    modules: IModule[]
}

interface IModule {
    id: number;
    name: string
    endpoints?: IEndpoint[]
    modules?: IModule[]
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "TRACE" | "CONNECT"

interface IEndpoint {
    id: number;
    name: string
    url: string
    method: HttpMethod
}

export type { IProject, IModule, IEndpoint, HttpMethod }