interface StatCardProps {
	title: string;
	value: string | number | undefined;
}

export const StatCard = ({ title, value }: StatCardProps) => {
	return (
		<div className='p-5 rounded-md bg-black text-slate-50 text-center'>
			<h3 className='uppercase text-base'>{title}</h3>
			<span>{value}</span>
		</div>
	);
};
