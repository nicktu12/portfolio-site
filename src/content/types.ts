export type Iso = string // "2025-04" or "2025-04-15"

export interface Profile {
  name: string
  role: string
  company: { name: string; url: string }
  location: string
  positioning: string
  summary: string[]
  headshot: ImageAsset
  links: ContactLink[]
  resumeUrl: string
}

export interface ContactLink {
  id: 'email' | 'github' | 'linkedin' | 'resume'
  label: string
  href: string
  icon?: 'email' | 'github' | 'linkedin'
  external: boolean
}

/** One physical image, processed by scripts/build-images.sh */
export interface ImageAsset {
  /** basename without extension or width, e.g. "zylo-ai-cost-hero" */
  slug: string
  widths: number[]
  /** intrinsic aspect of the largest render, used for width/height attrs */
  intrinsic: { w: number; h: number }
  alt: string
  formats: Array<'avif' | 'webp' | 'jpg' | 'svg'>
  /** true until a real processed asset replaces a placeholder */
  isPlaceholder?: boolean
}

export type RoleKind = 'employment' | 'teaching' | 'volunteer'

export interface Role {
  id: string
  kind: RoleKind
  company: string
  companyUrl?: string
  title: string
  location: string
  start: Iso
  end: Iso | null // null = present
  scope: string
  highlights: string[]
  stack: string[]
  showcase: ShowcaseGroup | null
}

export interface ShowcaseGroup {
  roleId: string
  provenance: string
  contributionNote: string
  items: ShowcaseItem[]
}

export interface ShowcaseItem {
  id: string
  image: ImageAsset
  caption: string
  sourceUrl?: string
  sourceLabel?: string
}

export interface SkillGroup {
  id: 'frontend' | 'backend' | 'ai' | 'testing'
  label: string
  items: Array<{ name: string; emphasis?: boolean }>
}

export interface CaseStudy {
  id: string
  title: string
  dek: string
  role: string
  timeframe: string
  stack: string[]
  sections: Array<{
    id: string
    heading: string
    body: string[]
    list?: string[]
    figure?: ImageAsset
  }>
  outcomes: Array<{ label: string; value: string }>
}

export interface Talk {
  id: string
  title: string
  venue: string
  date: Iso
  url: string
  kind: 'conference' | 'meetup'
  blurb: string
}

export interface VolunteerEntry {
  id: string
  organization: string
  role: string
  start: Iso
  end: Iso | null
  blurb: string
  url?: string
}

export interface AiLeadershipContent {
  intro: string[]
  highlights: string[]
}

/** Deferred section. Ships with an empty array; adding a project later is one object literal. */
export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  liveUrl?: string
  repoUrl?: string
  image?: ImageAsset
  year: number
  featured: boolean
}
