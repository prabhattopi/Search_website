import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from '@/constant';
import Logo from "@/assets/Logo.png"
import { DetailsModal } from './DetailsModal';
interface UserCardProps {
  user: User;
  onFetchDetails: (userId: number) => void;
}

export const UserCard = ({ user, onFetchDetails }: UserCardProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleFetchDetails = () => {
      onFetchDetails(user.id);
      setIsOpen(true);
    };
  return (
    <>
    <Card className="w-72 bg-white">
    <CardContent className="pt-6">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-start w-full">
          <Avatar className="h-12 w-12">
            <AvatarImage src={Logo} alt={user.first_name} />
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
        </div>

        <div className="w-full">
          <h3 className="font-semibold text-lg">{user.first_name} {user.last_name}</h3>
          
          <div className="flex font-bold items-center text-[12px] text-gray-500 mb-6">
            <MapPin className="w-4 h-4 mr-1" />
            {user.city}
          </div>
          <div className='flex items-center justify-between border-t-2 pt-2'>
          <div className="space-y-2">
            <div className="flex items-center font-bold text-[12px] text-gray-500">
              <Phone className="w-2 h-2 mr-1 font-bold" />
              <span>{user.contact_number}</span>
            </div>
            <div className="text-[10px] text-gray-400">
              Available on phone
            </div>
          </div>
          <Button onClick={handleFetchDetails} variant="default" className="w-[100px] h-[30px] bg-black text-[12px] text-white hover:bg-gray-800">
            Fetch Details
          </Button>
          </div>

          

          {/* {hugs && (
            <div className="flex gap-2 text-sm">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {hugs.sent} Hug
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {hugs.received} Hug
              </span>
            </div>
          )} */}

          
        </div>
      </div>
    </CardContent>
  </Card>
<DetailsModal
   user={user}
   isOpen={isOpen}
   onOpenChange={setIsOpen}
 />
  </>
  );
};