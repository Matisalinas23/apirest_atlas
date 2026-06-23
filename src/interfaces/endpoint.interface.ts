type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD"

interface IEndpoint {
    id: number;
    name: string
    url: string
    method: HttpMethod
    pathParameters: IPathParameter[]
    queryParameters: IQueryParameter[]
    headers: IHeader[]
    requestBody: string
    responses: IResponse
    description: string
    note: string
    tags: string[]
}

interface IPathParameter {
    id: number
    name: string
    type: string
    required: boolean
    description?: string
}

interface IQueryParameter {
    id: number
    name: string
    type: string
    required: boolean
    description?: string
}

interface IHeader {
    id: number
    header: string
    value: string
}

interface IResponse {
    status: number
    body: string
    description: string
}


export type { IEndpoint, HttpMethod, IPathParameter, IQueryParameter, IHeader, IResponse }