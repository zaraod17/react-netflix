import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface showState {
  movies: {
    id: string;
    title: string;
    type: string;
    url: string;
    urlPic: string;
    categories: {
      catId: string;
    }[];
  }[];
  series: {
    id: string;
    title: string;
    type: string;
    url: string;
    urlPic: string;
    categories: {
      catId: string;
    }[];
  }[];
  categories: {
    action: { catId: string }[];
    fantasy: { catId: string }[];
    horror: { catId: string }[];
    sf: { catId: string }[];
    thriller: { catId: string }[];
    reactflix: { catId: string }[];
  };
}

const initialState: showState = {
  movies: [],
  series: [],
  categories: {
    action: [],
    fantasy: [],
    horror: [],
    sf: [],
    thriller: [],
    reactflix: [],
  },
};


export const showSlice = createSlice({
    name: 'show',
    initialState,
    reducers: {},
});

//show actions
export const { } = showSlice.actions;

export default showSlice.reducer;

