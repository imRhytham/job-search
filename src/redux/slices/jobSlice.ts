import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JdList, JdPayload, JdSingle } from "../../interface";

export const fetchJobs = createAsyncThunk(
	"fetchJobs",
	async (payload: JdPayload, thunkAPI) => {
		try {
			const response = await fetch(
				"https://api.weekday.technology/adhoc/getSampleJdJSON",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			);
			const data: JdList = await response.json();
			return data.jdList;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const jobSlice = createSlice({
	name: "data",
	initialState: {
		items: [] as JdSingle[],
		loading: false,
		offset: 0,
		hasMore: true,
	},
	reducers: {
		// Define reducers if needed
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchJobs.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.loading = false;
				state.items.push(...action.payload);
				state.offset += 1;
				state.hasMore = action.payload.length > 0;
			})
			.addCase(fetchJobs.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default jobSlice.reducer;
