import { useState } from "react";
import CryptoJS from "crypto-js";

function reversePairHash(inputString: string) {
  let reversedString = "";
  for (let i = 0; i < inputString.length - 1; i += 2) {
    reversedString += inputString[i + 1] + inputString[i];
  }
  if (inputString.length % 2 !== 0)
    reversedString += inputString[inputString.length - 1];
  return reversedString;
}

function scrambleHash(inputString: string) {
  let scrambledArray = inputString.split("");
  for (let i = scrambledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambledArray[i], scrambledArray[j]] = [
      scrambledArray[j],
      scrambledArray[i],
    ];
  }
  return scrambledArray.join("");
}

function infixToPostfixString(input: string) {
  let output = "";
  let stack: string[] = [];
  let precedence: { [key: string]: number } = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  for (let char of input) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        output += stack.pop();
      }
      stack.pop();
    } else if (precedence[char]) {
      while (
        stack.length &&
        precedence[char] <= precedence[stack[stack.length - 1]]
      ) {
        output += stack.pop();
      }
      stack.push(char);
    } else {
      output += char;
    }
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output;
}

function hashAlgoHelper(algo: string, textToHash: string) {
  switch (algo) {
    case "reversePairHash":
      return reversePairHash(textToHash);
    case "scrambleHash":
      return scrambleHash(textToHash);
    case "infixToPostfixString":
      return infixToPostfixString(textToHash);
    default:
      return (CryptoJS as any)[algo](textToHash).toString();
  }
}

export default function Hash() {
  const [textToHash, setTextToHash] = useState("");

  const hashes = ["SHA1", "SHA224", "SHA256", "MD5"];
  const customHash = [
    "reversePairHash",
    "scrambleHash",
    "infixToPostfixString",
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-dark-coral to-golden-ray rounded-lg">
      <h2 className="text-2xl font-bold text-electric-blue">Hash Converter</h2>
      <p className="mt-2 text-alpine-green">
        Enter a text value, and see various hash outputs.
      </p>

      <input
        className="mt-4 w-full p-3 text-creme-white text-lg bg-obsidian-navy rounded-md text-center"
        placeholder="Enter text"
        value={textToHash}
        onChange={(e) => setTextToHash(e.target.value)}
      />

      {hashes.concat(customHash).map((hash) => (
        <div
          key={hash}
          className="mt-4 p-3 bg-velvet-night text-steel-shadow rounded-md text-center"
        >
          <code className="text-electric-blue">
            {hash} (<span className="text-golden-ray">'{textToHash}'</span>) ={" "}
          </code>
          {textToHash.toLowerCase() === "france" ? (
            "aint no way"
          ) : textToHash === "69" ? (
            "nice"
          ) : (
            <span className="text-dusty-orange">
              {hashAlgoHelper(hash, textToHash)}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
