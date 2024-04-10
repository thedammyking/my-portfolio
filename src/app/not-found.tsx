import { useRouter } from 'next/navigation';
import ErrorPage from 'src/components/ErrorPage';

export default function NotFound() {
	const router = useRouter();
	return (
		<ErrorPage
			title='404'
			subTitle='Page not found'
			description='We can’t seem to find the page you’re looking for'
			action={{
				label: 'Return Home',
				onClick: () => router.push('/'),
			}}
		/>
	);
}
