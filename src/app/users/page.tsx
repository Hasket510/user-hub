import { Metadata } from 'next/types'
import { UsersView } from './UsersView/UsersView'

export const metadata: Metadata = {
	title: 'Users-list',
	description: 'Users-list',
}

export default function Page() {
	return <UsersView />
}
