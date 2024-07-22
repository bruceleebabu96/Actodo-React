import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props) {

    const Navigate = useNavigate()
    const users = props.users
    const setUsers = props.setUsers
   
    const [inputUser, setInputUser] = useState()
    const [inputPassword, setInputPassword] = useState()

    function userHandle(evt) {
        setInputUser(evt.target.value)
    }
    function passwordHandle(evt) {
        setInputPassword(evt.target.value)
    }


    function addUser()
    {

        setUsers([...users, 
            {name: inputUser,
            password: inputPassword
         }])

         Navigate("/")
    }
    return (
        <>


            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 rounded-md">
                    <h1 className="text-2xl font-medium">Hey Hi</h1>
                    <p>you can Singnup here:)</p>
                    <div className="flex flex-col gap-2">
                        <input className="border border-black p-2 w-52 rounded-md bg-transparent"
                            type="text"
                            placeholder="enter your username" onChange={userHandle} />
                        <input className="border border-black p-2 w-52 rounded-md bg-transparent" type="text" placeholder="enter your password" onChange={passwordHandle}/>
                        <input className="border border-black p-2 w-52 rounded-md bg-transparent" type="text" placeholder="Confirm your password" />
                        <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign up</button>
                    </div>
                    <p>You have an accoun? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </>

    )
}

export default Signup