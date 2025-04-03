import { Metadata } from 'next/types'
import { UserDetailsView } from './UserDetailsView/UserDetailsView'

export const metadata: Metadata = {
	title: 'User-details',
	description: 'User-details',
}

export default function Page() {
	return <UserDetailsView />
}
