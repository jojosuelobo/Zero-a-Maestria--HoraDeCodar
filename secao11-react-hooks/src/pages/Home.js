import { useEffect, useState } from 'react'

// Custom Hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'

export default function Home() {

  return (
    <div>
      <hr />
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect/>
    </div>
  )
}
