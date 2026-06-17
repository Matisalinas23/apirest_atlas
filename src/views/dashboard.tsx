import { Aside } from "../components/dashboard/Aside"
import { useSelectionStore } from "@/store/useSelectionStore"
import { useEffect, useState } from "react"
import type { IEndpoint } from "@/interfaces/project.interface"

const methodColors = {
    GET: "bg-green-400",
    POST: "bg-yellow-300",
    PUT: "bg-blue-400",
    DELETE: "bg-red-400",
    PATCH: "bg-purple-400",
    HEAD: "bg-lime-400",
    OPTIONS: "bg-orange-400"
}

const EndpointDashboard = () => {
    const { selectedEndpoint } = useSelectionStore()
    return (
        <div className="flex-1">
            <header className="w-full py-4 px-6 border-b border-borders flex justify-between">
                <div className="w-120 h-12 border border-borders rounded-xl bg-neutral-100">
                </div>

                <div className="h-12 w-12 rounded-full border-2 border-border-strength">
                </div>
            </header>

            <div className="px-8 py-4">
                <h3 className="text-xl mb-4">{selectedEndpoint?.name}</h3>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className={` rounded-full w-3 h-3 ${methodColors[selectedEndpoint?.method ?? "GET"]}`}></div>
                        <h3 className="text-md font-medium">{selectedEndpoint?.method}</h3>
                    </div>
                    <div className="h-6 w-full border rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard() {
    const { selectedEndpoint } = useSelectionStore()
    const [endpointDashboard, setEndpointDashboard] = useState<IEndpoint | null>(selectedEndpoint)

    useEffect(() => {
        if (!selectedEndpoint) return
        setEndpointDashboard(selectedEndpoint)
    }, [selectedEndpoint])

    return (
        <div className="flex text-neutral-600">
            <Aside />
            <EndpointDashboard />
        </div>
    )
}
