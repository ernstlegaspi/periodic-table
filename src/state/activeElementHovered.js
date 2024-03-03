import { create } from 'zustand'

const useActiveElementHovered = create(set => ({
	activeElementHovered: false,
	setActiveElementHovered: newVal => set({ activeElementHovered: newVal })
}))

export default useActiveElementHovered
