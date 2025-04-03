import Link from 'next/link'
import styles from './main.module.scss'

export default function Home() {
	return (
		<div>
			<main>
				<Link className={styles.link} href='/users'>
					Users List
				</Link>
			</main>
		</div>
	)
}
