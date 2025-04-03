export interface IPaginationProps {
	usersPerPage: number
	totalUsers: number
	currentPage: number
	paginate: (pageNumber: number) => void
}
