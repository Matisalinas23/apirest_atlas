import type { IEndpoint } from "@/interfaces/endpoint.interface"

export const EndpointPath = ({activeEndpoint}: {activeEndpoint: IEndpoint}) => {
    const environment = "http://localhost:3000"

    return (
        <div className="h-10 px-1 w-full border border-borders rounded-md flex items-center">
            {environment && activeEndpoint.url
                ?
                <div className="text-sm text-black cursor-pointer flex items-center gap-4">
                    <p className="bg-neutral-200/75 font-light px-3 py-1 rounded-sm">{environment}</p>
                    <p>{activeEndpoint.url}</p>
                </div>
                :
                activeEndpoint.url
            }
        </div>
    )
}
