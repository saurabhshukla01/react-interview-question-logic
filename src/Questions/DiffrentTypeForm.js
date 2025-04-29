import React, { useState } from 'react';

const FormWithPreview = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    hobbies: [],
    country: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }));
    } else if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div style={{ display: 'flex', padding: '30px', gap: '30px' }}>
      
      {/* Left Side: Form */}
      <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '20px' }}>Fill the Form</h2>
        <form>

          {/* Name Input */}
          <div style={{ marginBottom: '20px' }}>
            <label><strong>Name:</strong></label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          {/* Gender Radio */}
          <div style={{ marginBottom: '20px' }}>
            <label><strong>Gender:</strong></label><br />
            <label style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              /> Female
            </label>
          </div>

          {/* Hobbies Checkbox */}
          <div style={{ marginBottom: '20px' }}>
            <label><strong>Hobbies:</strong></label><br />
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="hobbies"
                value="Reading"
                checked={formData.hobbies.includes('Reading')}
                onChange={handleChange}
              /> Reading
            </label>
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="hobbies"
                value="Traveling"
                checked={formData.hobbies.includes('Traveling')}
                onChange={handleChange}
              /> Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Gaming"
                checked={formData.hobbies.includes('Gaming')}
                onChange={handleChange}
              /> Gaming
            </label>
          </div>

          {/* Country Dropdown */}
          <div style={{ marginBottom: '20px' }}>
            <label><strong>Country:</strong></label><br />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
              <option value="">-- Select Country --</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Image Upload */}
          <div style={{ marginBottom: '20px' }}>
            <label><strong>Upload Image:</strong></label><br />
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              style={{ marginTop: '5px' }}
            />
          </div>

        </form>
      </div>

      {/* Right Side: Preview */}
      <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
        <h2 style={{ marginBottom: '20px' }}>Live Preview</h2>
        <div style={{ lineHeight: '2' }}>
          <p><strong>Name:</strong> {formData.name || '-'}</p>
          <p><strong>Gender:</strong> {formData.gender || '-'}</p>
          <p><strong>Hobbies:</strong> {formData.hobbies.length > 0 ? formData.hobbies.join(', ') : '-'}</p>
          <p><strong>Country:</strong> {formData.country || '-'}</p>
          {formData.image && (
            <div style={{ marginTop: '20px' }}>
              <strong>Image Preview:</strong><br />
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Selected"
                style={{ width: '200px', marginTop: '10px', borderRadius: '10px', border: '1px solid #aaa' }}
              />
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default FormWithPreview;
