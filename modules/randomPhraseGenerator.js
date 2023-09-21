import phrasesReader from './phrasesReader.js';

async function randomPhraseGenerator() {
  let arrBase = await phrasesReader();
  console.log(arrBase.length)
  let index = Math.floor(Math.random() * arrBase.length);
  return arrBase[index];
}

export default randomPhraseGenerator;

