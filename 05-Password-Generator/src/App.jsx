import { useEffect, useCallback, useRef, useState } from 'react'
import './App.css'

function App() {
  const [passLength, setPassLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [sCharatersAllowed, setSCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '1234567890';
    if (sCharatersAllowed) str += '!@#$%^&*()_+';

    for (let i = 1; i < passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, numberAllowed, sCharatersAllowed, setPassword]);

  // const copyToClipBoard = useCallback(() => {
  //   passRef.current?.select();
  //   passRef.current?.setSelectionRange(0, 4);
  //   window.navigator.clipboard.writeText(password);
  // }, [password])

  const copyPassword = () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => { passwordGenerator() }, [passLength, numberAllowed, sCharatersAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white my-3'> Password Generator </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full py-1 px-3'
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={50}
              value={passLength}
              className='cursor-pointer'
              onChange={(event) => setPassLength(event.target.value)}
            />
            <label>Length: {passLength}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="numberCheckbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberCheckbox">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              id="characters"
              defaultChecked={sCharatersAllowed}
              onChange={() => setSCharacterAllowed(prev => !prev)}
            />
            <label htmlFor="characters" >Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
