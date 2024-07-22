import { useState } from "react"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props) {

    const Navigate = useNavigate ()

    const users = props.users
    const setUsers = props.setUsers

    const [inputUser, setInputUser] = useState()
    const [inputPassword, setInputPassword] = useState()

    const [rUser, setrUser] = useState(true)

    
    function userHandle(evt) {
        setInputUser(evt.target.value)
    }
    function passwordHandle(evt) {
        setInputPassword(evt.target.value)
    }

    function checkUser() {

        var userfound = false
        users.forEach(function (item) {

            if (item.name === inputUser && item.password === inputPassword) {

                console.log("login success")
                userfound = true
                Navigate ("/landing", {state:{user: inputUser}})
            }



        }
        )
        if (userfound == false) {
            setrUser(false)
            console.log("login filed")
        }
    }

    return (
        <>
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 rounded-md">
                    <h1 className="text-2xl font-medium">Hey Hi</h1>
                    {rUser ? <p>I help you manage your activities after you login</p> : <p className="text-red-600">Please Sign up first</p>}

                    <div className="flex flex-col gap-2">
                        <input value={inputUser} onChange={userHandle} className="border border-black p-2 w-52 rounded-md bg-transparent"
                            type="text"
                            placeholder="enter your username" />
                        <input value={inputPassword} onChange={passwordHandle} className="border border-black p-2 w-52 rounded-md bg-transparent" type="text" placeholder="enter your password" />

                        <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 rounded-md">Login</button>
                    </div>
                    <p>Don't have an accoun? <Link to={"/signup"} className="underline">Sign up</Link></p>
                </div>
            </div>

        </>

    )
}

export default Login