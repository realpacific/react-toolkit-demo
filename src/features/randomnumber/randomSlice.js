import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    oldValue: undefined,
    status: 'idle',
    range: 100
};


export const randomAsyncThunk = createAsyncThunk(
    'random/fetchRandom',
    async (range) => {
        return await new Promise((resolve, reject) => {
            setTimeout(() => random(range), 500)
        })
    }
);

function random(range) {
    return Math.floor(Math.random() * range);
}

const randomSlice = createSlice({
    name: 'random',
    initialState: initialState,
    reducers: {
        next: (state) => {
            state.oldValue = state.value;
            state.value = random(state.range);
        },
        previous: (state) => {
            state.value = state.oldValue;
            state.oldValue = undefined;
        },
        incRange: (state) => {
            state.range += 100
        },
        decRange: (state) => {
            if (state.range <= 100) {
                return;
            }
            state.range -= 100
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(randomAsyncThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(randomAsyncThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.oldValue = state.value;
                state.value = action.payload;
            });
    },
});

export const { next, previous, incRange, decRange } = randomSlice.actions;

export const selectRandom = (state) => state.random;

export default randomSlice.reducer;
