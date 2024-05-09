'use client'

import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation'

const PropertyPage = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const { id } = useParams()
	const name = searchParams.get('name')
	const pathname = usePathname()

	console.log('Hello client')

	return (
		<div>
			<button onClick={() => router.push('/')} className='bg-blue-500 p-2'>
				Go home {pathname}
			</button>
		</div>
	)
}

export default PropertyPage
