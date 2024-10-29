import { createSlice } from '@reduxjs/toolkit';

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodesList: [],
        error: null,
    },
    reducers: {
        addEpisode: (state, action) => {
            const selected = action.payload;
            
            state.episodesList.push(selected);
        },
    },
});

export const { addEpisode, removeEpisode } = episodesSlice.actions;
export default episodesSlice.reducer;