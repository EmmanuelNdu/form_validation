import {React, useState} from 'react'
import * as Yup from 'yup'


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

    const [errors, setErrors] = useState()
    
    const validationSchema = Yup.object({
        firstname: Yup.string().required("First Name is Required"),
        lastname: Yup.string()
        .required("Last Name is Required")
        .email("Invalid email format"),
        email: Yup.string().required("Email is Required"),
        phoneNumber: Yup.string().matches(/^\d{10}$/, "Phone Number must be 10 digits")
        .required(),
        password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be atleast 8 characters")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "password must contain atleast one symbol"
        )
        .matches(/[0-9]/, "password must contain atleast one number")
        .matches(/[a-z]/, "password must contain atleast one lowercase")
        .matches(/[A-Z]/, "password must contain atleast one uppercase"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "password must match")
        .required("confirm password is required"),
        age: Yup.number()
        .typeError("Age must be a number")
        .min(18, "You must be atleast 18 years old")
        .max(100 , "You cannot be older than 100 years old")
        .required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        interests: Yup.array()
        .min(1, "select atleast one interest")
        .required("select atleast one interest"),
        birthDate: Yup.date().required("Date of birth is required"),
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await validationSchema.validate(formData, {abortEarly: false});
            console.log("form submitted", formData);
        } catch (error) {
            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
        }
    };

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

        setFormData({
            ...formData,
            interests: updatedInterests, 
        });
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
        onChange={handleChange} errors is undefined
        /> errors is undefined
        {errors.firstname && <div className="error">{errors.firstname}</div>} error is undefined
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
        {errors.lastname && <div className="error">{errors.lastname}</div>}
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
