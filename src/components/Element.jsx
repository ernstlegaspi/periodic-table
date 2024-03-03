export default function Nonmetal({
	color,
	mass,
	name,
	notHoverable,
	number,
	symbol,
	top
}) {
	return <div className={`${notHoverable ? '' : 'element pointer'} ${color} ${top} z-0 h-[115px] w-[115px] border-2 absolute f flex-col bg-[#101318]`}>
		<p className='ml-[10px] mt-2'>{number}</p>
		<div className='f-center flex-col flex-1 mb-2 text-[14px]'>
			<p className='font-bold text-[18px]'>{symbol}</p>
			<p className='font-medium'>{name}</p>
			<p>{mass}</p>
		</div>
	</div>
}
