export const Documentation = ({description}: {description: string}) => {
    return (
        <div className="flex flex-col gap-4">
            <h2>DOCUMENTACIÓN</h2>
            <div className="w-full min-h-24 border border-borders rounded-xl p-4 flex flex-col gap-2">
                <h3 className="font-medium">Descripcion del endpoint:</h3>
                <p className="text-sm text-neutral-600 mb-8">{description}</p>

                <textarea placeholder="Añadir notas" className="w-full min-h-24 border border-dashed border-neutral-400 px-2 py-1" />
            </div>
        </div>
    )
}
