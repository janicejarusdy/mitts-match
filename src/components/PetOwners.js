import React, { useState, useEffect } from 'react'
import PetOwnerCard from "./PetOwnerCard"

function PetOwners() {
    const [petOwners, setPetOwners] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/petOwners")
            .then(res => res.json())
            .then(ownerArray => { setPetOwners(ownerArray) })
    }, [])



    return (
        <div className="pages">
            <h1>Pet Owners</h1>
            <ul className="cards">
                {petOwners.map(owner => {
                    console.log(owner)

                    return (
                        <PetOwnerCard
                            key={owner.id}
                            owner={owner}
                        />
                    )
                    })}
            </ul>
        </div>
    )
}

export default PetOwners
