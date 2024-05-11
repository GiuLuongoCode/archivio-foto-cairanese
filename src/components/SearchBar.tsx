"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SearchBar = () => {
  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Input
          className="rounded-lg w-full"
          placeholder="Search..."
          type="search"
        />
        <Link href="/photo">
          <Button className="rounded-lg" type="submit">
            <img src="/search.svg" alt="lente" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-row py-1">
        <Button variant="outline" className="mr-2">Parola chiave</Button>
        <Button variant="outline" className="mr-2">Categoria</Button>
        <Button variant="outline">Nome tag</Button>
      </div>
    </>
  );
};

export default SearchBar;
