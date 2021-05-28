import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(10);

  //   Forma 1 de asignar estados
  const aumentar = () => {
    setContador((actual) => actual + 1);
  };
  //   Forma 2 de asignar estados
  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador} </h1>
      <hr />

      <button onClick={aumentar}>Increase</button>
      <button onClick={disminuir}>Decrease</button>
    </div>
  );
};

export default Contador;
