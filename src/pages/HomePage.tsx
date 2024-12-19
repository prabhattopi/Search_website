import { SearchInput } from "@/components/SearchInput";
import  sampleUsers  from '@/data/data.json';
import { useState } from "react";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

 
  
    return (
      <div className="bg-gradient-to-b h-screen h- mt-16 from-blue-50/50 to-white pb-12">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
        />
     
      </div>
    )
}

export default HomePage