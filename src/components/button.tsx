export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="relative bg-lime-500 text-sm p-2 text-black font-medium rounded-xs border border-zinc-200 transition-transform duration-150 hover:scale-105 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-2 hover:-translate-y-2 after:absolute after:inset-0 after:bg-white after:-z-10 after:translate-x-1.5 after:translate-y-1.5">
            {children}
        </button>
    )
}