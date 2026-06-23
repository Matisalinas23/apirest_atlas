import type { IResponse } from "@/interfaces/endpoint.interface"

export const Responses = ({ response }: { response: IResponse }) => {
    return (
        <div className="flex flex-col gap-4">
            <h2>RESPUESTA</h2>
            <div className="min-h-100 w-full border border-borders rounded-xl">
                <div className="h-12 w-full px-4 bg-neutral-100 rounded-t-xl border-b border-borders flex items-center justify-between">
                    <div className="w-fit px-2 py-1 font-bold bg-green-100 text-[12px] text-green-700 rounded-md flex items-center gap-1">
                        <p style={{fontFamily: "dmsans"}}>{response.status}</p>
                        <p style={{fontFamily: "dmsans"}}>{response.description}</p>
                    </div>

                    <p className="text-primary text-sm" style={{fontFamily: "dmsans"}}>Copy JSON</p>
                </div>
                <div className="h-[calc(100%-40px)] text-white rounded-b-xl bg-neutral-800">
                    <p className="text-sm p-4 whitespace-pre-wrap">{response.body}</p>
                </div>
            </div>
        </div>
    )
}
