export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id="email"
        // below is to receive type and name attribute
        {...props}

        // two lines below removed to make this component
        // as reusable as possible.

        // onBlur={() => handleInputBlur("email")}
        // onChange={(event) => handleInputChange("email", event.target.value)}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
