import './App.css'

import { Router, Route } from '@solidjs/router'
import { ErrorBoundary, Suspense } from 'solid-js'
import { LeaderBoardsPage } from './LeaderboardsPage'
import { AddLinkPage } from './AddLinkPage'

function App() {
  // const [count, setCount] = createSignal(0)

  return (
    <Suspense>
      <ErrorBoundary
        fallback={(error: Error) => (
          <div>
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <pre>{error.stack}</pre>
          </div>
        )}
      >
        <Router>
          <Route path="/addLink" component={AddLinkPage} />
          <Route path="/" component={LeaderBoardsPage} />
        </Router>
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
