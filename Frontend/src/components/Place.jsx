// src/components/Place.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Place = () => {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch all places or a single place based on the ID
  useEffect(() => {
    if (!id) {
      // Fetch all places
      axios.get('http://localhost:3000/api/places')
        .then(response => {
          setPlaces(response.data);
        })
        .catch(error => console.error(error));
    } else {
      // Fetch a single place for view or edit mode
      axios.get(`http://localhost:3000/api/places/${id}`)
        .then(response => {
          setPlace(response.data.place);
          setIsEditing(true);
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  // Handle form submission to add or update a place
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // PUT method to update a place
      axios.put(`http://localhost:3000/api/places/${id}`, { name:place })
        .then(response => {
          setPlace('');
          navigate('/places'); // Redirect after edit
        })
        .catch(error => console.error(error));
    } else {
      // POST method to add a new place
      axios.post('http://localhost:3000/api/places', { name:place })
        .then(response => {
          setPlace('');
          setPlaces([...places, response.data]); // Add new place to the list
        })
        .catch(error => console.error(error));
    }
  };

  // Handle place deletion
  const handleDelete = (placeId) => {
    axios.delete(`http://localhost:3000/api/places/${placeId}`)
      .then(() => {
        setPlaces(places.filter(place => place.id !== placeId)); // Remove deleted place from state
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>{isEditing ? 'Edit Place' : 'Add Place'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Place</label>
          <input
            type="text"
            className="form-control"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{isEditing ? 'Save Changes' : 'Add Place'}</button>
      </form>

      <hr />
      <h3>All Places</h3>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {places.map((placeItem, index) => (
            <tr key={placeItem.id}>
              <td>{index + 1}</td>
              <td>{placeItem.name}</td>
              <td>
                <button className="btn btn-info" onClick={() => navigate(`/places/${placeItem.id}`)}>View</button>
                <button className="btn btn-warning" onClick={() => navigate(`/places/${placeItem.id}/edit`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(placeItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Place;
