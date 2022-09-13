import { useEffect, useState } from 'react'
import { Router } from './router'
import { GlobalStyle } from './globalStyle'
import { TimerContextProvider } from './contexts/timer'

function App() {
  Notification.requestPermission();

  return (
    <>
      <GlobalStyle />
      <TimerContextProvider>
        <Router />
      </TimerContextProvider>
    </>
  )
}

export default App
