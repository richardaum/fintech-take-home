import type { Wallet } from './types'

export const mockWalletData: Wallet = {
  currency: 'US',
  amount: 20000,
  transactions: [
    {
      id: 1,
      type: 'SPENDING',
      amount: -500,
    },
    {
      id: 2,
      type: 'INCOME',
      amount: 3000,
    },
    {
      id: 3,
      type: 'BILLS',
      amount: -800,
    },
    {
      id: 4,
      type: 'SAVINGS',
      amount: 1000,
    },
  ],
}
