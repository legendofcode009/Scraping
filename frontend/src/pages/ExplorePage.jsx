const ExplorePage = () => {
    return (
        <div className="px-4">
            <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
                <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
                <div className="flex flex-wrap gap-2 my-2 justify-center bg-glass">
                    <img src='/new_icons/javascript.svg' alt="Javascript logo" className="h-11 sm:h-20 cursor-pointer" />
                    <img src='/new_icons/typescript.svg' alt="typescript logo" className="h-11 sm:h-20 cursor-pointer" />
                    <img src='/new_icons/c.svg' alt="c++ logo" className="h-11 sm:h-20 cursor-pointer" />
                    <img src='/new_icons/python.svg' alt="Python logo" className="h-11 sm:h-20 cursor-pointer" />
                    <img src='/new_icons/java.svg' alt="Java logo" className="h-11 sm:h-20 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
export default ExplorePage