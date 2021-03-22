import React, { useEffect, useState } from 'react';

function UserDetails() {
  const [inputText, setInput] = useState('')
  const [inputText2, setInput2] = useState('');

  useEffect(() => {
    console.log("usse effect userDEtails")
  }, [])

  // useEffect(() => {
  //   // let mtime = setTimeout(() => {
  //   //   console.log("api hit");

  //   //   console.log(inputText);
  //   // }, 4000)
  //   console.log("input1: ", inputText);
  //   console.log("input2: ", inputText2);

  //    return () => {
  //     //  clearTimeout(mtime);
  //    };
  // },[inputText])

  return (
    <>
      <p>Text: {inputText}</p>
      <p>Text2: {inputText2}</p>

      <input type="text" value={inputText} onChange={(e) => setInput(e.target.value)} />
      <input type="text" value={inputText2} onChange={(e) => setInput2(e.target.value)} />

    </>
  );
}

export default UserDetails;