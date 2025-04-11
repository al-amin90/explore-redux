import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [
    {
      id: "zTPDEeOcakBRP3QZrQ1MO",
      name: "Lacy ",
    },
    {
      id: "UbZW4UaU-QGRe0OVz2R53",
      name: "Parvaz",
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (user: DraftUser) => {
  return { id: nanoid(), ...user };
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.users.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
