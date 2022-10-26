import React, { useState } from "react";

const FormDivisa = () => {
  const [cant, setCant] = useState("");
  const [divun, setDivun] = useState("");
  const [divdo, setDivdo] = useState("");
  const [resultado, setRes] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "divun") {
      setDivun(e.target.value);
    } else if (e.target.name === "divdo") {
      setDivdo(e.target.value);
    }
    if (e.target.name === "cant") {
      setCant(e.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let x = parseFloat(cant);
    let x2 = 0;
    if (divun === "MXN") {
      if (divdo === "MXN") {
        x2 = 1;
      }
      if (divdo === "USD") {
        x2 = 0.05;
      } else if (divdo === "EUR") {
        x2 = 0.051;
      } else if (divdo === "BTC") {
        x2 = 0.0000026;
      } else if (divdo === "DOGE") {
        x2 = 0.85;
      }
    } else if (divun === "USD") {
      if (divdo === "USD") {
        x2 = 1;
      }
      if (divdo === "MXN") {
        x2 = 19.93;
      } else if (divdo === "EUR") {
        x2 = 1.01;
      } else if (divdo === "BTC") {
        x2 = 0.000052;
      } else if (divdo === "DOGE") {
        x2 = 16.92;
      }
    } else if (divun === "EUR") {
      if (divdo === "EUR") {
        x2 = 1;
      }
      if (divdo === "USD") {
        x2 = 0.99;
      } else if (divdo === "MXN") {
        x2 = 19.67;
      } else if (divdo === "BTC") {
        x2 = 0.000051;
      } else if (divdo === "DOGE") {
        x2 = 16.7;
      }
    } else if (divun === "BTC") {
      if (divdo === "BTC") {
        x2 = 1;
      }
      if (divdo === "USD") {
        x2 = 19329.8;
      } else if (divdo === "EUR") {
        x2 = 19580.22;
      } else if (divdo === "MXN") {
        x2 = 385282.54;
      } else if (divdo === "DOGE") {
        x2 = 327142.37;
      }
    } else if (divun === "DOGE") {
      if (divdo === "DOGE") {
        x2 = 1;
      }
      if (divdo === "USD") {
        x2 = 0.059;
      } else if (divdo === "EUR") {
        x2 = 0.06;
      } else if (divdo === "BTC") {
        x2 = 0.0000031;
      } else if (divdo === "MXN") {
        x2 = 1.18;
      }
    } else if (divun === "ETH") {
      if (divdo === "ETH") {
        x2 = 1;
      }
      if (divdo === "USD") {
        x2 = 1564.3;
      }else if (divdo === "EUR") {
        x2 = 1552.4;
      }else if (divdo === "EUR") {
        x2 = 23.1;
      } else if (divdo === "BTC") {
        x2 = 0.074920;
      } else if (divdo === "MXN") {
        x2 = 31.06;
      }
      
    }
    let x3 = x * x2;
    setRes(x3);
    console.log(divun);
    console.log(divdo);
    console.log(cant);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Cantidad total: {resultado}</p>
      <p>Cantidad a convertir: {cant}</p>
      <p>Divisa por convertir: {divun}</p>
      <p>Divisa a convertrir {divdo}</p>

      <div>
        <label htmlFor="cant">Cantidad a cambiar</label>
        <input
          type="text"
          name="cant"
          id="cant"
          value={cant}
          onChange={onChange}
        />
      </div>
      <div>
        <select
          id="divun"
          name="divun"
          value={divun}
          onChange={onChange}
        >
          <option value="MXN">MXN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">WTH</option>
          <option value="DODGE">DODGE</option>
        </select>
        <select
          id="divdo"
          name={"divdo"}
          value={divdo}
          defaultValue={divdo}
          onChange={onChange}
        >
          <option value="MXN">MXN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">WTH</option>
          <option value="DODGE">DODGE</option>
        </select>
      </div>
      <button>Cambiar</button>
    </form>
  );
};
export default FormDivisa;
