import { create } from 'zustand'

const useFilteredElements = create(set => ({
	filteredElements: '',
	setFilteredElements: newFilteredElements => set({ filteredElements: newFilteredElements })
}))

export default useFilteredElements
