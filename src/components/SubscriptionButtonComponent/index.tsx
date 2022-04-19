import { useSession, signIn } from 'next-auth/react'
import { api } from 'src/services/axios'
import { getStripeJs } from 'src/services/stripe-js'

type Props = {
  priceId: string
}

export const SubscriptionButtonComponent = ({ priceId }: Props) => {
  const { data: session } = useSession()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      console.log(response)

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className="bg-amber-400 text-neutral-900 rounded-full text-xl py-5 px-16 font-bold hover:brightness-75 transition-all"
    >
      Subscribe now
    </button>
  )
}
