import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {

const loadCountries=fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json())

  return (
    <div className='Page_Size'>
      <h2>Simple React Rest Countries</h2>

      <Suspense fallback={<p>Countries Data is Loading........</p>}>
        <Countries Message={loadCountries}></Countries>
      </Suspense>
    </div>
  )
}

export default App
