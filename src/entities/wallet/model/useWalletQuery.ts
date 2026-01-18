import { mockWalletData } from './data'
import type { Wallet } from './types'

export function useWalletQuery() {
  // TODO: Implement actual data fetching
  // For now, using mocked data
  const data: Wallet | null = mockWalletData

  return { data }
}
