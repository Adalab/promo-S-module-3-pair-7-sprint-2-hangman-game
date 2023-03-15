const Form = ({ handleOnChange, valueInput }) => {
  const handleInputOnChange = (ev) => {
    handleOnChange(ev.target.value)
  }
  return (
    <form className="form">
      <label className="title" htmlFor="last-letter">Escribe una letra:</label>
      <input
        autocomplete="off"
        className="form__input"
        maxlength="1"
        type="text"
        name="last-letter"
        id="last-letter"
        onChange={handleInputOnChange}
        value={valueInput}
      />
    </form>
  )
}
export default Form