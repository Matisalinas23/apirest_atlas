import type { IProject } from "@/interfaces/project.interface";
import { FolderCodeIcon } from "@/icons/FolderCodeIcon";
import { ModuleItem } from "./ModuleItem";
import { useSelectionStore } from "@/store/useSelectionStore";

export const ProjectItem = ({ project }: { project: IProject }) => {
    const { setActiveProject, activeProject } = useSelectionStore()
    const isActiveProject = activeProject?.id === project.id

    const handleSelectProject = () => {
        setActiveProject(project)
    }

    return (
        <li>
            <button
                className={`w-full h-10 px-2 cursor-pointer transition-all duration-200 rounded-lg flex items-center gap-2
                group hover:bg-primary/10 ${isActiveProject ? "text-primary font-medium" : "text-neutral-600"}`}
                onClick={handleSelectProject}
            >
                <div
                    className={`h-7 w-7 p-1 rounded-md transition-all duration-200 group-hover:bg-buttons group-hover:text-white
                    ${isActiveProject ? "bg-buttons text-white" : "bg-neutral-100 text-neutral-600"}`}
                >
                    <FolderCodeIcon />
                </div>
                {project.name}
            </button>
            {isActiveProject &&
                <ul>
                    {project.modules?.map((module, index) => {
                        const isLastModule: boolean = index === project.modules.length - 1
                        return (
                            <ModuleItem key={module.id} module={module} isLastModule={isLastModule} />
                        )
                    })}
                </ul>
            }
        </li>
    )
}
