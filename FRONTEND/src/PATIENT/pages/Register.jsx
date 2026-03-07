import { useState } from 'react'

function Patient() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    location: '',
    height: '',
    weight: '',
    gender: '',
    bloodGroup: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({
      name: '',
      dob: '',
      location: '',
      height: '',
      weight: '',
      gender: '',
      bloodGroup: ''
    })
    alert('form submitted successfully')
  }

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
        <label>Patient Information</label><br/>
        <label>Name :</label>
      <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name'  required/><br/>
      <label>Date of Birth :</label>
      <input type='date' name='dob' value={formData.dob} onChange={handleChange} required/><br/>
      <label>Location :</label>
      <input type='text' name='location' value={formData.location} onChange={handleChange} placeholder='Enter your location' required/><br/>
      <label>Height :</label>
      <input type='number' name='height' value={formData.height} onChange={handleChange} placeholder='Enter your Height' required/><br/>
      <label>Weight :</label>
      <input type='number' name='weight' value={formData.weight} onChange={handleChange} placeholder='Enter your Weight' required/><br/>
      <label>Gender :</label>
      <input type='text' name='gender' value={formData.gender} onChange={handleChange} placeholder='Gender' required/><br/>
      <label>Blood Group :</label>
      <input type='text' name='bloodGroup' value={formData.bloodGroup} onChange={handleChange} placeholder='Enter your Blood Group' required/><br/>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
export default Patient;