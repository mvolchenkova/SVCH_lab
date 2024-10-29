import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from '../slices/EpisodesSlice';

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
    },
});

export default store;