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
    }else if(e.target.name === "divdo"){
      setDivdo(e.target.value)
    } if(e.target.name === "cant") {
        setCant(e.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let x = parseFloat(e.target.value3);
    let x2 = 0;
    if (divun === "MXN") {
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
      if (divdo === "USD") {
        x2 = 0.059;
      } else if (divdo === "EUR") {
        x2 = 0.06;
      } else if (divdo === "BTC") {
        x2 = 0.0000031;
      } else if (divdo === "mxn") {
        x2 = 1.18;
      }
    }
    let x3 = x * x2;
    setRes(x3);
  };
  const options = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "DOGE", label: "DOGE" },
  ];

  return (
    <form action="" onSubmit={onSubmit}>
      <p>Cantidad total: {resultado}</p>
      <p>div 1: {cant}</p>
      <p>div 1: {divun}</p>
      <p>div 2: {divdo}</p>


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
        value={divun}
        onChange={onChange}
        defaultValue={"MXN "}>
          
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">WTH</option>
            <option value="DODGE">DODGE</option>
        </select>
        <select
        value={divdo}
        onChange={onChange}
        defaultValue={"MXN "}>
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