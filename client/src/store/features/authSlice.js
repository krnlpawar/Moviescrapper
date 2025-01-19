import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		isAuthenticated: false
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload,
			state.token = action.payload.token,
			state.isAuthenticated = true
		},
		logout: (state) => {
			state.user = null,
			state.token = null,
			state.isAuthenticated = false
		},
	},
	extraReducers: (builder) => {
		builder.addCase('auth/verify/pending', (state) => {
			state.user = null,
			state.token = null,
			state.isAuthenticated = false
		}).addCase('auth/verify/fulfilled', (state, action) => {
			state.user = action.payload.user,
			state.token = action.payload.token,
			state.isAuthenticated = true
		}).addCase('auth/verify/rejected', (state) => {
			state.user = null,
			state.token = null,
			state.isAuthenticated = false
		})
	},
})

export const { login, logout } = authSlice.actions