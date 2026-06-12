import { create } from 'zustand'
import type { IProject, IModule, IEndpoint } from '@/interfaces/project.interface'

interface SelectionState {
  selectedProject: IProject | null
  selectedModule: IModule | null
  selectedEndpoint: IEndpoint | null
  setSelectedProject: (project: IProject | null) => void
  setSelectedModule: (module: IModule | null) => void
  setSelectedEndpoint: (endpoint: IEndpoint | null) => void
  clearSelection: () => void
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedProject: null,
  selectedModule: null,
  selectedEndpoint: null,
  setSelectedProject: (project) => set({
    selectedProject: project,
    selectedModule: null,
    selectedEndpoint: null
  }),
  setSelectedModule: (module) => set({
    selectedModule: module,
    selectedEndpoint: null
  }),
  setSelectedEndpoint: (endpoint) => set({
    selectedEndpoint: endpoint
  }),
  clearSelection: () => set({
    selectedProject: null,
    selectedModule: null,
    selectedEndpoint: null
  })
}))
