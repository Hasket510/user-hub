export interface IUser {
	id: number
	name: string
	email: string
	avatar?: string
}

export interface IUserDetails extends IUser {
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
	}
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
	}
}

export interface IUsersState {
	data: IUser[]
	selectedUser: IUserDetails | null
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
	currentPage: number
	usersPerPage: number
}
