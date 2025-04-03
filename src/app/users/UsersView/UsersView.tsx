'use client'
import { Pagination } from '@/components/Pagination/Pagination'
import { UserCard } from '@/components/UserCard/UserCard'
import { fetchUsers, setCurrentPage } from '@/features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import styles from './UsersView.module.scss'

export function UsersView() {
	const dispatch = useAppDispatch()
	const { data, status, error, currentPage, usersPerPage } = useAppSelector(
		state => state.users
	)

	useEffect(() => {
		dispatch(fetchUsers())
	}, [dispatch])

	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser)

	const paginate = (pageNumber: number) => dispatch(setCurrentPage(pageNumber))

	if (status === 'loading') return <div>Loading...</div>
	if (status === 'failed') return <div>Error: {error}</div>

	return (
		<div className={styles.usersContainer}>
			<h1 className={styles.title}>Users List</h1>
			<ul className={styles.usersList}>
				{currentUsers.map(user => (
					<UserCard key={user.id} user={user} />
				))}
			</ul>
			<Pagination
				usersPerPage={usersPerPage}
				totalUsers={data.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</div>
	)
}
