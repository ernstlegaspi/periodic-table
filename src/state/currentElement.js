import { create } from 'zustand'

const useCurrentElement = create(set => ({
	currentElement: '',
	setCurrentElement: newElement => set({ currentElement: newElement })
}))

export default useCurrentElement
