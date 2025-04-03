import { IUser } from '@/features/users/usersSlice'
import Image from 'next/image'
import styles from './UserCard.module.scss'
export function UserCard({ user }: { user: IUser }) {
	return (
		<li className={styles.userCard}>
			<Image
				src={user.avatar || '/notFound.png'}
				alt={user.name}
				width={50}
				height={70}
			></Image>
			<div className={styles.userInfo}>
				<h3>{user.name}</h3>
				<p>{user.email}</p>
			</div>
		</li>
	)
}
