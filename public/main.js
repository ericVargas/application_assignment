fetch('/quote')
  .then(r => r.json())
  .then(data => {
    document.getElementById('quote').innerHTML = data.quote;
  });