export const Tags = ({tags}: {tags: string[]}) => {
    return (
        <div className="flex flex-col gap-4">
            <h2>TAGS</h2>
            <div className="w-full flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <div key={tag} className="bg-[#ff8b7c] text-white min-w-16 h-8 px-4 rounded-2xl flex gap-2 items-center justify-center">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    )
}