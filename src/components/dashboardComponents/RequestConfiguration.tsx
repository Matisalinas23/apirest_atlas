import type { IEndpoint, IPathParameter, IQueryParameter } from "@/interfaces/endpoint.interface";
import { useState } from "react"

type TabType = "Params" | "Headers" | "Body";

interface ITabButton {
    tabKey: TabType
    activeTab: TabType
    setTab: (tab: TabType) => void
}

const TabButton = ({ tabKey, activeTab, setTab }: ITabButton) => {
    const isActive = activeTab === tabKey;

    return (
        <button
            onClick={() => setTab(tabKey)}
            className={`h-full w-36 flex items-center justify-center font-dmsans text-sm font-medium transition-all duration-300 relative z-10 ${
                isActive
                    ? `text-buttons`
                    : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100/30 cursor-pointer"
            }`}
        >
            {tabKey}
        </button>
    )
}

const ParamsTab = ({pathParams, queryParams}: {pathParams: IPathParameter[], queryParams: IQueryParameter[]}) => {
    if (pathParams.length === 0 && queryParams.length === 0) {
        return (
            <div className="text-sm text-neutral-600">
                <p>No hay parámetros</p>
            </div>
        )
    }

    return (
        <div>
            <div className="text-[12px] text-neutral-500 font-semibold flex">
                <div className="w-32 text-center">NOMBRE</div>
                <div className="w-32 text-center">TIPO</div>
                <div className="w-32 text-center">REQUERIDO</div>
                <div className="flex-1 text-center">DESCRIPCIÓN</div>
            </div>
            {pathParams.map(pathParam => (
                <div className="text-sm text-neutral-600">
                    <p>{pathParam.name}</p>
                    <p>{pathParam.type}</p>
                    <p>{pathParam.required ? "SI" : "NO"}</p>
                    <p>{pathParam.description}</p>
                </div>
            ))}
            {queryParams.map(queryParam => (
                <div className="text-sm text-neutral-600">
                    <p>{queryParam.name}</p>
                    <p>{queryParam.type}</p>
                    <p>{queryParam.required ? "SI" : "NO"}</p>
                    <p>{queryParam.description}</p>
                </div>
            ))}
        </div>
    )
}

const HeadersTab = () => {
    return (
        <div className="text-sm text-neutral-600">
            <p>Headers de la petición</p>
        </div>
    )
}

const BodyTab = () => {
    return (
        <div className="text-sm text-neutral-600">
            <p>Body de la petición</p>
        </div>
    )
}

export const RequestConfiguration = ({activeEndpoint}: {activeEndpoint: IEndpoint}) => {
    const [activeTab, setActiveTab] = useState<TabType>("Params");
    const tabs: TabType[] = ["Params", "Headers", "Body"];

    const activeIndex = tabs.indexOf(activeTab);

    return (
        <div className="flex flex-col gap-4">
            <h2>CONFIGURACIÓN DE PETICIÓN</h2>
            <div className="w-full h-100 border border-borders rounded-xl">
                <div className="h-10 w-full bg-neutral-50 rounded-t-xl border-b border-borders flex items-center relative">
                    {tabs.map((tabKey) => (
                        <TabButton
                            key={tabKey}
                            tabKey={tabKey}
                            activeTab={activeTab}
                            setTab={setActiveTab}
                        />
                    ))}
                    
                    {/* Sliding active indicator bar */}
                    <div
                        className="absolute bottom-0 h-[3px] bg-primary transition-all duration-300 ease-in-out z-20"
                        style={{ left: `${activeIndex * 9}rem`, width: "9rem" }}
                    />
                </div>
                {/* Tab Content */}
                <div className="p-4">
                    {activeTab === "Params" && <ParamsTab pathParams={activeEndpoint.pathParameters} queryParams={activeEndpoint.queryParameters} />}
                    {activeTab === "Headers" && <HeadersTab />}
                    {activeTab === "Body" && <BodyTab />}
                </div>
            </div>
        </div>
    )
}
