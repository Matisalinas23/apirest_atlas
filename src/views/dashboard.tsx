import { useEffect, useState } from "react"
import { Aside } from "../components/dashboard/Aside"
import type { IEndpoint } from "@/interfaces/project.interface"
import { useSelectionStore } from "@/store/useSelectionStore"
import projects from "@/data/projects"

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
    const [lastEndpoint, setLastEndpoint] = useState<IEndpoint | null>(null)
    const {activeEndpoint} = useSelectionStore()

    useEffect(() => {
        const storageEndpoint = JSON.parse(localStorage.getItem("lastEndpoint"))
        setLastEndpoint(storageEndpoint)
    }, [])

    useEffect(() => {
        if (!activeEndpoint) return

        localStorage.setItem("lastEndpoint", JSON.stringify(activeEndpoint))
        setLastEndpoint(activeEndpoint)
    }, [activeEndpoint])

    if (!lastEndpoint) {
        return (
            <div className="flex-1">
                <header className="w-full h-[8%] px-12 border-b border-borders flex items-center justify-end">
                    <div className="h-12 w-12 rounded-full border-2 border-border-strength"></div>
                </header>

                <div className="w-full h-[92%] flex flex-col justify-center items-center gap-8">
                    <p className="text-2xl font-medium">
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
        <div className="flex-1">
            <header className="w-full h-[8%] px-12 border-b border-borders flex items-center justify-between">
                <div className="w-120 h-10 border border-borders rounded-xl bg-neutral-100"></div>
                <div className="h-12 w-12 rounded-full border-2 border-border-strength"></div>
            </header>

            <div className="px-8 py-4">
                <h3 className="text-xl mb-4">{lastEndpoint?.name}</h3>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className={` rounded-full w-3 h-3 ${methodColors[lastEndpoint?.method ?? "GET"]}`}></div>
                        <h3 className="text-md font-medium">{lastEndpoint?.method}</h3>
                    </div>
                    <div className="h-6 w-full border rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

export default function Dashboard() {
    const { setProjects } = useSelectionStore()

    useEffect(() => {
        setProjects(projects)
    }, [])

    return (
        <div className="flex text-neutral-600">
            <Aside />
            <EndpointDashboard />
        </div>
    )
}
