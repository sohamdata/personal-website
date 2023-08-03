import { useState } from 'react';
import CryptoJS from 'crypto-js';
import styles from './styles.jsx';

function reversePairHash(inputString) {
  let reversedString = '';
  for (let i = 0; i < inputString.length - 1; i += 2) {
    reversedString += inputString[i + 1] + inputString[i];
  }
  if (inputString.length % 2 !== 0) reversedString += inputString[inputString.length - 1];
  return reversedString;
}

function scrambleHash(inputString) {
  let scrambledString = inputString.split('');
  for (let i = scrambledString.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambledString[i], scrambledString[j]] = [scrambledString[j], scrambledString[i]];
  }
  // console.log(scrambledString); 
  return scrambledString.join('');
}


function infixToPostfixString(input) {
  let output = "";
  let stack = [];
  let precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char === "(" || char === ")") {
      if (char === "(") {
        stack.push("(");
      } else {
        while (stack[stack.length - 1] !== "(") {
          output += stack.pop();
        }
        stack.pop();
      }
    } else if (char in precedence) {
      while (stack.length > 0 && precedence[char] <= precedence[stack[stack.length - 1]]) {
        output += stack.pop();
      }
      stack.push(char);
    } else {
      output += char;
    }
  }
  while (stack.length > 0) {
    output += stack.pop();
  }
  return output;
}

function hashAlgoHelper(algo, textToHash) {
  switch (algo) {
    case 'reversePairHash':
      return reversePairHash(textToHash);
    case 'scrambleHash':
      return scrambleHash(textToHash);
    case 'infixToPostfixString':
      return infixToPostfixString(textToHash);
    default:
      return CryptoJS[algo](textToHash).toString();
  }
}

export default function Hash() {
  // state mgmt
  const [textToHash, setTextToHash] = useState('');

  // hashing algorithms to use
  const hashes = ['SHA1', 'SHA224', 'SHA256', 'MD5'];
  const customHash = ['reversePairHash', 'scrambleHash', 'infixToPostfixString'];

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Hash Converter</header>
      <br />
      <p style={styles.itemParagraph}>Enter a text value, and you can see the various hash outputs.</p>
      <br />
      <input
        style={styles.input}
        placeholder="Enter text"
        value={textToHash}
        onChange={e => setTextToHash(e.target.value)}
      />
      {hashes.concat(customHash).map((hash, i) => (
        <div key={`${i}`} style={styles.codeBlock}>
          <code>
            <span style={{ color: 'red' }}>
              {hash}(<span style={{ color: 'yellow' }}>'{textToHash}'</span>) ={' '}
            </span>

            {textToHash.toLowerCase() === 'france' ? 'aint no way' :
              textToHash === '69' ? 'nice' :
                (
                  <span style={{ color: 'green' }}> {hashAlgoHelper(hash, textToHash)}</span>
                )
            }

          </code>
        </div>
      ))}
    </div>
  );
}