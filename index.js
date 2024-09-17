fetch('https://api.ipify.org?format=json')
  .then((response) => response.json())
  .then(
    (data) =>
      (document.querySelector(
        '.text',
      ).innerHTML = `Twoje IP :33 <b> ${data.ip} </b>`),
  )
