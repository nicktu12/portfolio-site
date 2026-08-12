import type { Role } from './types'

// Employment roles (Zylo, StackHawk, Frontier) are populated in Phase 4,
// alongside their showcase imagery. Turing has no imagery and renders in
// the Community section instead of Work, so it's populated here now.
export const roles: Role[] = [
  {
    id: 'turing',
    kind: 'teaching',
    company: 'Turing School of Software & Design',
    title: 'Instructor',
    location: 'Remote',
    start: '2022-04',
    end: '2024-10',
    scope:
      'Taught programming fundamentals including Ruby, React, and testing methodologies, and led curriculum development, professional development, and inclusion-in-tech initiatives.',
    highlights: [
      'Streamlined curriculum to remove redundant information and focus on critical concepts, creating more space for new content and project work.',
      'Worked on internal software projects to automate calendar scheduling, grading, and student tracking.',
      'Led lessons on inclusion in technology and participated in the scholarship committee.',
    ],
    stack: ['Ruby', 'React', 'JavaScript', 'Testing'],
    showcase: null,
  },
]
