function getTopBuyersPurchasesSumm(purchases) {
    let summ = 0;
    purchases.forEach(i => {
      summ += i;
    });
    return summ;
  }
  
  let topBuyersPurchases = [10000, 20000, 30000];
  console.log(getTopBuyersPurchasesSumm(topBuyersPurchases));