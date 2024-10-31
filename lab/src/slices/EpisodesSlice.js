import { createSlice } from '@reduxjs/toolkit';

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodesList: [],
        error: null,
    },
    reducers: {
        addEpisode: (state, action) => {

            state.episodesList.push(action.payload);
        },
        removeEpisode: (state, action) => {
            state.episodesList = state.episodesList.filter((obj) => obj.id !== action.payload.id)
        },
        updateCard:(state,action)=>{ 
            const { id, updatedData } = action.payload; 
            const CardIndex = state.episodesList.findIndex(card => card.id === id); 
            if (CardIndex >= 0) { 
                state.episodesList[CardIndex] = { ...state.episodesList[CardIndex], ...updatedData }; 
                state.error = null; 
            } else { 
                state.error = 'Card no found'; 
            } 
       
        },
    },
});

export const { addEpisode, removeEpisode, updateCard } = episodesSlice.actions;
export default episodesSlice.reducer;