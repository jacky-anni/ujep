import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./HomeSlice";
import EmployeeSlice from "./EmployeeSlice";
import UserSlice from "./UserSlice";
import StudentSlice from "./StudentsSlice";
import FacultySlice from "./FacultySlice";
import CourseSlice from "./CourseState";
import CatalogSlice from "./CatalogState";

export const store = configureStore({
  reducer: {
    home: HomeSlice,
    employee: EmployeeSlice,
    user: UserSlice,
    student: StudentSlice,
    faculty: FacultySlice,
    course: CourseSlice,
    catalog: CatalogSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
