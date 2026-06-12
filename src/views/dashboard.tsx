import { Aside } from "../components/dashboard/Aside"
import { useSelectionStore } from "@/store/useSelectionStore"
import { methodColors } from "@/data/methodColors"
import { useEffect, useState } from "react"
import type { IEndpoint } from "@/interfaces/project.interface"

export default function Dashboard() {
    const { selectedEndpoint } = useSelectionStore()
    const [endpointDashboard, setEndpointDashboard] = useState<IEndpoint | null>(selectedEndpoint)

    useEffect(() => {
        if (!selectedEndpoint) return
        setEndpointDashboard(selectedEndpoint)
    }, [selectedEndpoint])

    const getMethodColor = () => {
        const method = methodColors.find((m) => m.method === endpointDashboard.method)

        if (!method) {
            console.error("El metodo no existe", method)
            return "#dddddd"
        }

        return method.color
    }

    const methodColor = endpointDashboard ? getMethodColor() : null

    return (
        <div className="flex">
            <Aside />

            <div className="flex-1">
                <header className="w-full py-4 px-6 border-b border-borders flex justify-between">
                    <div className="w-120 h-12 border border-borders rounded-xl bg-neutral-100">
                    </div>

                    <div className="h-12 w-12 rounded-full border-2 border-border-strength">
                    </div>
                </header>

                <div>
                    <div className="px-8 my-4 flex items-center gap-2">
                        <div className="py-1.5 px-3 w-fit rounded-md" style={{ backgroundColor: methodColor }}>
                            <h3 className="text-[14px] text-white font-medium">{endpointDashboard?.method}</h3>
                        </div>
                        <h3 className="text-xl pb-1">{endpointDashboard?.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
