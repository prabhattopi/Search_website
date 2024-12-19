
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}
export const SearchInput = ({ value, onChange }: SearchInputProps) => {
    return (
      <div className="relative max-w-xl mx-auto mt-12">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Anjali"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-6 pl-10  w-full border-gray-200"
        />
       
      </div>
    );
  };