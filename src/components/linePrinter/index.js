import React from 'react';

const line = ({i, key, label, depth=0, array=false}) => <div className="line" key={i}>
  <div className="n_line">{i}</div>
  <div className={depth === 0? "key_text": "key_text moved"}>{key}</div>
  {key === "" ? null : <div className="dots">:</div>}
  {array ? <div className="dash"> - </div> : null}
  <div className="label_text">{label}</div>
</div>;

const printLines = (info, i) => Object.keys(info).map((key) =>
  typeof info[key] === "string" ?  line({"i": i++, "key": key, "label": info[key]}) : 
  <div key={i}> 
    {line({"i": i++, "key": key, "label": ""})}
    {Object.keys(info[key]).map((subkey) => line({"i": i++, "key": info[key] instanceof Array ? "" : subkey, "label": info[key][subkey], "depth":1, "array": info[key] instanceof Array }))}
  </div>  
);

const LinePrinter = ({info}) => {
  let i=1;
  return (
    <div className="page">
        {printLines(info, i)}
    </div>
  );
};

export default LinePrinter;
