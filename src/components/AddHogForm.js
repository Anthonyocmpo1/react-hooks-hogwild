import React, { useState } from 'react';

const AddHogForm = ({ addHog }) => {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        weight: '',
        greased: false,
        medal: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            ...formData,
            weight: parseFloat(formData.weight) // Convert weight to a number
        };
        addHog(newHog); // Call the addHog function passed as a prop
        setFormData({
            name: '',
            specialty: '',
            weight: '',
            greased: false,
            medal: '',
            image: ''
        }); // Reset form fields
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
            </label>
            <label>
                Specialty:
                <input
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    placeholder="Specialty"
                    required
                />
            </label>
            <label>
                Weight:
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Weight"
                    required
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
                Greased
            </label>
            <label>
                Medal:
                <input
                    name="medal"
                    value={formData.medal}
                    onChange={handleChange}
                    placeholder="Highest Medal Achieved"
                />
            </label>
            <label>
                Image URL:
                <input
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                />
            </label>
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default AddHogForm;
