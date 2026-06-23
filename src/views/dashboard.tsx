import { useEffect } from "react"
import { Aside } from "../components/dashboardComponents/Aside"
import { useSelectionStore } from "@/store/useSelectionStore"
import projects from "@/data/projects"
import { EndpointDashboard } from "@/components/dashboardComponents/DashboardEndpoint"

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
