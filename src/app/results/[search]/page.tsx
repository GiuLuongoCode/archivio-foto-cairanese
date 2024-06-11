import Gallery from "@/components/Gallery"
import Searchbar from "@/components/Searchbar/Searchbar"

type Props = {
    params: {
        search: string
    }
}
export default function ResultsPage({params: { search }}: Props) {
    
    return (
        <div className="flex flex-col px-7">
            <Searchbar />
            <Gallery search={search}></Gallery>
        </div>
    )
    
}