"use client";

import { useState } from "react";

export default function Convert() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = () => {
    // Ganti enter dengan \n
    const result = input.replace(/\n/g, "\\n");
    setOutput(result);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    alert("✅ Copied to clipboard!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Text Converter</h1>

      {/* Input */}
      <textarea
        className="w-full max-w-2xl p-3 rounded-lg text-black"
        rows={8}
        placeholder="Tulis teks biasa di sini..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Button */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={handleConvert}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          Convert
        </button>
        {output && (
          <button
            onClick={handleCopy}
            className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500"
          >
            Copy
          </button>
        )}
      </div>

      {/* Output */}
      {output && (
        <pre className="mt-6 bg-gray-800 p-4 rounded-lg w-full max-w-2xl overflow-x-auto">
          {output}
        </pre>
      )}
    </main>
  );
}
