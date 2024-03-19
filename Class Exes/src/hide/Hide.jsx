import { useState } from "react";


function Hide() {
  const [hide, setHide] = useState(false);
  const [name, setName] = useState(null);

  const handleName = (ev) => {
    let input = ev.target.value;
    setName(input);
  };

  return (
    <>
      <div className="Hide">
        <button onClick={() => setHide(!hide)}>Hide text now!</button>
        {!hide && (
          <p>
            You can read this text, but if you click the button it should
            disappear. Forever.
          </p>
        )}
      </div>
      <div>
        <input
          value={name}
          onChange={(event) => handleName(event)}
        />
      </div>
      <h2>-{name}-</h2>
    </>
  );
}
export default Hide;



