import { resumeData as baseResumeData } from './resumeData';
import { projectsData, digitalContentExperience, musicTracksData } from './projects';
import { aiWorkflowTools } from './toolsData';

export * from './projects';
export * from './toolsData';

export const resumeData = {
  ...baseResumeData,
  projects: projectsData,
  digitalContent: digitalContentExperience,
  musicTracks: musicTracksData,
  aiWorkflowTools,
};
