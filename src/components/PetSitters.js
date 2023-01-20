import React, { useState, useEffect } from 'react'
import PetSitterCard from "./PetSitterCard"

function PetSitters() {
    const [petSitters, setPetSitters] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/petSitters")
            .then(res => res.json())
            .then(sitterArray => { setPetSitters(sitterArray) })
    }, [])



    return (
        <div className="pages">
            <h1>Pet Sitters</h1>
            <h2> Find a pet sitter in your area! </h2>
            <ul className="cards">
                {petSitters.map(sitter => {

                    return (
                        <PetSitterCard
                            key={sitter.id}
                            sitter={sitter}
                        />
                    )
                    })}
            </ul>
        </div>
    )
}

export default PetSitters
