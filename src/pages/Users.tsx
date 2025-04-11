import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import type { IUser } from "@/types";

const Users = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);

  return (
    <div className="max-w-7xl mx-auto px-5 mt-20">
      <div className="flex justify-end gap-4 items-center">
        <AddUserModal></AddUserModal>
      </div>
      <div className="space-y-5 grid grid-cols-4 gap-4  mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id} ></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
