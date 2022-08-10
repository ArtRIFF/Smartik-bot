import phrasesReader  from './phrasesReader.js';

function randomPhraseGenerator() {
  let arrBase = phrasesReader();
  let index = Math.floor(Math.random()*arrBase.length);
  return arrBase[index];
}

export default randomPhraseGenerator;

