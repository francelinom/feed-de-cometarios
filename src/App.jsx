import {useState} from "react";

function App() {
    const [comentario, setComentario] = useState("")
    const [email, setEmail] = useState("")

    const [formulario, setFormulario] = useState(() => {
        const storedComentario = localStorage.getItem("obc-comentario");
        if (!storedComentario) return [];
        return JSON.parse(storedComentario);
    })

    const addComentario = (comentario, email) => {
        const id = Math.floor(Math.random() * 10000);
        const timestamp = new Date().toLocaleString(); // Captura a data e hora atual
        const savedData = { timestamp };

        const forms = {id, savedData, comentario, email};
        setFormulario(state => {
            const newState = [...state, forms];
            localStorage.setItem("obc-comentario", JSON.stringify(newState));
            return newState;
        })
    }


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
