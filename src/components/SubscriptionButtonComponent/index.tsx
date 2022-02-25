type Props = {
  priceId: string
}

export const SubscriptionButtonComponent = ({ priceId }: Props) => {
  return (
    <button className="bg-amber-400 text-neutral-900 rounded-full text-xl py-5 px-16 font-bold hover:brightness-75 transition-all">
      Subscribe now
    </button>
  )
}
