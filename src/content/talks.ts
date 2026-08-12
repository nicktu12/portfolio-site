import type { Talk } from './types'

export const talks: Talk[] = [
  {
    id: 'making-music-with-code',
    title: 'Making Music With Code',
    venue: 'Music && Technology Meetup',
    date: '2023-11',
    url: 'https://youtu.be/sQsLDQroQsg',
    kind: 'meetup',
    blurb: 'A talk on using code as a creative tool for making music.',
  },
  {
    id: 'automated-security-testing-vue',
    title: 'How Developers Can Use Automated Security Testing To Protect Vue Apps',
    venue: 'Vue.js Live',
    date: '2021',
    url: 'https://portal.gitnation.org/contents/how-developers-can-use-automated-app-security-testing-to-protect-vue-apps',
    kind: 'conference',
    blurb: 'A conference talk on integrating automated application security testing into a Vue.js development workflow.',
  },
  {
    id: 'music-and-technology-2020',
    title: 'Music && Technology',
    venue: 'Jamstack Denver Meetup',
    date: '2020-08',
    url: 'https://youtu.be/v6rcZ4XZ2t8',
    kind: 'meetup',
    blurb: 'An early talk on the intersection of music and technology, at the meetup that led to founding Music && Technology.',
  },
]
