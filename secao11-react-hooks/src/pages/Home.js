import React from 'react'

// Custom Hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'

export default function Home() {
  return (
    <div>
      <hr />
      <HookUseState />
      <HookUseReducer />
    </div>
  )
}
