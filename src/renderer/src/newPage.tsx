import React from 'react'
import ReactDOM from 'react-dom/client'

export function NewPage(): JSX.Element {
  return (
    <div>
      <h1>This is a new page</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewPage />
  </React.StrictMode>
)
