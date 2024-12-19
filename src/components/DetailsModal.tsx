import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
  } from "@/components/ui/dialog";
  import Logo from "@/assets/Logo.png"
import { User } from "@/constant";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

  
  // Types
  interface UserDetailsDialogProps {
    user: User;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  // Separate Dialog Component
  export const DetailsModal = ({ user, isOpen, onOpenChange }: UserDetailsDialogProps) => {
    return (
        <Dialog  open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6 bg-white rounded-lg">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Fetch Details</h2>
          <p className="text-sm text-gray-600">Here are the details of following employee:</p>
          
          <div className="flex items-start gap-3">
            {/* <Avatar className="h-10 w-10">
              <AvatarImage src={Logo} alt={user.first_name} />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar> */}
            <div className="text-sm space-y-1">
              <div><span className="font-medium">Name:</span> {user.first_name} {user.last_name}</div>
              <div><span className="font-medium">Location:</span> {user.city}</div>
              <div><span className="font-medium">Contact Number:</span> {user.contact_number}</div>
            </div>
          </div>

         
            <div className="space-y-2">
              <div className="text-sm font-medium">Profile Image:</div>
              <img 
                src={Logo} 
                alt="Profile" 
                className="w-full max-w-[200px] rounded"
              />
            </div>
        

          <DialogClose asChild>
            <Button 
              variant="ghost"
              className="h-8 px-4 absolute bottom-4 right-4 hover:bg-gray-100"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
    );
  };