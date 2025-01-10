import { useState } from "react";
import axios from 'axios';
let customerInitialState = {
    name: "",
    father_name: "",
    place: "",
    address:"",
    pan_no:"",
    aadhar_no:"",
    mobile1:"",
    mobile2:"",
    referer_id:"",
    created_by:"",
    edited_by:"",
    created_at:"",
    updated_at:"",
    remarks:""
    }
export default function Customer() {
    const[customer, setCustomer] = useState(customerInitialState);
    const[customers, setCustomers] = useState([]);
    const[isEditing, setIsEditing] = useState(false);
    function setCustomerData(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing==false) {
            // POST method to add a new place
            axios.post('http://localhost:3000/api/customers', {customer})
              .then(response => {
                setCustomer(customerInitialState);
                setCustomers([...customers, response.data]); // Add new Customer to the list
              })
              .catch(error => console.error(error));
          } else {
           
          }
    }
    return (
        <>
        <div className="container">
          {/* <h2>{isEditing ? 'Edit Place' : 'Add Place'}</h2> */}
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={customer.name}
                 onChange={(e) => setCustomerData(e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Father Name</label>
              <input
                name="father_name"
                type="text"
                className="form-control"
                value={customer.father_name}
                 onChange={(e) => setCustomerData(e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Place</label>
              <input
                name="place"
                type="text"
                className="form-control"
                value={customer.place}
                 onChange={(e) => setCustomerData(e)}
                required
              />
            </div>
            <button type="submit"  className="btn btn-primary">{isEditing ? 'Save Changes' : 'Add Place'}</button>
          </form>
          </div>
          {JSON.stringify(customer)}
          </>
    );
}