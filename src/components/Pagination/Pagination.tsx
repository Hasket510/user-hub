import styles from './Pagination.module.scss'
interface IPaginationProps {
	usersPerPage: number
	totalUsers: number
	currentPage: number
	paginate: (pageNumber: number) => void
}

export function Pagination({
	usersPerPage,
	totalUsers,
	currentPage,
	paginate,
}: IPaginationProps) {
	const pageNumbers = []
	const totalPages = Math.ceil(totalUsers / usersPerPage)

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	return (
		<ul className={styles.paginationContainer}>
			{pageNumbers.map(number => (
				<li key={number}>
					<button
						className={`${styles.paginationButton} ${
							number === currentPage && styles.activeButton
						}`}
						onClick={() => paginate(number)}
					>
						{number}
					</button>
				</li>
			))}
		</ul>
	)
}
