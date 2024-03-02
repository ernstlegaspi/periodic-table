import Column1 from "./components/Column1"
import Column2 from "./components/Column2"

export default function App() {
	return <div className='app overflow-y-scroll'>
		<div className='w-[1620px] mx-auto relative pt-[100px]'>
			<Column1 />
			<Column2 />
			<div className='absolute mt-[1000px] h-[100px] w-[100px]'></div>
		</div>
	</div>
}
