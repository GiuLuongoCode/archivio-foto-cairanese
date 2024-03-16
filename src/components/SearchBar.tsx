import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <img src="/search.svg" alt="lente" />
        <Input
          className="rounded-lg w-full"
          placeholder="Search..."
          type="search"
        />
        <Button className="rounded-lg" type="submit"></Button>
      </div>
      <div className="flex flex-row px-14 py-1">
        <Button variant="outline">
          Parola chiave
        </Button>
        <Button variant="outline">
          Categoria
        </Button>
        <Button variant="outline">
          Nome tag
        </Button>

      </div>
    </>
  );
};

export default SearchBar;
