import type { Role, ShowcaseGroup } from './types'

const zyloShowcase: ShowcaseGroup = {
  roleId: 'zylo',
  provenance:
    'Downloaded from zylo.com/product/ai-consumption-cost-management (Webflow CDN), self-hosted rather than hotlinked.',
  contributionNote:
    "Screens from Zylo's AI Consumption Cost Management product, published on zylo.com. I contributed to this product area as a frontend engineer. Design and marketing assets are Zylo's.",
  items: [
    {
      id: 'zylo-ai-cost-hero',
      image: {
        slug: 'zylo-ai-cost-hero',
        widths: [800, 1440],
        intrinsic: { w: 1826, h: 1432 },
        alt: 'Dashboard showing cost metrics: $1,154,474 billed, $2,725,256 projected, $2M commitment, 57.72 percent to commitment.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'AI consumption cost dashboard',
      sourceUrl: 'https://zylo.com/product/ai-consumption-cost-management',
      sourceLabel: 'zylo.com, 2026',
    },
    {
      id: 'zylo-forecast-chart',
      image: {
        slug: 'zylo-forecast-chart',
        widths: [800],
        intrinsic: { w: 1420, h: 1224 },
        alt: 'Line chart comparing actual and forecast costs from March to September 2025, with actual tracking below forecast.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'Actual vs. forecast cost tracking',
      sourceUrl: 'https://zylo.com/product/ai-consumption-cost-management',
      sourceLabel: 'zylo.com, 2026',
    },
    {
      id: 'zylo-ops-table',
      image: {
        slug: 'zylo-ops-table',
        widths: [800],
        intrinsic: { w: 1420, h: 1299 },
        alt: 'Table listing workspace, cost type, total payments, and status signal across a paginated list of entries.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'Cost operations table',
      sourceUrl: 'https://zylo.com/product/ai-consumption-cost-management',
      sourceLabel: 'zylo.com, 2026',
    },
    {
      id: 'zylo-commitment',
      image: {
        slug: 'zylo-commitment',
        widths: [800, 1440, 2200],
        intrinsic: { w: 2880, h: 1621 },
        alt: 'Cost management dashboard showing total billed cost, projected cost, and percent to commitment.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'Commitment tracking dashboard',
      sourceUrl: 'https://zylo.com/product/ai-consumption-cost-management',
      sourceLabel: 'zylo.com, 2026',
    },
  ],
}

const stackhawkShowcase: ShowcaseGroup = {
  roleId: 'stackhawk',
  provenance:
    'Downloaded from stackhawk.com/platform (current site), self-hosted rather than hotlinked.',
  contributionNote:
    "Screens from the StackHawk platform, which I led frontend development for. Design and marketing assets are StackHawk's.",
  items: [
    {
      id: 'stackhawk-api-discovery',
      image: {
        slug: 'stackhawk-api-discovery',
        widths: [800, 1440, 2200],
        intrinsic: { w: 2200, h: 1379 },
        alt: 'API Discovery dashboard showing 201 repositories, 156 total attack surface, 61 percent mapped, and 49 percent tested coverage.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'API discovery and attack surface mapping',
      sourceUrl: 'https://www.stackhawk.com/platform',
      sourceLabel: 'stackhawk.com, 2026',
    },
    {
      id: 'stackhawk-repo-insights',
      image: {
        slug: 'stackhawk-repo-insights',
        widths: [800, 1440, 2200],
        intrinsic: { w: 2200, h: 1391 },
        alt: 'Repo Insights table listing repositories with frameworks detected, sensitive data tags, and last commit activity.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'Repo insights: frameworks, sensitive data, and commit activity',
      sourceUrl: 'https://www.stackhawk.com/platform',
      sourceLabel: 'stackhawk.com, 2026',
    },
    {
      id: 'stackhawk-openapi-spec',
      image: {
        slug: 'stackhawk-openapi-spec',
        widths: [800, 1440, 2200],
        intrinsic: { w: 2200, h: 1433 },
        alt: 'OpenAPI Spec Generation panel showing an AI-generated spec with endpoint paths and summaries for a sample application.',
        formats: ['avif', 'webp', 'jpg'],
      },
      caption: 'AI-generated OpenAPI spec',
      sourceUrl: 'https://www.stackhawk.com/platform',
      sourceLabel: 'stackhawk.com, 2026',
    },
  ],
}

export const roles: Role[] = [
  {
    id: 'zylo',
    kind: 'employment',
    company: 'Zylo',
    companyUrl: 'https://zylo.com',
    title: 'Senior Software Engineer',
    location: 'Denver, Colorado (Remote)',
    start: '2025-04',
    end: null,
    scope:
      'Leads frontend architecture across core enterprise product areas, including Contract Assist, multi-org DocuSign, and Consumption Cost Management, while taking on full-stack ownership of backend services powering licensing and workflow automation.',
    highlights: [
      'Led frontend architecture for multi-org DocuSign integration and contributed to a full-stack Workflow Resends feature that shipped to general availability across the entire customer base, presented directly to company leadership.',
      'Spearheaded company-wide adoption of AI-assisted engineering practices (Claude Code), leading frontend AI strategy and representing the team at internal conferences and cross-functional AI working groups.',
      'Expanded into full-stack ownership of backend services for license modeling and workflow automation, with leadership crediting the transition with freeing up senior backend engineers to focus on new initiatives.',
      'Directed a full-week TanStack Query v4 to v5 migration redesigning cross-app state architecture, and led complex UI work including high-performance sticky-column data tables and an accessibility overhaul of chart components.',
      'Won a company-wide hackathon for building an automated AI-driven end-to-end testing architecture.',
    ],
    stack: ['React', 'TypeScript', 'Zustand', 'GraphQL', 'Node.js', 'PostgreSQL', 'AWS', 'Claude Code'],
    showcase: zyloShowcase,
  },
  {
    id: 'turing',
    kind: 'employment',
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
  {
    id: 'stackhawk',
    kind: 'employment',
    company: 'StackHawk',
    companyUrl: 'https://www.stackhawk.com',
    title: 'Frontend Engineer',
    location: 'Denver Metropolitan Area',
    start: '2020-02',
    end: '2022-04',
    scope:
      "Led frontend development for the StackHawk platform, including React architecture, a design system, and a from-scratch rebuild of the company's marketing site.",
    highlights: [
      'Directed a product rebuild, achieving a 50% boost in performance and driving 100% growth in user traffic.',
      'Implemented end-to-end testing frameworks, accelerating code release cycles by 2 days and ensuring reliable, resilient software quality.',
      'Delivered workshops and presentations on application security automation, and actively contributed to hiring and mentoring junior engineers.',
    ],
    stack: ['React', 'TypeScript', 'Gatsby', 'Contentful', 'GraphQL', 'Kotlin', 'Playwright', 'Docker', 'AWS'],
    showcase: stackhawkShowcase,
  },
  {
    id: 'frontier',
    kind: 'employment',
    company: 'Frontier Airlines',
    companyUrl: 'https://www.flyfrontier.com',
    title: 'Software Developer I',
    location: 'Denver Metropolitan Area',
    start: '2018-03',
    end: '2020-02',
    scope:
      'Developed features for the booking platform in .NET, then led the transition of the frontend to a Vue.js SPA, including a company-wide accessibility initiative with the Blind Institute of Technology.',
    highlights: [
      'Coordinated efforts to enhance accessibility for visually impaired users and reduced user drop-off rates by 50% on accessible web components.',
      'Streamlined design-to-dev handoff, reducing iteration time from weeks to days.',
      'Coached high school interns and served on a company committee for aircraft naming.',
    ],
    stack: ['Vue.js', 'Vuex', 'C#', '.NET', 'JavaScript', 'Webpack', 'Azure DevOps'],
    // The archived booking SPA renders blank on Wayback replay; the real
    // story here (accessibility, drop-off reduction) isn't something a
    // screenshot would convey anyway.
    showcase: null,
  },
]
