import {useState} from "react";
import useComentarioColletions from "./hooks/useComentarioColletions";

function App() {
    const [comentario, setComentario] = useState("")
    const [email, setEmail] = useState("")

    const {formulario, addComentario} = useComentarioColletions();

    function handleFormSubmit(event) {
        event.preventDefault()
        addComentario(comentario, email)
        setEmail("")
        setComentario("")
    }

    return (
        <>
            <div className="card">
                <h2>Enviar Comentário</h2>
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
            </div>

            <hr/>

            <div className="card">
                <h2>Comentários Salvos</h2>
                {formulario.length > 0 ? (
                        <ul style={{color: "black", listStyle: "none"}}>
                            {formulario
                                .slice()
                                .sort((a, b) => new Date(b?.savedData?.timestamp) - new Date(a?.savedData?.timestamp))
                                .map((form) => (
                                <li key={form.id} style={{marginBottom: "15px", borderBottom: "1mm solid black"}}>
                                    <strong>Email:</strong> {form.email}
                                    <br/>
                                    salvo em: {form?.savedData?.timestamp}
                                    <br/>
                                    <strong>Comentário:</strong> {form.comentario}
                                </li>
                            ))}
                        </ul>
                ) : (
                    <p style={{color: "black"}}>Nenhum comentário salvo! Seja o Primeiro a comentar</p>
                )}
            </div>

        </>
    )
}

export default App
