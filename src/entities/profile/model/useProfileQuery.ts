import { mockProfileData } from './data'
import type { Profile } from './types'

export function useProfileQuery() {
  // TODO: Implement actual data fetching
  // For now, using mocked data
  const data: Profile | null = mockProfileData

  return { data }
}
