import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from './ProfileContext.jsx';

export default function EditProfile() {
    const navigate = useNavigate();
    const { profile, setProfile } = useContext(ProfileContext);

    const [formData, setFormData] = useState({
        username: '',
        bio: '',
        email: '',
        profilePicture: null,
    });

    useEffect(() => {
        if (profile) {
            setFormData(prev => ({
                ...prev,
                username: profile.username || '',
                bio: profile.bio || '',
            }));
        }
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update context profile
        const updated = {
            ...profile,
            username: formData.username,
            bio: formData.bio,
        };

        if (formData.profilePicture) {
            // create an object URL for immediate preview (in-memory)
            updated.profile_picture = URL.createObjectURL(formData.profilePicture);
        }

        setProfile(updated);
        console.log('Profile updated:', updated);
        navigate('/profile');
    };

    return (
        <div className="edit-profile-container">
            <h1>Edit Profile</h1>
            <form className="edit-profile-forms" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <textarea
                    name="bio"
                    placeholder="Bio"
                    value={formData.bio}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button className="edit-profile-btn btn btn-success" type="submit">Save Changes</button>
                <button className="edit-profile-btn btn btn-secondary" type="button" onClick={() => navigate('/profile')}>
                    Cancel
                </button>
            </form>
        </div>
    );
}