function checkTriggerWords(phrase) {
  const message = phrase.toLowerCase();
  const trigerBase = ["ого","бля","хз","видно","бухають","сколько","ну","так","дуже","😉","😳","😳","сильно","что","для"];
  const searchingWord = trigerBase.find(word => message.includes(word));
  if (searchingWord) {
   return true;
  } else {
    return false;
  }
}

export default checkTriggerWords;