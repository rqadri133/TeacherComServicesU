import React , { useState  } from "react";

function Panel({ title, children }) {
    const [isActive, setIsActive] = useState(false);
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={() => setIsActive(true)}>
            Click to see Important Update
          </button>
        )}
      </section>
    );
        }


        export default Panel;