import fs from 'fs';
import phrasesReader from './phrasesReader.js';
function phrasesRecord(phrase) {
  let arrBase = phrasesReader();
  arrBase.push(phrase);
  let jsonBase;
  try {
    const jsonBase = JSON.stringify(arrBase);
    fs.writeFile('phraseBase.json', jsonBase, err => {
      if (err) {
        console.error("Can`t record phrase in pharse base");
      }
    });
  } catch (error) {
    console.log(`${error.message} || recived data problem`);
  }

}

export default phrasesRecord;