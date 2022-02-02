import './App.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addressLineOne, setAddressLineOne] = useState('')
  const [addressLineTwo, setAddressLineTwo] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')

  const [newEmail, setNewEmail] = useState('')

  const [recordsList, setRecordsList] = useState([])

  function AddRecord() {
    Axios.post(('http://localhost:3001/add'), {
      firstName: firstName,
      lastName: lastName,
      addressLineOne: addressLineOne,
      addressLineTwo: addressLineTwo,
      city: city,
      state: state,
      postalCode: postalCode,
      contactNumber: contactNumber,
      email: email
    }).then(() => console.log('Success'))

  }

  function listRecords() {
    Axios.get('http://localhost:3001/records').then((response) => {
      console.log(response.data)
      setRecordsList(response.data)
    }) 
  }

  function updateRecord(id) {
    Axios.put(('http://localhost:3001/update'), { email: newEmail, id: id }).then(
      (response) => {
        setRecordsList(recordsList.map((val) => {
          return val.id === id ? {id: val.id, firstName: val.firstName, lastName: val.lastName, addressLineOne: val.addressLineOne, addressLineTwo: val.addressLineTwo, city: val.city, state: val.state, postalCode: val.postalCode, email: newEmail} : val
        }))
      })
    }

  function deleteRecord(id) {
    Axios.delete((`http://localhost:3001/delete/${id}`))

  }

  return (
    <div className="App">
      <div className='information'>

        <label>First Name:</label>
        <input type='text' onChange={(e) => setFirstName(e.target.value)}></input>

        <label>Last Name:</label>
        <input type='text' onChange={(e) => setLastName(e.target.value)}></input>

        <label>Address Line One:</label>
        <input type='text' onChange={(e) => setAddressLineOne(e.target.value)}></input>

        <label>Address Line Two:</label>
        <input type='text'onChange={(e) => setAddressLineTwo(e.target.value)}></input>

        <label>City:</label>
        <input type='text'onChange={(e) => setCity(e.target.value)}></input>

        <label>State:</label>
        <input type='text' onChange={(e) => setState(e.target.value)}></input>

        <label>Postal Code:</label>
        <input type='text'onChange={(e) => setPostalCode(e.target.value)}></input>

        <label>Contact Number:</label>
        <input type='text' onChange={(e) => setContactNumber(e.target.value)}></input>

        <label>Contact Email:</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)}></input>

        <button onClick={AddRecord}>Submit</button>

        <div className='records'>
          
          <button onClick={listRecords}>Show All Records</button>

          {recordsList.map((val, key) => {
          return (

          <div className='record'>
            <div>
            <h3> First Name: { val.firstName } </h3>
            <h3> Last Name: { val.lastName } </h3>
            <h3> Address Line One: { val.addressLineOne } </h3>
            <h3> Address Line Two: { val.addressLineTwo } </h3>
            <h3> City: { val.city } </h3>
            <h3> State: { val.state } </h3>
            <h3> Postal Code: { val.postalCode } </h3>
            <h3> Contact Number: { val.contactNumber } </h3>
            <h3> Email: { val.email } </h3>
            <h3> ID: {val.id} </h3>

            <div>
              <input onChange={(e) => {setNewEmail(e.target.value)}} type='text' placeholder='500'></input>
              <button onClick={() => {updateRecord(val.id)}}>Update</button>
              <button onClick={() => {deleteRecord(val.id)}}>Delete</button>

            </div>
            </div>
          </div>
  
          )

          })}

        </div>
     </div>
    </div>
  );
}

export default App;
