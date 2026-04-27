import { use } from "react"
import './Countries.css'
import Countrie from "../Countrie/Countrie"


export default function Countries({Message}) {

    const AllCountriesData=use(Message)
    const Data=AllCountriesData.countries


  return (
    <div>
        <h3>Countries {Data.length}</h3>

    <div className="Show_Display">
        {
            Data.map(data=><Countrie key={data.ccn3.ccn3} Data={data}></Countrie>)
        }
    </div>

            

    </div>
  )
}
