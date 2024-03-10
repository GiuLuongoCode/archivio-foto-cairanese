import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const SearchBar = () => {
    return (
    <div className="flex w-full items-center space-x-2">
      <img src="/search.svg" alt="lente" />
      <Input className="rounded-lg w-full" placeholder="Search..." type="search" />
      <Button className="rounded-lg" type="submit">
      </Button>
    </div>
  );
}

export default SearchBar;