import {useState} from "react";

export default function useComentarioColletions() {
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

    return {formulario, addComentario};
}
