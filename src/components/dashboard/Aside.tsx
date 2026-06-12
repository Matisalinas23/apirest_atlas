import projects from "@/data/projects"
import { ApiIcon } from "@/icons/ApiIcon"
import { ProjectItem } from "./asideComponents/ProjectItem"
import { AddIcon } from "@/icons/AddIcon"

export const Aside = () => {
    const version = "0.1.0"

    return (
        <aside className="h-screen w-1/5 border-r border-borders py-10 flex flex-col items-center gap-8">
            <div className="flex items-center justify-center gap-4">
                <div className="p-1.5 bg-primary rounded-lg">
                    <div className="h-8 w-8 text-white">
                        <ApiIcon />
                    </div>
                </div>

                <div>
                    <h1 className="font-normal text-2xl text-primary">
                        API REST ATLAS
                    </h1>
                    <h2 className="text-[12px] font-semibold text-neutral-600">
                        v{version} - STABLE
                    </h2>
                </div>
            </div>

            <div className=" text-center">
                <button className="bg-buttons py-3 px-6 rounded-lg text-white flex items-center gap-2">
                    <div className="h-6 w-6">
                        <AddIcon />
                    </div>
                    Nuevo Proyecto
                </button>
            </div>

            <ul className="w-3/4 flex flex-col">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </ul>
        </aside>
    )
}
