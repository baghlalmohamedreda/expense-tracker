"use client"
import { Button } from "../../components/ui/button"
import Image from 'next/image'
import { useState } from "react"

function LoginForm() {
    const [email ,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errp,setErrp]=useState("")
    const [erre,setErre]=useState("")
    function handlesubmit(e){
        e.preventDefault()
        if(!email.trim() ){
            setErre("vous dever remplir  le champ d'email")
        }
         if(!password.trim()){
            setErrp("vous devez remplir le champs de password")

        }
       

        




    }

  return (
    <div>
         <Image src='/logo.svg'
                       alt='logo'
                       width={55}
                       height={60}
                       className="mb-6"
                       
                       />
         <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Welcome back </h1>     
         <p className="mt-2 text-sm text-gray-500 mb-8"> login to your account</p> 
         <form className="mt-8 w-full max-w-md space-y-5"
        onSubmit={handlesubmit}
         
         >
            <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                        Email
                   </label>

                   <input
                   onChange={e=>{setEmail(e.target.value); 
                                setErre("")

                   }}
                           value={email}
                           id="email"
                           type="email"
                           className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    />
                    {erre && <span className="mt-1 block text-xs font-medium text-red-500">
                        {erre}</span>}
            </div>
              <div className="space-y-2">
                   <label htmlFor="password" className="text-sm font-semibold text-gray-800">
                        Password
                   </label>

                   <input
                   onChange={e=>{setPassword(e.target.value);
                                setErrp("")
                   }}
                           value={password}
                           id="password"
                           type="password"
                           className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    />
                    {errp && <span className="mt-1 block text-xs font-medium text-red-500">
                        {errp}</span>}
            </div>
            
            <Button  className="w-full cursor-pointer rounded-lg bg-purple-600 px-4 py-2.5 font-medium text-white transition hover:bg-purple-700" type='submit'>
                Login
                
             </Button>

            </form>        

    </div>
  )
}

export default LoginForm