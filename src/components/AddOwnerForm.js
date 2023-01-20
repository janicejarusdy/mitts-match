import React, { useState } from "react";

function AddOwnerForm() {
    const [formData, setFormData] = useState({
        ownerName: "",
        ownerImage: "",
        petBreed: "",
        petName: "",
        description: "",
        petImage: "",
        state: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:4000/PetOwners", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ownerName: formData.ownerName,
                ownerImage: formData.ownerImage,
                petBreed: formData.petBreed,
                petName: formData.petName,
                description: formData.description,
                petImage: formData.petImage,
                state: formData.state,
            }),
        });
    }

    return (
        <section>
            <h1>New Owner</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                    />
                </label>
                <label>
                    Profile Photo URL
                    <input
                        type="text"
                        name="ownerImage"
                        value={formData.ownerImage}
                    />
                </label>
                <label>
                    Pet Breed
                    <input
                        type="text"
                        name="petBreed"
                        value={formData.petBreed}
                    />
                </label>
                <label>
                    Pet Name
                    <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                    />
                </label>
                <label>
                    Pet Image URL:
                    <input
                        type="text"
                        name="petImage"
                        value={formData.petImage}
                    />
                </label>
                <label>
                    state
                    <select
                        name="state"
                        value={formData.state}
                    >
                        <option value="VIC">VIC</option>
                        <option value="NSW">NSW</option>
                        <option value="QLD">QLD</option>
                        <option value="WA">WA</option>
                        <option value="TAS">TAS</option>
                        <option value="SA">SA</option>
                    </select>
                </label>
                <button type="submit">Add Owner</button>
            </form>
        </section>
    );
}

export default AddOwnerForm;
