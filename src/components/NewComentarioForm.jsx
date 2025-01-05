import {useState} from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput.jsx";

NewComentarioForm.prototype = {
    addComentario: PropTypes.func
}

export default function NewComentarioForm({addComentario}) {
    const [comentario, setComentario] = useState("");
    const [email, setEmail] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault()
        addComentario(comentario, email)
        setEmail("")
        setComentario("")
    }

    return (
        <form onSubmit={handleFormSubmit}>

            <TextInput
                value={email}
                setValue={setEmail}
                labalText="E-mail"
                inputType="email"
                placeholder="Digite seu e-mail" />

            <TextInput
                value={comentario}
                setValue={setComentario}
                labalText="Comentário"
                inputType="text"
                placeholder="Digite seu comentário" />

            <button type="submit">Enviar Comentário</button>
        </form>
    )
}
