import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Diary } from "../../../interfaces/diary.interface";

const diaries = createSlice({
  name: "diaries",
  initialState: [] as Diary[],
  reducers: {
    addDiairy(state, { payload }: PayloadAction<Diary[]>) {
      const diairiesToSave = payload.filter((diary) => {
        return state.findIndex((item) => item.id === diary.id) === -1;
      });
      state.push(...diairiesToSave);
    },
    updateDiairy(state, { payload }: PayloadAction<Diary>) {
      const { id } = payload;
      const diaryIndex = state.findIndex((diary) => diary.id === id);
      if (diaryIndex !== -1) {
        state.splice(diaryIndex, 1, payload);
      }
    },
  },
});

export const { addDiairy, updateDiairy } = diaries.actions;

export default diaries.reducer;
