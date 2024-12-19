import { SearchInput } from "@/components/SearchInput";
import { UserGrid } from "@/components/UserGrid";
import { User } from "@/constant";
import  sampleUsers  from '@/data/data.json';
import { useState } from "react";

const HomePage = () => {
 

    const [searchQuery, setSearchQuery] = useState('');
    const [searching,setSearching]=useState(false)
    const [filteredUsers,setFilterUser]=useState<User[]>([])
    const onEnter=()=>{
      setSearching(false)
      if (!searchQuery){
        setFilterUser([])
      }
      else{
        setFilterUser(sampleUsers.filter(user =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      }
       
    }

  
  
    const handleFetchDetails = (userId: number) => {
      console.log('Fetching details for user:', userId);
      // Implement fetch details logic
    };
    
    const onChange=(value:string)=>{
      setSearching(true)
      setSearchQuery(value)
     
    }
  
    return (
      <div className=" bg-gradient-to-b  from-blue-50/50 to-white md:p-8">
        <SearchInput
          value={searchQuery}
          onChange={onChange}
          onEnter={onEnter}
        />
        <UserGrid
        query={searchQuery}
        users={filteredUsers}
        onFetchDetails={handleFetchDetails}
        searching={searching}
      />
     
      </div>
    )
}

export default HomePage