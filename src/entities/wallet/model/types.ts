export type TransactionType = 'SPENDING' | 'INCOME' | 'BILLS' | 'SAVINGS'

export type Transaction = {
  id: number
  type: TransactionType
  amount: number
}

export type Wallet = {
  currency: string
  amount: number
  transactions: Transaction[]
}

export type WalletData = Wallet
