import type { Project } from './types'

// Deferred section, per plan: ships empty. <Projects /> renders null until
// this has entries. Adding one later is a single object literal plus an
// image run through scripts/build-images.sh.
export const projects: Project[] = []
