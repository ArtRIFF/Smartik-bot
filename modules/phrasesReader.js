import fs from 'fs';
async function phrasesReader() {
  try {
    const arrBase = fs.readFileSync('phraseBase.json', (err) => {
      if (err) {
        console.error("Can`t read phrase in pharse base");
      }
    });
    return JSON.parse(arrBase);
  } catch (error) {
    console.log("phrase reader error");
  }
}

export default phrasesReader;
