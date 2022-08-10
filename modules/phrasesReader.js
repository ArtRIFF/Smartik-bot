import fs from 'fs';
function phrasesReader() {
 const arrBase = fs.readFileSync('phraseBase.json', (err) => {
  if (err) {
    console.error("Can`t read phrase in pharse base");
  }
});
   return  JSON.parse(arrBase);
}

export default phrasesReader;
