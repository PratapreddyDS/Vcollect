import React, { useRef } from 'react';

const UpdateDetails = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const salaryRef = useRef<HTMLInputElement>(null);
  const maritalStatusRef = useRef<HTMLSelectElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const salary = salaryRef.current?.value;
    const maritalStatus = maritalStatusRef.current?.value;
    const age = ageRef.current?.value;
    const email = emailRef.current?.value;
    console.log(`Submitted: ${firstName} ${lastName} ${salary} ${maritalStatus} ${age} ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" ref={firstNameRef} required />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" ref={lastNameRef} required />

      <label htmlFor="salary">Salary:</label>
      <input type="number" id="salary" ref={salaryRef} required />

      <label htmlFor="maritalStatus">Marital Status:</label>
      <select id="maritalStatus" ref={maritalStatusRef} required>
        <option value="">-- Select --</option>
        <option value="single">Single</option>
        <option value="married">Married</option>
        <option value="divorced">Divorced</option>
      </select>

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" ref={ageRef} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" ref={emailRef} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UpdateDetails;