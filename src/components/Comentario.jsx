import PropTypes from "prop-types";

Comentario.prototype = {
    email: PropTypes.string,
    comentario: PropTypes.string,
    timestamp: PropTypes.string
}

export default function Comentario({email, comentario, timestamp}) {
    return (
        <li style={{marginBottom: "15px", borderBottom: "1mm solid black"}}>
            <strong>Email:</strong> {email}
            <br/>
            salvo em: {timestamp}
            <br/>
            <strong>Comentário:</strong> {comentario}
        </li>
    )
}
