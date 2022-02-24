import { SubscriptionButtonComponent } from 'src/components/SubscriptionButtonComponent'

/* eslint-disable @next/next/no-img-element */
export const HomeTemplate = () => {
  return (
    <main className="container mx-auto flex items-center justify-between h-screen">
      <section>
        <span className="text-2xl">👏 Hey, welcome</span>
        <h1 className="text-7xl font-black">
          News about
          <br /> the <span className="text-cyan-300">React</span> world.
        </h1>
        <p className="text-2xl mt-6 mb-10">
          Get access to all the publications <br />
          <span className="text-cyan-300 font-bold">for $9.90 month</span>
        </p>
        <SubscriptionButtonComponent />
      </section>
      <img src="/images/avatar.svg" alt="woman on computer" />
    </main>
  )
}
