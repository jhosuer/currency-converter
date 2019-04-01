let initialCurrency = {
  naira: document.getElementById('naira'),
  dollars: document.getElementById('dol'),
  pounds: document.getElementById('pounds'),
  rand: document.getElementById('sa'),

  convertToNumber (currency) {
    return Number(currency.value);
  }


}


initialCurrency.naira.addEventListener('mousemove', function(){
  initialCurrency.dollars.value = (initialCurrency.convertToNumber(naira)/363.38).toFixed(2);
  initialCurrency.pounds.value = (initialCurrency.convertToNumber(naira)/463.62).toFixed(2);
  initialCurrency.rand.value = (initialCurrency.convertToNumber(naira)/25.33).toFixed(2);
});



/* Thanks for watching Dare Lawal */