import { IUser } from '@/features/users/users.types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './UserCard.module.scss'
export function UserCard({ user }: { user: IUser }) {
	return (
		<li className={styles.userCard}>
			<Link href={`/users/${user.id}`} className={styles.link}>
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
			</Link>
		</li>
	)
}
