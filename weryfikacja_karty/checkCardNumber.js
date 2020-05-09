const checkCardNumber = card => {

    const luhnAlgo = (card, typ) => {
      card = card.split('').reverse();
      
      let atr1 = [];
      let atr2 = 0;
      let x = 0;
    
      card.forEach((nr, i) => {
        if (i % 2 === 1) {
          atr1.push((parseInt(nr) * 2).toString().split(''))
          atr1[x].length > 1 ? atr1[x] = atr1[x].reduce((a,b) => parseInt(a)+parseInt(b)) : atr1[x] = parseInt(atr1[x].join(''))
          x++}
        else atr2 += parseInt(nr)
    });
    
    atr2 = atr1.reduce((a,b) => a+b) + atr2;
    const result = atr2 % 10 === 0 ? typ : 'Nieprawidłowy';
    return result
    };



card = card.toString();

if (/^5[1-5]\d{14}$/g.test(card) && card.length === 16) {
  const typ = 'MasterCard';
  return luhnAlgo(card, typ);
}
else if ((/^4\d{12}$/g.test(card) && card.length === 13) || (/^4\d{15}$/g.test(card) && card.length === 16)) {
  const typ = "Visa"
  return luhnAlgo(card, typ);
}
else if (/^3(4|7)\d{13}$/g.test(card) && card.length === 15) {
   const typ = "American Express"
   return luhnAlgo(card, typ);
}
else {
  const typ = 'Nieprawidłowy'
  return typ
}

};

export default checkCardNumber;