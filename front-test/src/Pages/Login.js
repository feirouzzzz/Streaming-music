import React from 'react'

function Login() { 
  return (
    <div className='bg-gray-600 py-20 text-white bg-gradient-to-r from-indigo-500 '>
        <div className='bg-black py-6 pb-12 w-2/5 mx-auto rounded-md'>
            <img src="../logo.png" className='w-16 mx-auto' alt='logo' />
            <h1 className='   text-2xl py-6 text-center font-bold'>Login to Spotify</h1>
            <form className='px-40' >
                <div>
                    <label > Email</label>
                    <br></br>
                    <input type='email' className='w-full bg-transparent border py-2 px-4 rounded-md mt-1.5'placeholder='Enter email' />
                    
                </div>
                <div className='mt-6'>
                    <label > Password</label>
                    <br></br>
                    <input type='password' className='w-full bg-transparent border py-2 px-4 rounded-md mt-1.5'placeholder='Enter password' />
                    
                </div>
                <button className='bg-purple-500 w-full mt-12 rounded-full py-3 font-medium'>Log in</button>
            </form>
                <h1 className='text-center mt-10 underline'> Forget your password? </h1>
                <div className='flex items-center justify-center space-x-2 mt-4'>
                    <p> Don't have an account? </p>
                    <a className=' underline'> Sign up for Spotify </a>
                </div>

        </div>
    </div>
  )
}

export default Login