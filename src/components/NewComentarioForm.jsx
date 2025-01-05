import {useState} from "react";
import PropTypes from "prop-types";

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
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="comentario">Comentário</label>
                <textarea
                    id="comentario"
                    name="comentario"
                    placeholder="Digite seu comentário"
                    required
                    value={comentario}
                    onChange={(event) => setComentario(event.target.value)}
                >

              </textarea>
            </div>
            <button type="submit">Enviar Comentário</button>
        </form>
    )
}
