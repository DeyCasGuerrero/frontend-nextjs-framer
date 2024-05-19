import InputSearch from "@/components/common/InputSearch";
import { ApiTypes } from "@/types/ApiTypes";

async function SearchPage() {


    return (
        <>
            <main className="p-20 h-screen bg-gradient-to-r from-slate-200 to-slate-100">
                <h1 className="text-center text-black text-5xl">Search Page</h1>
                <div className="flex items-center justify-center mt-12">
                    <InputSearch></InputSearch>
                </div>
            </main>
            <div>
            </div>
        </>
    )
}

export default SearchPage