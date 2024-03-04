import Elements from "./components/Elements"
import Filters from "./components/Filters"
import useActiveElementHovered from "./state/activeElementHovered"
import useCurrentElement from './state/currentElement'

export default function App() {
	const { currentElement, setCurrentElement } = useCurrentElement()
	const { activeElementHovered } = useActiveElementHovered()

	const handleClick = () => {
		if(activeElementHovered) return

		setCurrentElement('')
	}
	
	return <div className='app overflow-y-scroll'>
		<Elements />
		<Filters />
		<div onClick={handleClick} className={`${currentElement ? 'ml-0' : 'ml-[2000px]'} transition-all bg-black/50 inset-0 z-60 fixed`}></div>
	</div>
}
