import phrasesReader  from './phrasesReader.js';

function randomPhraseGenerator() {
  let arrBase = phrasesReader();
  console.log(arrBase.length);//Cannot read properties of undefined (reading 'length')
  let index = Math.floor(Math.random()*arrBase.length);
  return arrBase[index];
}

export default randomPhraseGenerator;

