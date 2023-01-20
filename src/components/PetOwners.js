import React, { useState, useEffect } from 'react'
import PetOwnerCard from "./PetOwnerCard"
import AddOwnerForm from "./AddOwnerForm"
import { useNavigate } from "react-router-dom"

function PetOwners() {
    const [petOwners, setPetOwners] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/PetOwners")
            .then(res => res.json())
            .then(ownerArray => { setPetOwners(ownerArray) })
    }, [])

    const navigate = useNavigate()
    const routeChange = () => {
        const path = '/AddOwnerForm'
        navigate(path)
    }



    return (
        <>
            <div className="pages">
                <h1>Pet Owners</h1>
                <h2> Find a pet-sitting job opportunity in this page! </h2>
                <ul className="cards">
                    {petOwners.map(owner => {

                        return (
                            <PetOwnerCard
                                key={owner.id}
                                owner={owner}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className="addOwner">
                <button onClick={routeChange}> Add new owner</button>             
            </div>
        </>

    )
}

export default PetOwners
