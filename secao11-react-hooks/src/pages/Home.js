import { useEffect, useState } from 'react'

// Custom Hooks
import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseCallback from '../components/HookUseCallback'

export default function Home() {
  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <hr />
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>  
    </div>
  )
}
