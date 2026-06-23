import type { IEndpoint } from "@/interfaces/endpoint.interface";
import { RequestConfiguration } from "./RequestConfiguration";
import { EndpointPath } from "./EndpointPath";
import { Responses } from "./Responses";
import { Documentation } from "./Documentation";
import { Tags } from "./Tags";

const methodColors = {
    GET: "bg-green-400",
    POST: "bg-yellow-300",
    PUT: "bg-blue-400",
    DELETE: "bg-red-400",
    PATCH: "bg-purple-400",
    HEAD: "bg-lime-400",
    OPTIONS: "bg-orange-400"
}

export const EndpointDashboard = ({activeEndpoint}: {activeEndpoint: IEndpoint | null}) => {
    if (!activeEndpoint) {
        return (
            <div className="flex-1">
                <header className="w-full h-[8%] px-12 border-b border-borders flex items-center justify-end">
                    <div className="h-12 w-12 rounded-full border-2 border-border-strength"></div>
                </header>

                <div className="w-full h-[92%] flex flex-col justify-center items-center gap-8">
                    <p className="text-2xl  font-medium">
                        No hay ningun endpoint seleccionado
                    </p>

                    <div className="text-lg flex items-center gap-2">
                        <p>Buscar endpoint: </p>
                        <div className="w-80 h-8 border border-borders rounded-xl bg-neutral-100"></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-1 max-h-screen overflow-auto">
            <header className="w-full h-[8%] px-12 border-b border-borders flex items-center justify-between">
                <div className="w-120 h-10 border border-borders rounded-xl bg-neutral-100"></div>
                <div className="h-12 w-12 rounded-full border-2 border-border-strength"></div>
            </header>

            <div className="px-16 mt-6 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="bg-neutral-100 px-3 py-1 rounded-lg flex items-center gap-2">
                            <div className={`rounded-full w-[10px] h-[10px] ${methodColors[activeEndpoint.method ?? "GET"]}`}></div>
                            <p className="text-md font-medium">{activeEndpoint.method}</p>
                        </div>
                        <h3 className="pb-1 text-3xl font-normal">{activeEndpoint.name}</h3>
                    </div>

                    <button
                        className="h-10 px-4 text-black border border-neutral-600 rounded-lg duration-200 cursor-pointer
                        hover:bg-buttons hover:text-white hover:border-transparent"
                    >
                        Guardar
                    </button>
                </div>

                <div className="h-1 w-full border-b-2 border-borders"></div>

                <EndpointPath activeEndpoint={activeEndpoint} />

                <div className="py-6 flex gap-12">
                    <div className="flex flex-col gap-10 flex-1">
                        <RequestConfiguration activeEndpoint={activeEndpoint} />
                        <Responses response={activeEndpoint.responses}/>
                    </div>
                    <div className="w-1/3 flex flex-col gap-4">
                        <Documentation description={activeEndpoint.description}/>
                        <Tags tags={activeEndpoint.tags} />
                    </div>
                </div>
            </div>
        </div>
    )
}