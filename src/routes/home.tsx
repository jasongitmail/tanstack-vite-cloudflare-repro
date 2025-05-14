import * as React from 'react'

export const Route = createFileRoute({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3 className="text-2xl font-bold text-blue-500">Welcome Home!</h3>
    </div>
  )
}
