const Button = ({ buttonText, color="purple", onClick }) => {
    return <button 
    onClick={onClick}
    style={{ color: 'white', backgroundColor: color, height: 50, width: 200 }}
    >{buttonText}</button>
}

export default Button