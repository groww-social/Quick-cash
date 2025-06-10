function textToBinary(text) {
      return [...text].map(char =>
        char.charCodeAt(0).toString(2).padStart(8, '0')
      ).join('');
    }

    function binaryToText(binary) {
      let text = '';
      for (let i = 0; i < binary.length; i += 8) {
        const byte = binary.slice(i, i + 8);
        text += String.fromCharCode(parseInt(byte, 2));
      }
      return text;
    }

    function encrypt() {
      const input = document.getElementById("inputText").value;
      const binary = textToBinary(input);
      const encrypted = binary.replace(/0/g, '6').replace(/1/g, '9');
      document.getElementById("outputText").value = encrypted;
    }

    function decrypt() {
      const input = document.getElementById("inputText").value;
      const binary = input.replace(/6/g, '0').replace(/9/g, '1');
      const decrypted = binaryToText(binary);
      document.getElementById("outputText").value = decrypted;
    }

    function copyToClipboard() {
      const output = document.getElementById("outputText");
      output.select();
      document.execCommand("copy");
      alert("✅ Copied to clipboard!");
    }
