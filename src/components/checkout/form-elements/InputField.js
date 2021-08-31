import Error from "../Error";
import PropTypes from 'prop-types';
import Abbr from "./Abbr";

const InputField = ({ handleOnChange, inputValue, name, type, label, errors, placeholder, required, containerClassNames, isShipping }) => {

    const inputId = `${name}-${isShipping ? 'shipping' : ''}`;
    return (
        <div className={containerClassNames}>
            <label className="leading-7 text-sm text-gray-700" htmlFor={inputId}>
                { label || '' }
                <Abbr required={required}/>
            </label>
            <input
                onChange={ handleOnChange }
                value={ inputValue }
                placeholder={placeholder}
                type={type}
                name={name}
                className="p-3 font-hk font-weight-400 w-full bg-opacity-50 checkout-border text-base outline-none theme color-footer-color-1 font-hk leading-8 transition-colors duration-200 ease-in-out"
                id={inputId}
            />
            <Error errors={ errors } fieldName={ name }/>
        </div>
    )
}

InputField.propTypes = {
    handleOnChange: PropTypes.func,
    inputValue: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    errors: PropTypes.object,
    required: PropTypes.bool,
    containerClassNames: PropTypes.string
}

InputField.defaultProps = {
    handleOnChange: () => null,
    inputValue: '',
    name: '',
    type: 'text',
    label: '',
    placeholder: '',
    errors: {},
    required: false,
    containerClassNames: ''
}

export default InputField;