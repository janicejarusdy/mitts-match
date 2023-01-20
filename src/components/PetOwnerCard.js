import React, { useState } from 'react'
// import ImageSlider from "./ImageSlider"

function PetOwnerCard({ owner }) {

    const { ownerName, ownerImage, petName, petBreed, description, petImage, state } = owner

    function handleMessageOwner() {
        //opens a new page to message owner
    }

    const imageUrls = [ownerImage, petImage]

    return (
        <li className="card">
            <img src={petImage} alt={`${petName}'s image`} />
            <h2>{petName}</h2>
            <div className="details">
                <p>Job: {description}</p>
                <p>Breed: {petBreed}</p>
                <p>Location: {state}</p>
            </div>
            <button onClick={handleMessageOwner} className="message-owner">Message Owner</button>
        </li>
    )
}

export default PetOwnerCard