import { Link } from 'react-router-dom';
import { Button, Heading, Text } from '@/components/ui';

export const Home = () => {
	return (
		<>
			<Heading as='h1' size='3xl'>
				Do You know the bride
			</Heading>
			<Text as='p' className='mt-8 text-center'>
				Anwser the questions to see how well you know the bride. The person with the most correct answer
				wins !
			</Text>
			<Button asChild variant='link' className='mt-8'>
				<Link to='/register'>Commencer</Link>
			</Button>
		</>
	);
};
