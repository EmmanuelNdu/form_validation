import {React, useState} from 'react'

const FormWithout = () => {
    const [formData, setFormData] = useState ({
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        age:"",
        gender:"",
        interests:"",
        birthDate:"",
    });

    const handleSubmit = () =>{};

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value,
        })
    };

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        let updatedInterests = [...formData.interests];
        if (checked) {
            updatedInterests.push(name);
        } else {
            updatedInterests = updatedInterests.filter(
                (interest) => interest !== name
            );
        }
    };
    

  return (
    <form className='form' onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
        <input 
        type="text"
        name="firstname"
        value={formData.firstname}
        placeholder="Enter your First Name"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Last Name</label>
        <input 
        type="text"
        name="lastname"
        value={formData.lastname}
        placeholder="Enter your First Name"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Email</label>
        <input 
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your Email"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Phone Number</label>
        <input 
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        placeholder="Enter your Phone Number"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Password</label>
        <input 
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter your Password"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Confirm Password</label>
        <input 
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        placeholder="Confirm your Password"
        onChange={handleChange}
        />
        </div>
        <div>
         <label>Age</label>
        <input 
        type="number"
        name="age"
        value={formData.age}
        placeholder="Enter your Age"
        onChange={handleChange}
        />
        </div>
        <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender}  onChange={handleChange}>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
            </select>
        </div>
        <div>
            <label>Interest:</label>
            <label>
                <input 
                type="checkbox"
                name='coding'
                checked={formData.interests.includes("coding")}
                onChange={handleCheckboxChange}
                />
                Coding
            </label>
            <label>
                <input 
                type="checkbox"
                name='sports'
                checked={formData.interests.includes("sports")}
                onChange={handleCheckboxChange}
                />
                Sports
            </label>
            <label>
                <input 
                type="checkbox"
                name='reading'
                checked={formData.interests.includes("Reading")}
                onChange={handleCheckboxChange}
                />
                Reading
            </label>
        </div>
        <div>
            <label>Date of Birth</label>
           <input 
           type='date'
           name='birthDate'
           value={formData.birthDate}
           placeholder='Enter Your Date of Birth'
           onChange={handleChange}
           />
        </div>
        <button type='submit' >Submit</button>
    </form>
  )
}

export default FormWithout