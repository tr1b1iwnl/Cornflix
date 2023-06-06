import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./slices/movieSlice"
import latestReducer from './slices/latestSlice'
import netflixOriginalsReducer from './slices/netflixOriginalsSlice'
import topRatedReducer from './slices/topRatedSlice'
import trendingReducer from './slices/trendingSlice'
import tvShowReducer from './slices/tvShowSlice'
import searchReducer from "./slices/searchSlice"

const store = configureStore({
    reducer: {
        movie: movieReducer,
        latest: latestReducer,
        netflixOriginals: netflixOriginalsReducer,
        topRated: topRatedReducer,
        trending: trendingReducer,
        tvShow: tvShowReducer,
        search: searchReducer
    }
})

export default store