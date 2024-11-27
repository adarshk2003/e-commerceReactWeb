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
    discount: "",
    quantity: "",
    images: [],
    specifications: "",
    brand: "",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...e.target.files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("product added ")
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <div className="form-group">
        <label><FontAwesomeIcon icon={faTag} /> Product Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faEdit} /> Description:</label>
        <input type="text" value={formData.description} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faClipboardList} /> Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faDollarSign} /> Price:</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faPercent} /> Discount:</label>
        <input type="text" name="discount" value={formData.discount} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faBoxes} /> Quantity in Stock:</label>
        <input type="text   " name="quantity" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label><FontAwesomeIcon icon={faImage} /> Images:</label>
        <input type="file" name="images" multiple onChange={handleImageChange} />
      </div>
      <button type="submit" className="submit-button">Add Product</button>
    </form>
  );
}

export default AddProductForm;
