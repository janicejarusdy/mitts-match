import React, { useState } from 'react'
// import ImageSlider from "./ImageSlider"

function PetSitterCard({ sitter }) {

    const { sitterName, sitterImage, bio, yearsOfExperience, state, testimonials } = sitter

    function handleMessageSitter() {
        //opens a new page to message sitter
    }

    function handleLeaveTestimony() {
        //opens a new page to message sitter
    }

    return (
        <li className="card">
            <div className="container">
                <img src={sitterImage} alt={`${sitterName}'s image`} />
                <h2>{sitterName}</h2>
                <div className="details">
                    <p>Bio: {bio}</p>
                    <p>Experience: {yearsOfExperience} years</p>
                    <p>Location: {state}</p>
                </div>
                <div className="sitter-btns">
                    <button onClick={handleMessageSitter} className="message-owner">Message Owner</button>
                    <button onClick={handleLeaveTestimony} className="leave-testimony">Leave Testimony</button>
                </div>
            </div>
        </li>
    )
}

export default PetSitterCard