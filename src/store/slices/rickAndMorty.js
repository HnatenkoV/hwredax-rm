import {createSlice} from "@reduxjs/toolkit";

export const rickAndMortySlice = createSlice({
    name: "rickandmorty",
    initialState: {
        listOfChar: [],
        listOfEpisode: [],
        selectedChar: { name: "none" },
    },
    reducers: {
        getCharacter: (state, action) => {
            state.listOfChar = action.payload
        },
        getEpisode: (state, action) => {
            state.listOfEpisode = action.payload
        },
        selectChar: (state, action) => {
            console.log(state, action);
            state.selectedChar = action.payload;
        },
        clearCharacterList: (state) => {
            state.listOfChar = []
        },
    },
});

export const { clearCharacterList, getCharacter, selectChar, getEpisode} = rickAndMortySlice.actions;

export const getCharacterAsync = () => (dispatch) => {
    fetch("https://rickandmortyapi.com/api/character/")
        .then((resp) => resp.json())
        .then((data) => dispatch(getCharacter(data.results)))
}

export const getEpisodeAsync = () => (dispatch) => {
    fetch("https://rickandmortyapi.com/api/episode")
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