
import React from 'react';
import { useState } from 'react';

function Form() {

    let [age, setAge] = useState(0);
    let [limit, setLimit] = useState("");

    const handleChange = (e) => {
        setAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let upperCase = (220 - age) * 0.85;
        let lowerCase = (220 - age) * 0.65;

        setLimit(lowerCase + "-" + upperCase);
    }





  return (
    <div className="w-10/12 mx-auto mt-10"> 
        <h1 className='text-black font-bold text-3xl'> Heart Rate Limits! </h1>

        <form onSubmit={handleSubmit}>
            <div className='form-group mt-10 mb-5'>
                <label htmlFor="age" className='mb-10 text-black text-xl font-bold'> Age: </label>
                <input type="number" name="age" placeholder='Enter your age...' onChange={handleChange} className='input input-lg w-full bg-gray-500 focus:outline-0'/>
            </div>

            <div className='form-group mt-10 mb-5'>
                <label htmlFor="limit" className='mb-10 text-black text-xl font-bold'> Heart rate limits: </label>
                <input type="text" name="limit" value={limit} className='input input-lg w-full bg-gray-500 focus:outline-0' readOnly/>
            </div>

            <button type='submit' className='btn btn-lg text-white bg-sky-500'> Calculate </button>
        </form>
    </div> 
  )
}

export default Form