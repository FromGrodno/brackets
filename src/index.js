module.exports = function check(str, bracketsConfig) {
  let stack = [];
   let openArr = [];
   let closeArr = [];
   bracketsConfig.forEach((elem) => {
      openArr.push(elem[0]);
      closeArr.push(elem[1])
   })
   for (let i = 0; i < str.length; i++) {
      let bracket = str[i];
      let topElement = stack[stack.length - 1];
      if (openArr.includes(bracket) && !closeArr.includes(bracket)) {
         stack.push(bracket);
      }
      else if (openArr.includes(bracket) && closeArr.includes(bracket) && !stack.includes(bracket)) {
         stack.push(bracket);
      }
      else {
         if (stack.length === 0) {
            return false;
         }
         topElement = stack[stack.length - 1];
         if (openArr[closeArr.indexOf(bracket)] === topElement) {
            stack.pop();
         } else {
            return false;
         }
      }
   }
   return stack.length === 0;
}
