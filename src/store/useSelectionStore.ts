import { create } from 'zustand'
import type { IProject, IModule, IEndpoint } from '@/interfaces/project.interface'

interface SelectionState {
  selectedProject: IProject | null
  selectedModule: IModule | null
  selectedEndpoint: IEndpoint | null
  toggleProject: (project: IProject) => void
  toggleModule: (module: IModule) => void
  toggleEndpoint: (endpoint: IEndpoint) => void
}

export const useSelectionStore = create<SelectionState>((set, get) => ({
  selectedProject: null,
  selectedModule: null,
  selectedEndpoint: null,
  toggleProject: (project) => {
    const currentProject = get().selectedProject;
    set({
      selectedProject: currentProject?.id === project.id ? null : project,
      selectedModule: null,
      selectedEndpoint: null
    });
  },
  toggleModule: (module) => {
    const currentModule = get().selectedModule;
    set({
      selectedModule: currentModule?.id === module.id ? null : module,
      selectedEndpoint: null
    })
  },
  toggleEndpoint: (endpoint) => {
    const currentEndpoint = get().selectedEndpoint;
    set({
      selectedEndpoint: currentEndpoint?.id === endpoint.id ? null : endpoint
    })
  },
}))
