import { memo } from 'react'

import useActiveElementHovered from '../state/activeElementHovered'
import useCurrentElement from '../state/currentElement'

const Element = ({
	color,
	mass,
	name = 'n/a',
	notHoverable,
	number,
	symbol,
	top
}) => {
	const { currentElement, setCurrentElement } = useCurrentElement()
	const { setActiveElementHovered } = useActiveElementHovered()
	const isActive = currentElement === name
	const mainColor = {
		'alkali': 'bg-[#B8964A]',
		'alkaline': 'bg-[#BFC94C]',
		'lanthanoid': 'bg-[#CB688F]',
		'aktinoid': 'bg-[#A270A9]',
		't-metal': 'bg-[#A45950]',
		'post-metal': 'bg-[#43BFD3]',
		'metalloid': 'bg-[#2FB48C]',
		'nonmetal': 'bg-[#40B34D]',
		'gas': 'bg-[#5472B5]',
		'u': 'bg-[#B0B1B2]'
	}
	const currentColor = mainColor[color.split(' ')[0]]

	const handleClick = () => {
		if(name === 'n/a') return

		setCurrentElement(name)
	}

	return <div
		onClick={handleClick}
		onMouseEnter={() => setActiveElementHovered(true)}
		onMouseLeave={() => setActiveElementHovered(false)}
		className={`
			${isActive ? 'w-[150px] h-[150px] z-10 translate-x-[-25px] translate-y-[-25px]' : notHoverable ? '' : 'element pointer'}
			${color} ${top}
			z-0 h-[100px] w-[100px] border-2 absolute f flex-col bg-[#101318]
			transition-all duration-150
		`}
		>
		<p className={`${isActive ? 'text-[20px]' : 'text-base'} transition-all duration-150 ml-[2px] mt-[2px]`}>{number}</p>
		<div className={`${isActive ? 'text-[18px]' : 'text-[14px]'} transition-all duration-150 f-center flex-col flex-1 mb-2`}>
			<p className={`${isActive ? 'text-[22px]' : 'text-[18px]'} transition-all duration-150 font-bold`}>{symbol}</p>
			<p className='font-medium'>{name === 'n/a' ? '' : name}</p>
			<p>{mass}</p>
		</div>
		{isActive ? <>
			<div className={`
				${color}
				rotate-circle w-[50px] h-[50px] border rounded-full
				absolute left-[35%] top-[35%] translate-x-[-50%] translate-y-[-50%] z-[-10]
			`}>
				<div className={`${currentColor} w-[15px] h-[15px] rounded-full`}></div>
				<div className={`${currentColor} w-[15px] h-[15px] rounded-full ml-[40px]`}></div>
				<div className={`${currentColor} w-[15px] h-[15px] rounded-full ml-[10px] mt-[9px]`}></div>
			</div>
			<div className={`
				${color}
				rotate-circle-reverse w-[100px] h-[100px] border rounded-full
				absolute left-[18%] top-[18%] translate-x-[-50%] translate-y-[-50%] z-[-10]
			`}>
				<div className={`${currentColor} w-[15px] h-[15px] ml-[5px] mt-[8px] rounded-full`}></div>
				<div className={`${currentColor} w-[15px] h-[15px] rounded-full ml-[88px]`}></div>
				<div className={`${currentColor} w-[15px] h-[15px] rounded-full ml-[35px] mt-[51px]`}></div>
			</div>
		</> : null}
	</div>
}

export default memo(Element)
