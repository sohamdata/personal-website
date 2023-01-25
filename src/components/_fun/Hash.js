import { useState } from 'react';
import CryptoJS from 'crypto-js';
import styles from './styles';

export default function Hash() {
  // state mgmt
  const [textToHash, setTextToHash] = useState('');

  // hashing algorithms to use
  const hashes = ['SHA1', 'SHA224', 'SHA256', 'RIPEMD160', 'MD5'];

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Hash Converter</header>
      <br />
      <p style={styles.itemParagraph}>Enter a text value, and you can see the various hash outputs.</p>
      <br />
      <input
        style={styles.input}
        placeholder="Enter text..."
        value={textToHash}
        onChange={e => setTextToHash(e.target.value)}
      />
      {hashes.map((hash, i) => (
        <div key={`${i}`} style={styles.codeBlock}>
          <code>
            <span style={{ color: 'red' }}>
              {hash}(<span style={{ color: 'yellow' }}>'{textToHash}'</span>) ={' '}
            </span>
            {CryptoJS[hash](textToHash).toString(CryptoJS.enc.Hex)}
          </code>
        </div>
      ))}
    </div>
  );
}