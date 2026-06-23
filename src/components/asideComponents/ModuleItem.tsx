import type { IModule } from "@/interfaces/project.interface";
import { DataModuleIcon } from "@/icons/DataModuleIcon";
import { EndpointItem } from "./EndpointItem";
import { useSelectionStore } from "@/store/useSelectionStore";

export const ModuleItem = ({ module, isLastModule }: { module: IModule, isLastModule: boolean }) => {
    const { activeModule, setActiveModule } = useSelectionStore()
    const isActiveModule = activeModule?.id === module.id

    const handleSelectModule = () => {
        setActiveModule(module)
    }

    return (
        <li className={`w-full pl-4 ${isLastModule ? "mb-4" : ""}`}>
            <button
                className={`w-full h-10 px-2 cursor-pointer transition-all duration-200 rounded-lg flex items-center gap-2
                group hover:bg-primary/10 ${isActiveModule ? "text-primary font-medium" : "text-neutral-600"}`}
                onClick={handleSelectModule}
            >
                <div
                    className={`h-6 w-6 p-1 rounded-md transition-all duration-200 group-hover:bg-buttons group-hover:text-white
                    ${isActiveModule ? "bg-buttons text-white" : "bg-neutral-100 text-neutral-600"}`}
                >
                    <DataModuleIcon />
                </div>
                <p>{module.name}</p>
            </button>
            {isActiveModule && (
                <ul>
                    {module.modules
                    ? module.modules.map((module) => (
                        <ModuleItem
                            key={module.id}
                            module={module}
                            isLastModule={isLastModule}
                        />
                    ))
                    : module.endpoints &&
                        module.endpoints.map((endpoint) => (
                            <EndpointItem
                                key={endpoint.id}
                                endpoint={endpoint}
                            />
                        ))}
                </ul>
            )}
        </li>
    )
}