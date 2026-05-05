import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const loadBottlesData=fetch('https://raw.githubusercontent.com/nurmahammadmondol/Working-json-data/refs/heads/main/PH-Team_Bottles.json')
                      .then(res=>res.json())
                     

function App() {

  return (
    <div className='w-11/12 mx-auto'>
     
      <h2 className=" text-center text-4xl font-bold">Data Storage Integration</h2>
      <Suspense fallback={<h1 className='text-center text-red-600 align-middle text-5xl'>Bottles Data Loading.....?</h1>}>
        <Bottles message={loadBottlesData}></Bottles>
      </Suspense>


    </div>
  )
}

export default App
