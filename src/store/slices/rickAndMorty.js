import {createSlice} from "@reduxjs/toolkit";

export const rickAndMortySlice = createSlice({
    name: "rickandmorty",
    initialState: {
        listOfChar: [],
        listOfEpisode: [],
        selectedChar: { name: "none" },
        currentPage: 1,
        maxPage: null,
    },
    reducers: {
        getCharacter: (state, action) => {
            console.log(state, action);
            state.listOfChar = action.payload
        },
        getEpisode: (state, action) => {
            console.log(state, action);
            state.listOfEpisode = action.payload
        },
        selectChar: (state, action) => {
            console.log(state, action);
            state.selectedChar = action.payload;
        },
        clearCharacterList: (state) => {
            state.listOfChar = []
        },
        nextPage: (state) => {
            state.currentPage += 1;
        },
        prevPage: (state) => {
            state.currentPage -= 1;
        },
    },
});

export const { clearCharacterList, getCharacter, selectChar, getEpisode, nextPage, prevPage} = rickAndMortySlice.actions;

export const getCharacterAsync = (page) => (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((resp) => resp.json())
        .then((data) => dispatch(getCharacter(data.results)))
}

export const getEpisodeAsync = (page) => (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then((resp) => resp.json())
        .then((data) => dispatch(getEpisode(data.results)))
}

export const getCharacterByIdAsync = (id) => (dispatch) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch(selectChar(data)));
};

export const selectCharList = (state) => state.rickAndMorty.listOfChar

export default rickAndMortySlice.reducer;