import { User } from "@/constant";
import { UserCard } from "./UserCard";
import NotFound from "@/assets/Not_Found.png";
interface UserGridProps {
  users: User[];
  query: string;
  onFetchDetails: (userId: number) => void;
  searching:boolean;
}

export const UserGrid = ({ users, onFetchDetails, searching,query }: UserGridProps) => {
  console.log(users);
  return (
    <>
      {users?.length == 0 && !searching && query&& (
        <div className="flex w-full mt-6 items-center justify-center">
          <img src={NotFound} className="w-64 h-64" />
        </div>
      )}
      {users?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-w-2xl mx-auto px-4 mt-4">
          {users?.map((user: User) => (
            <UserCard
              key={user.id}
              user={user}
              onFetchDetails={onFetchDetails}
            />
          ))}
        </div>
      )}
    </>
  );
};
