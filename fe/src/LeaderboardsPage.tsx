import { createSignal, createResource } from 'solid-js'
import { trpcClient } from './queryClient'
import rrLogo from '/logo.png'

const fetch = async () => await trpcClient.post.topLinksThisWeek.query()

export const LeaderBoardsPage = () => {
  const [data] = createResource('week', fetch)

  return (
    <>
      <span>{data.loading && 'Loading...'}</span>
      <div>
        <img src={rrLogo} class="logo" alt="Rick rollers logo" />
      </div>
      <a href="/addLink">
        <button>Get your own link</button>
      </a>
      <h1>Top Rick rollers</h1>
      <section class="leaderboard">
        <pre>{JSON.stringify(data(), null, 2)}</pre>
      </section>
    </>
  )
}
