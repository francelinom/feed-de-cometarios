import PropTypes from "prop-types";

TextInput.prototype = {
    labalText: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
}

export default function TextInput({labalText, inputType, placeholder, value, setValue}) {
    return (
        <div className="form-group">
            <label htmlFor={labalText}>{labalText}</label>
            <input
                type={inputType}
                id={labalText}
                name={labalText}
                placeholder={placeholder}
                required
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}
