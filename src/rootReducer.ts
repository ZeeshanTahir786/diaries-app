import { combineReducers } from "redux";
import authReducer from "./services/features/auth/authSlice";
import userReducer from "./services/features/auth/userSlice";
import diariesReducer from "./services/features/diary/diarySlice";
import entriesReducer from "./services/features/entry/entriesSlice";
import editorReducer from "./services/features/entry/editorSlics";

const rootReducer = combineReducers({
  auth: authReducer,
  diaries: diariesReducer,
  entries: entriesReducer,
  user: userReducer,
  editor: editorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
