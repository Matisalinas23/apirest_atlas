import { useEffect } from "react"
import { Aside } from "../components/dashboardComponents/Aside"
import { useSelectionStore } from "@/store/useSelectionStore"
import projects from "@/data/projects"
import { EndpointDashboard } from "@/components/dashboardComponents/DashboardEndpoint"

export default function Dashboard() {
    const { setProjects } = useSelectionStore()
    const { activeEndpoint, setActiveEndpoint, activeModule, setActiveModule, activeProject, setActiveProject } = useSelectionStore();

    useEffect(() => {
        setProjects(projects)
        const storageEndpoint = JSON.parse(localStorage.getItem("lastEndpoint"))
        const storageModule = JSON.parse(localStorage.getItem("lastModule"))
        const storageProject = JSON.parse(localStorage.getItem("lastProject"))
        setActiveEndpoint(storageEndpoint)
        setActiveModule(storageModule)
        setActiveProject(storageProject)
    }, [])

    useEffect(() => {
        if (!activeEndpoint) return

        localStorage.setItem("lastEndpoint", JSON.stringify(activeEndpoint))
    }, [activeEndpoint])

    useEffect(() => {
        if (!activeModule) return

        localStorage.setItem("lastModule", JSON.stringify(activeModule))
    }, [activeModule])

    useEffect(() => {
        if (!activeProject) return

        localStorage.setItem("lastProject", JSON.stringify(activeProject))
    }, [activeProject])

    return (
        <div className="flex text-neutral-600">
            <Aside />
            <EndpointDashboard activeEndpoint={activeEndpoint} />
        </div>
    )
}
