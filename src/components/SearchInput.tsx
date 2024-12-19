
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter?: () => void; // Optional callback for Enter key
  
}
export const SearchInput = ({ value, onChange,onEnter }: SearchInputProps) => {
    return (
      <div className="relative max-w-2xl mx-auto mt-4 px-4">
        <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search"
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onEnter) {
              onEnter(); // Call the onEnter callback if provided
            }
          }}
          onChange={(e) => onChange(e.target.value)}
          className="p-6 pl-10 text-[18px] w-full border-gray-200"
        />
       
      </div>
    );
  };