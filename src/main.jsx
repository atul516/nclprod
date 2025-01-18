import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ExplosiveConsumptionForm from './ExplosiveConsumptionForm'
import AReport from './AReport'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExplosiveConsumptionForm />
  </StrictMode>,
)
