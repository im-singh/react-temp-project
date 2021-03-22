import React, { useState, useEffect } from 'react';

function HooksPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    console.log(name);
  }, [name])

  useEffect(() => {
    console.log(phone);
  }, [phone])
  const hd = (e) => {
    let value = e.target.value
    // always a string
    // console.log(typeof (value),value);
    setPhone(value);
  }

  return (
    <div>
      <p>hooks page</p>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
      <br />
      <input type="number" value={phone} onChange={hd} placeholder="phone" />

    </div>
  );
}
export default HooksPage;