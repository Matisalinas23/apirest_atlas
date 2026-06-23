import { EndpointIcon } from "@/icons/EndpointIcon";
import type { IEndpoint } from "@/interfaces/endpoint.interface";
import { useSelectionStore } from "@/store/useSelectionStore";

export const EndpointItem = ({ endpoint }: { endpoint: IEndpoint }) => {
    const { activeEndpoint, setActiveEndpoint } = useSelectionStore()
    const isActiveEndpoint = activeEndpoint?.id === endpoint.id

    const handleSelectEndpoint = () => {
        setActiveEndpoint(endpoint)
    }

    return (
        <li className="pl-4">
            <button
                className={`w-full h-10 px-2 cursor-pointer transition-all duration-200 rounded-lg flex items-center gap-2
                group hover:bg-primary/10 ${isActiveEndpoint ? "text-primary font-medium" : "text-neutral-600"}`}
                onClick={handleSelectEndpoint}
            >
                <div
                    className={`h-6 w-6 p-1 rounded-md transition-all duration-200 group-hover:bg-buttons group-hover:text-white
                    ${isActiveEndpoint ? "bg-buttons text-white" : "bg-neutral-100 text-neutral-600"}`}
                >
                    <EndpointIcon />
                </div>
                <p>{endpoint.name}</p>
            </button>
        </li>
    )
}