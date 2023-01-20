import React, { useState } from 'react'
// import ImageSlider from "./ImageSlider"

function PetOwnerCard({ owner }) {

    const { ownerName, ownerImage, petName, petBreed, description, petImage, state } = owner

    function handleMessageOwner() {

    }

    const imageUrls = [ownerImage, petImage]

    return (
        <li className="card">
            <img src={petImage} alt={`${petName}'s image`} />
            <h4>{petName}</h4>
            <p>{description}</p>
            <button onClick={handleMessageOwner} className="message-owner">Message Owner</button>
        </li>
    )
}

export default PetOwnerCard