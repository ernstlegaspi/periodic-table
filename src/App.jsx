import Column1 from "./components/Column1"
import Column10 from "./components/Column10"
import Column11 from "./components/Column11"
import Column12 from "./components/Column12"
import Column2 from "./components/Column2"
import Column3 from "./components/Column3"
import Column4 from "./components/Column4"
import Column5 from "./components/Column5"
import Column6 from "./components/Column6"
import Column7 from "./components/Column7"
import Column8 from "./components/Column8"
import Column9 from "./components/Column9"

export default function App() {
	return <div className='app overflow-y-scroll'>
		<div className='w-[95%] mx-auto relative pt-[100px]'>
			<Column1 />
			<Column2 />
			<Column3 />
			<Column4 />
			<Column5 />
			<Column6 />
			<Column7 />
			<Column8 />
			<Column9 />
			<Column10 />
			<Column11 />
			<Column12 />
			<div className='absolute mt-[1000px] h-[100px] w-[100px]'></div>
		</div>
	</div>
}
