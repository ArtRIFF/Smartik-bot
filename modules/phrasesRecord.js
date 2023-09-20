import fs from 'fs';
import phrasesReader from './phrasesReader.js';
async function phrasesRecord(phrase) {
  let arrBase = await phrasesReader();
  arrBase.push(phrase);
  try {
    const jsonBase = JSON.stringify(arrBase);
    fs.writeFileSync('phraseBase.json', jsonBase, err => {
      if (err) {
        console.error("Can`t record phrase in pharse base");
      }
    });
  } catch (error) {
    console.log(`${error.message} || recived data problem`);
  }

}

export default phrasesRecord;