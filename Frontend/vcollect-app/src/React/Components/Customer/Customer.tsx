import './Customer.css';
import { ChangeEvent, FormEvent, useState } from 'react';

const Customer = () => {
  const professionTypes = ['Students', 'Self Employed', 'Employee', 'Others'];

  const [formData, setFormData] = useState({
    id: '',
    san: '',
    lastName: '',
    firstName: '',
    incomePerAnnum: '',
    professionType: '',
    age: ''
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form visibility


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleButtonClick = () => {
    setShowForm(!showForm); // Toggle form visibility
  };


  return (
    <div>
      <button
        className="custom-button" // Apply custom-button CSS class to button
        onClick={handleButtonClick}
      >
        {showForm ? 'Submit' : 'Continue to Register'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          {/* Render form only when showForm is true */}
          <label htmlFor="id">ID:</label>
        <input
          type="number"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
          minLength={14}
          maxLength={14}
        />

        <label htmlFor="san">SSN:</label>
        <input
          type="number"
          id="san"
          name="san"
          value={formData.san}
          onChange={handleChange}
          required
          minLength={9}
          maxLength={9}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          maxLength={40}
        />

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          maxLength={40}
        />

        <label htmlFor="incomePerAnnum">Income Per Annum:</label>
        <input
          type="number"
          id="incomePerAnnum"
          name="incomePerAnnum"
          value={formData.incomePerAnnum}
          onChange={handleChange}
          required
          maxLength={10}
        />

        <label htmlFor="professionType">Profession Type:</label>
        <select
          id="professionType"
          name="professionType"
          value={formData.professionType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          {professionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          maxLength={3}
        />

        <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Customer;