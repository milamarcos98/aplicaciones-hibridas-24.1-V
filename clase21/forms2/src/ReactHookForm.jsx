import React, {useRef} from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const ReactHookForm = () => {
    const schema = yup.object().shape({
        nombre: yup.string().required("name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(3).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords disintos!").required()
    })


    const {watch, handleSubmit, register, formState: {errors}} = useForm({resolver: yupResolver(schema)})

//    const {watch, handleSubmit, register, formState: {errors}} = useForm({
//         defaultValues: {
//             nombre: "",
//             email: "",
//             fechaNacimiento: "",
//             password: "",
//             confirmPassword: "",
//             pais: "ar",
//             aceptarTerminos: false
//         }
//     })
    console.log(errors)
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    const password = useRef(null)
    password.current = watch("password")
  return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Nombre:</label>
            <input type="text" name='nombre' {...register("nombre", {required: {value: true, message: "Nombre es obligatorio"}, maxLength: 20, minLength: 3})}/>
            {errors.nombre?.type === "required" && errors.nombre.message}
            {errors.nombre?.type === "maxLength" && (<span>Nombre debe ser menor a 20 caracteres</span>)}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name='email'{...register("email",{required: {value: true, message: "Email es obligatorio"}, pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Email no valido"
            }} )}/>
        </div>
        <div>
            <label>Fecha de nacimiento:</label>
            <input type="date" name='fechaNacimiento' {...register("fechaNacimiento", {
                required: {value: true, message: "fechaNacimiento es obligatorio"},
                validate: (value) => {
                    const fechaNacimiento = newDate(value);
                    const fechaActual = newDate();
                    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
                    return edad >= 18 || "Debes ser mayor de edad"
                }
            })}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name='password' {...register("password")}/>
        </div>
        <div>
            <label>Confirm Password:</label>
            <input type="password" name='confirmPassword' {...register("confirmPassword", {
                required: {value: true, message: "confirmPassword es obligatorio"},
                validate: (value) => {
                    value === password.current || "Los password son distintos"
                }
            })}/>
        </div>
        <div>
            <label>Pais:</label>
            <select name="pais" id="pais">
                <option value="ar">Argentina</option>
                <option value="mx">Mexico</option>
                <option value="co">Colombia</option>
            </select>
        </div>
        <div>
            <input type="checkbox" name="aceptarTerminos" id="" />
            <label>Aceptar los temrinos y condiciones.</label>
        </div>
        <button type='submit'>Enviar</button>
        <h3>Hello {watch("nombre")}</h3>
        <pre style={{width: "400px"}}>
            {JSON.stringify(watch())}
        </pre>
    </form>
  )
}

export default ReactHookForm