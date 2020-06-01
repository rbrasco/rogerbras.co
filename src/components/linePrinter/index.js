import React from 'react';
import { isMobile } from 'react-device-detect';
import { withRouter } from 'react-router-dom';

let i = 1;

const line = ({ i, key, label, depth = 0, array = false }) => <div className="line" key={i}>
  <div className={depth === 0 ? 'n_line' : 'n_line moved'}>{i}</div>
  <div className={'key_text' + depth}>{key}</div>
  {key === '' ? null : <div className="dots">:</div>}
  {array ? <div className="dash"> - </div> : null}
  <div className={isMobile ? 'label_text lt_mobile' : 'label_text'}>{label}</div>
</div>;

const printLinesDepth = (info, key, depth) =>
  <div key={key + i}>
    {line({ 'i': i++, 'key': key, 'label': '', 'depth': depth })}
    {Object.keys(info).map(subkey =>
      line({ 'i': i++, 'key': info instanceof Array ? '' : subkey, 'label': info[subkey], 'depth': depth + 1, 'array': info instanceof Array }))}
  </div>;

const printLines = (info, depth = 0) => Object.keys(info).map((key) =>
  typeof info[key] === 'string' ?  line({ 'i': i++, 'key': key, 'label': info[key], 'depth': depth })
    : <div key={key + i}>
      {line({ 'i': i++, 'key': key, 'label': '' })}
      {Object.keys(info[key]).map(subkey => typeof info[key][subkey] === 'string'
        ? line({ 'i': i++, 'key': info[key] instanceof Array ? '' : subkey, 'label': info[key][subkey], 'depth': depth + 1, 'array': info[key] instanceof Array })
        : printLinesDepth(info[key][subkey], subkey, depth + 1))}
    </div>,
);

const LinePrinter = ({ info }) => {

  i = 1;

  return (
    <div className={isMobile ? 'page pmobile' : 'page'}>
      {printLines(info)}
      {line({ 'i': i++, 'key': '', 'label': '' })}
    </div>
  );

};

export default withRouter(LinePrinter);
