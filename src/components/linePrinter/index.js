import React from 'react';

const line = ({i, key, label, depth=0, array=false}) => <div className="line" key={i}>
  <div className={depth === 0 ? "n_line" : "n_line moved"}>{i}</div>
  <div className={"key_text"+depth}>{key}</div>
  {key === "" ? null : <div className="dots">:</div>}
  {array ? <div className="dash"> - </div> : null}
  <div className="label_text">{label}</div>
</div>;

const printLinesDepth = (info, key, i, depth) => 
<div key={key + i}> 
  {line({"i": i++, "key": key, "label": "", "depth": depth})}
  {Object.keys(info).map(subkey => 
    line({"i": i++, "key": info instanceof Array ? "" : subkey, "label": info[subkey], "depth": depth + 1, "array": info instanceof Array }) )}
</div>;
 

const printLines = (info, i, depth=0) => Object.keys(info).map((key) =>
  typeof info[key] === "string" ?  line({"i": i++, "key": key, "label": info[key], "depth": depth}) : 
  <div key={key + i}> 
    {line({"i": i++, "key": key, "label": ""})}
    {Object.keys(info[key]).map(subkey => typeof info[key][subkey] === "string" ?
      line({"i": i++, "key": info[key] instanceof Array ? "" : subkey, "label": info[key][subkey], "depth": depth + 1, "array": info[key] instanceof Array })
      : printLinesDepth(info[key][subkey], subkey, i, depth + 1) )}
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
