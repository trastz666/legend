"use strict";

let total = 523,
    result = translate(total);
    
function translate(num) {
  
  if (typeof num == typeof Number(num)) {
    num = String(num);
  }
  
  let  numEnd = num[num.length - 1],
       numStart = num[num.length - 2];

  if (numEnd == 1 && !numStart >= 0 && num != 11  ) {
    document.write(`Ваш баланс: ${num} балл`);
    
    return num;
  }

  if (numEnd >= 2 && numEnd < 5 && numStart != 1 || !num >= 11) {
    document.write(`Ваш баланс: ${num} балла`);
    
    return num;
  }

  if (numEnd == 0 || numEnd >= 5 && numStart >= 0 || numEnd >= 1) {
    document.write(`Ваш баланс: ${num} баллов`);
    
    return num;
  }

}




