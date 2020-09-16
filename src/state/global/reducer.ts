import { createReducer } from '@reduxjs/toolkit'
import {
  changeLang
} from './actions'


export interface GlobalState {
  lang:string
}

const initialState: GlobalState = {
  lang:'zh-cn'
}

export default createReducer(initialState, builder =>
  builder
    .addCase(changeLang, (state, {payload:{lang}}) => {
      return {
        ...state,
        lang
      }
    })
)
