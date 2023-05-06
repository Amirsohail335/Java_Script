function initCounter() {
    let count = 0;
    return function () {
      count++;
    };
  }
  
  let counter = initCounter();
  counter() // 0
  counter() // 1
  
  let counter1 = initCounter();
  counter1() // 0
  counter1() // 1