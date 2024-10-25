import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CourseJoinedProvider } from '@/context/CourseJoinedContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CourseJoinedProvider>
      <App />
    </CourseJoinedProvider>
  </StrictMode>,
)
