'use client'
import { fetchUserById } from '@/features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import styles from './UserDetailsView.module.scss'

export function UserDetailsView() {
	const dispatch = useAppDispatch()
	const { userId } = useParams()
	const { selectedUser, status, error } = useAppSelector(state => state.users)

	useEffect(() => {
		if (userId) {
			dispatch(fetchUserById(userId.toString()))
		}
	}, [dispatch, userId])

	if (status === 'loading') return <div>Loading...</div>
	if (error) return <div>Error: {error}</div>
	if (!selectedUser) return <div>User not found</div>

	return (
		<div className={styles.userDetailsContainer}>
			<Image
				src={selectedUser.avatar || '/notFound.png'}
				alt={selectedUser.name}
				width={50}
				height={70}
			></Image>
			<div className={styles.userInfo}>
				<h1>{selectedUser.name}</h1>
				<div>
					<h3>Contact Information</h3>
					<p>Email: {selectedUser.email}</p>
					<p>Phone: {selectedUser.phone}</p>
					<p>Website: {selectedUser.website}</p>
				</div>

				<div>
					<h3>Company</h3>
					<p>{selectedUser.company.name}</p>
					<p>{selectedUser.company.catchPhrase}</p>
				</div>
				<div>
					<h3>Address</h3>
					<p>
						{selectedUser.address.street}, {selectedUser.address.suite}
					</p>
					<p>
						{selectedUser.address.city}, {selectedUser.address.zipcode}
					</p>
				</div>
			</div>
			<Link className={styles.link} href='/users'>
				← Back to Users
			</Link>
		</div>
	)
}
