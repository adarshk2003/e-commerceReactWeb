import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faEdit, faClipboardList, faDollarSign, faPercent, faBoxes, faImage } from '@fortawesome/free-solid-svg-icons';
import './addproduct.css';
import { toast } from "react-toastify";

function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
    images: "",
  });




  const handleSubmit = (e) => {
    e.preventDefault();
    

  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <h1 m-2>add product</h1>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faTag} /> Product Name:</label>
        <input type="text" name="name" value={formData.name}  required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faEdit} /> Description:</label>
        <input type="text" value={formData.description}  required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faClipboardList} /> Category:</label>
        <input type="text" name="category" value={formData.category}  required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faDollarSign} /> Price:</label>
        <input type="text" name="price" value={formData.price} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faBoxes} /> Quantity in Stock:</label>
        <input type="text   " name="quantity" value={formData.quantity}  required />
      </div>
      <div className="form-group  border-0">
        <label><FontAwesomeIcon icon={faImage} /> Images:</label>
        <input type="file" name="images" className="border-0" />
      </div>
      <button type="submit" className="submit-button">Add Product</button>
    </form>
  );
}

export default AddProductForm;
