import useFilteredElements from "../state/filteredElements"

export default function Filters() {
	const { setFilteredElements } = useFilteredElements()

	const Filter = ({ color, label, margin }) => <p onClick={() => setFilteredElements(label.toLowerCase())} className={`${color} ${margin} pointer`}>{label}</p>

	return <div className='absolute w left-1/2 translate-x-[-50%] f-center'>
		<Filter color='alkali alkali-text-shadow' label='Alkali Metals' margin='mr-6' />
		<Filter color='alkaline alkaline-text-shadow' label='Alkaline Earth Metals' margin='mr-6' />
		<Filter color='lanthanoid lanthanoid-text-shadow' label='Lanthanoids Metals' margin='mr-6' />
		<Filter color='aktinoid aktinoid-text-shadow' label='Aktinoids Metals' margin='mr-6' />
		<Filter color='transition-metal transition-metal-text-shadow' label='Transition Metals' margin='mr-6' />
		<Filter color='post-metal post-metal-text-shadow' label='Post Transition Metals' margin='mr-6' />
		<Filter color='metalloid metalloid-text-shadow' label='Metalloid' margin='mr-6' />
		<Filter color='nonmetal nonmetal-text-shadow' label='Other Nonmetals' margin='mr-6' />
		<Filter color='noble-gas noble-gas-text-shadow' label='Noble Gasses' margin='mr-6' />
		<Filter color='unknown unknown-text-shadow' label='Unknown' margin='mr-6' />
	</div>
}
