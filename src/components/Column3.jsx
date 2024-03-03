import Element from './Element'

export default function Column3() {
	return <div className='absolute ml-[204px]'>
		<Element color='t-metal t-metal-text-shadow' mass='44.956' name='Scandium' number='21' symbol='Sc' top='mt-[306px]' />
		<Element color='t-metal t-metal-text-shadow' mass='88.906' name='Yttrium' number='39' symbol='Y' top='mt-[408px]' />
		<Element notHoverable color='lanthanoid lanthanoid-text-shadow' mass='' number='' symbol='57-71' top='mt-[510px]' />
		<Element notHoverable color='aktinoid aktinoid-text-shadow' mass='' number='' symbol='89-103' top='mt-[612px]' />
		<div className='absolute shadow shadow-white bg-white/60 h-[137px] w-[1px] mt-[713px] ml-[45px]'></div>
		<div className='absolute shadow shadow-white bg-white/60 h-[1px] w-[53px] mt-[850px] ml-[45px]'></div>
	</div>
}
