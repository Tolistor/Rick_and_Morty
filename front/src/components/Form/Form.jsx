import "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";


const Form = ({login})=> { 
    // creamo un estado local
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    //inicializamos un estado de errores
    const [errors, setErrors] = useState({
        username : "",
        password : "",
    })


    //manejador de login
    const handleImputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
    })

    //capturamos error y validamos
    setErrors(validation({
        ...userData,
        [event.target.name] : event.target.value
    }))   

    }

    //manejador de permisos valida el login y deja netrar o no
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData);
    }



return (

    <form onSubmit={handleSubmit}>

        <label 
            htmlFor="username" 
            >UserName
        </label>
        {/* le damos el valor user name y le pasamos el manejador */}
        <input 
            type="text" 
            name="username" 
            value={userData.username} 
            onChange={handleImputChange} >
        </input>
        {/* mostramos error */}
        {errors.username && <p style={{color:"red"}}>{errors.username}</p>}

        <br/>

        <label 
            htmlFor="password"
            >Password
        </label>
        {/* le damos el valor password y le pasamos le manejador */}
        <input 
            type="password"  
            name="password" 
            value={userData.password} 
            onChange={handleImputChange}>
        </input>

        {/* mostramos mensaje de error */}
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

        <hr/>

        <button>Ingresar</button>
    </form>

)

}

export default Form;