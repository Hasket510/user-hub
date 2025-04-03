import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../lib/axios'

export interface IUser {
	id: number
	name: string
	email: string
	avatar?: string
}

export interface IUsersState {
	data: IUser[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	currentPage: number
	usersPerPage: number
}

const initialState: IUsersState = {
	data: [],
	status: 'idle',
	error: null,
	currentPage: 1,
	usersPerPage: 3,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await api.get('/users')
	return response.data
})

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || 'Failed to fetch users'
			})
	},
})

export const { setCurrentPage } = usersSlice.actions
export default usersSlice.reducer
