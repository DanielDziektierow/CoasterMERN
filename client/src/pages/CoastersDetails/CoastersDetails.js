import { response } from "express"
import { useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"

const CoastersDetails = () =>{
    
    const {coaster_id} = useParams()
    const [coaster, setCoaster] = useState({})

    const loadCoasterDetails= () => {
        fetch('http://localhost:5005/api/details/${coaster_id}')
            .then(response => response.json())
            .then(coaster => setCoaster(coaster))
    }
    return(
        <main>
            <h1>Estos son los detalles de {coaster.title}</h1>
            <hr/>
            <Link to="/ga">Ver galeria</Link>
        </main>
    )
}

export default CoastersDetails