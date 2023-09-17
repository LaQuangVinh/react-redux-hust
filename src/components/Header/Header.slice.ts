import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FixHeader {
  isFixHeader: boolean
}

const initialState: FixHeader = {
  isFixHeader: false
}

const headerSlice = createSlice({
  name: 'fixHeader',
  initialState,
  reducers: {
    fixHeader: (state, action: PayloadAction<boolean>) => {
      state.isFixHeader = true
    },
    unFixHeader: (state, action: PayloadAction<boolean>) => {
      state.isFixHeader = false
    }
  }
})

const headerReducer = headerSlice.reducer

export const { fixHeader, unFixHeader } = headerSlice.actions

export default headerReducer
