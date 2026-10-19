import type { CaseStudy } from './types'

export const caseStudy: CaseStudy | null = {
  id: 'ai-e2e-testing',
  title: 'An AI-driven end-to-end testing system',
  dek: 'Spearheading AI adoption across engineering at Zylo, I built a system where Claude writes and maintains Playwright end-to-end tests automatically, from pull request to nightly regression to triage.',
  role: 'Senior Software Engineer, Frontend AI Lead',
  timeframe: 'Early 2026',
  stack: ['Claude Code', 'Playwright', 'GitHub Actions', 'GitHub Issues'],
  sections: [
    {
      id: 'context',
      heading: 'Leading AI adoption across engineering',
      body: [
        'Spearheading AI adoption on the team meant more than using AI tools myself. It meant building the skills, workflows, and operating procedures the rest of the team could use for AI-assisted development.',
        "One of the most valuable pieces of that work was an automated end-to-end testing system built with Claude and Playwright. It started as a hackathon project, and my team's win earned us follow-up time at a second hackathon to develop it into the version running today.",
      ],
    },
    {
      id: 'how-it-works',
      heading: 'From pull request to passing test',
      body: [
        'When a pull request is opened, Claude reviews the diff and the surrounding code, then drives Playwright in the browser to write end-to-end tests against the new functionality. Those generated tests get committed directly into our e2e test directory as part of the PR.',
      ],
      list: [
        'Claude reads the PR diff and the relevant application code',
        'It drives Playwright in the browser to exercise the new functionality',
        'Generated tests are committed to the e2e test directory',
      ],
    },
    {
      id: 'regression-and-triage',
      heading: 'Nightly regression and automated triage',
      body: [
        'The full e2e suite runs on a nightly cadence for ongoing regression coverage. A second Claude-based skill triages any failures from those nightly runs and files them directly as GitHub Issues, so problems surface without anyone combing through test output every morning.',
      ],
    },
    {
      id: 'why-it-mattered',
      heading: 'Why it mattered',
      body: [
        "We were building a brand new slice of the app at startup speed, moving fast on new functionality. Having e2e coverage generated and maintained automatically meant that pace didn't come at the cost of regression safety, catching issues in fast-moving code without slowing the team down to hand-write tests.",
      ],
    },
  ],
  outcomes: [
    { label: 'Origin', value: '2 hackathon wins' },
    { label: 'Test coverage', value: 'Generated per PR' },
    { label: 'Regression', value: 'Nightly + auto-triage' },
  ],
}
