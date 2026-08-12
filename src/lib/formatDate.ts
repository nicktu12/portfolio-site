import type { Iso } from '../content/types'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function formatMonthYear(iso: Iso): string {
  const [year, month] = iso.split('-').map(Number)
  if (!month) return String(year)
  return `${MONTHS[month - 1]} ${year}`
}

export function formatRange(start: Iso, end: Iso | null): string {
  const startLabel = formatMonthYear(start)
  const endLabel = end ? formatMonthYear(end) : 'present'
  return `${startLabel} - ${endLabel}`
}
