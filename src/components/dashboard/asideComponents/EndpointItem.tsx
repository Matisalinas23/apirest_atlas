import { EndpointIcon } from "@/icons/EndpointIcon";
import type { IEndpoint } from "@/interfaces/project.interface";
import { useSelectionStore } from "@/store/useSelectionStore";

export const EndpointItem = ({ endpoint }: { endpoint: IEndpoint }) => {
    const { selectedEndpoint, setSelectedEndpoint } = useSelectionStore();
    const isSelectedEndpoint = selectedEndpoint?.id === endpoint.id;

    const handleSelectEndpoint = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setSelectedEndpoint(isSelectedEndpoint ? null : endpoint);
    }

    return (
        <li className="pl-4">
            <button
                className={`w-full h-10 px-2 cursor-pointer transition-all duration-200 rounded-lg flex items-center gap-2
                group hover:bg-primary/10 ${isSelectedEndpoint ? "text-primary font-medium" : "text-neutral-600"}`}
                onClick={handleSelectEndpoint}
            >
                <div
                    className={`h-6 w-6 p-1 rounded-md transition-all duration-200 group-hover:bg-buttons group-hover:text-white
                    ${isSelectedEndpoint ? "bg-buttons text-white" : "bg-neutral-100 text-neutral-600"}`}
                >
                    <EndpointIcon />
                </div>
                {endpoint.name}
            </button>
        </li>
    )
}