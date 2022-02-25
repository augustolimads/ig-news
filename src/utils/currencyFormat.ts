type valueProps = number

export function formatUSD(value: valueProps) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
