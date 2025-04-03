import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../lib/axios'
import { IUsersState } from './users.types'

const initialState: IUsersState = {
	data: [],
	selectedUser: null,
	status: 'idle',
	error: null,
	currentPage: 1,
	usersPerPage: 3,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await api.get('/users')
	return response.data
})

export const fetchUserById = createAsyncThunk(
	'users/fetchUserById',
	async (userId: string) => {
		const response = await api.get(`/users/${userId}`)
		return response.data
	}
)

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
			.addCase(fetchUserById.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchUserById.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.selectedUser = action.payload
			})
			.addCase(fetchUserById.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || 'User not found'
			})
	},
})

export const { setCurrentPage } = usersSlice.actions
export default usersSlice.reducer
