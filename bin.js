function textToBinary(text) {
      return [...text].map(c =>
        c.charCodeAt(0).toString(2).padStart(8, '0')
      ).join('');
    }

    function binaryToText(binary) {
      let text = '';
      for (let i = 0; i < binary.length; i += 8) {
        text += String.fromCharCode(parseInt(binary.substr(i, 8), 2));
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
      const text = binaryToText(binary);
      document.getElementById("outputText").value = text;
    }

    function copyToClipboard() {
      const output = document.getElementById("outputText");
      if (output.value) {
        output.select();
        document.execCommand("copy");
        alert("Copied to clipboard!");
      }
    }
