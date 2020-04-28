import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  // const citrus =["lime", "lemon", "orange"];
  // const fruits =["Apple", "banana", "watermelon", ...citrus];
  // fruits =["Apple", "banana", "watermelon", "lime", "lemon", "orange"]

  // const fullName ={firstName :"chamoda", lastName:"gamage"}
  // const user ={...fullName, id:1, username:"chamoda123"}
  // user = {firstName :"chamoda", lastName:"gamage" ,id:1, username:"chamoda123}

  function handleOnchange(event) {
    const { value, name } = event.target;
    // setContact(prevValue => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName:prevValue.fName,
    //       lName:value,
    //       email:prevValue.email
    //     }
    //   } else if (name === "email"){
    //     return {
    //       fName : prevValue.fName,
    //       lName : prevValue.lName,
    //       email : value
    //     }
    //   }
    // });

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleOnchange}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleOnchange}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleOnchange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
