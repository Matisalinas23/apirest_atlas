import type { IEndpoint } from "@/interfaces/endpoint.interface";

export const EndpointPath = ({lastEndpoint}: {lastEndpoint: IEndpoint}) => {
    const environment = "http://localhost:3000"

    return (
        <div className="h-10 px-1 w-full border border-borders rounded-md flex items-center">
            {environment && lastEndpoint.url
                ?
                <div className="text-sm text-black cursor-pointer flex items-center gap-4">
                    <p className="bg-neutral-200/75 font-light px-3 py-1 rounded-sm">{environment}</p>
                    <p>{lastEndpoint.url}</p>
                </div>
                :
                lastEndpoint.url
            }
        </div>
    )
}
