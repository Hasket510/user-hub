import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReduxProvider } from '../providers/ReduxProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'User Hub',
	description: 'User Hub',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	)
}
