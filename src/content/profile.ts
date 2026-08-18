import type { Profile } from './types'

export const profile: Profile = {
  name: 'Nick Teets',
  role: 'Senior Software Engineer',
  company: { name: 'Zylo', url: 'https://zylo.com' },
  location: 'Denver, Colorado',
  positioning:
    'Senior software engineer building frontend systems that scale, leading AI-driven engineering practice, and going wherever the problem lives.',
  summary: [
    'I lead frontend architecture for enterprise platforms, most recently at Zylo, where I also lead the team’s adoption of AI-assisted engineering practices and take on backend ownership when the problem calls for it.',
    'I started as a software engineering instructor, which shapes how I mentor, communicate, and lead across technical and non-technical teams. Outside of work, I organize the Denver Music && Tech meetup.',
  ],
  headshot: {
    slug: 'headshot',
    widths: [800],
    intrinsic: { w: 533, h: 800 },
    alt: 'Nick Teets',
    formats: ['avif', 'webp', 'jpg'],
  },
  links: [
    {
      id: 'email',
      label: 'nickteets@gmail.com',
      href: 'mailto:nickteets@gmail.com',
      icon: 'email',
      external: false,
    },
    {
      id: 'github',
      label: 'github.com/nicktu12',
      href: 'https://github.com/nicktu12',
      icon: 'github',
      external: true,
    },
    {
      id: 'linkedin',
      label: 'linkedin.com/in/nickteets',
      href: 'https://www.linkedin.com/in/nickteets/',
      icon: 'linkedin',
      external: true,
    },
    {
      id: 'resume',
      label: 'Resume (PDF)',
      href: '/nick-teets-resume.pdf',
      external: false,
    },
  ],
  resumeUrl: '/nick-teets-resume.pdf',
}
