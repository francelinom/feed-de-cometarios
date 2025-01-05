import useComentarioColletions from "./hooks/useComentarioColletions";
import NewComentarioForm from "./components/NewComentarioForm.jsx";

function App() {
    const {formulario, addComentario} = useComentarioColletions();

    return (
        <>
            <div className="card">
                <h2>Enviar Comentário</h2>
                <NewComentarioForm addComentario={addComentario} />
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
