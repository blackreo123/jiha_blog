import { configureStore } from '@reduxjs/toolkit'
import blogReducers from './reducers/blogData'

export default configureStore({
    reducer: {
        blog : blogReducers
    },
})