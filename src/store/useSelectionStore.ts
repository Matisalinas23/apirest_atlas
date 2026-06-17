import { create } from 'zustand'
import type { IProject, IModule, IEndpoint } from '@/interfaces/project.interface'

interface SelectionState {
  projects: IProject[]
  activeProject: IProject | null
  activeModule: IModule | null
  activeEndpoint: IEndpoint | null

  setProjects: (projects: IProject[]) => void
  setActiveProject: (project: IProject | null) => void
  setActiveModule: (module: IModule | null) => void
  setActiveEndpoint: (endpoint: IEndpoint | null) => void
}

export const useSelectionStore = create<SelectionState>((set) => ({
  projects: [],
  activeProject: null,
  activeModule: null,
  activeEndpoint: null,

  setProjects: (projects) => set({ projects }),
  setActiveProject: (project) => set((state) => ({
    activeProject: state.activeProject === project ? null : project
  })),
  setActiveModule: (module) => set((state) => ({
    activeModule: state.activeModule === module ? null : module,
    
  })),
  setActiveEndpoint: (endpoint) => set((state) => ({
    activeEndpoint: state.activeEndpoint === endpoint ? null : endpoint
  }))
}))
