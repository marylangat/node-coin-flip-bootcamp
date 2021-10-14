document.querySelector('#heads').addEventListener('click', flipCoin)
document.querySelector('#tails').addEventListener('click', flipCoin)
document.querySelector("#reset").addEventListener('click', reset)

function flipCoin(e){
const choice = e.target.innerText
  fetch(`/api?choice=${choice}`)
    .then(response => response.json())
    .then((data) => {

      document.querySelector('#result').innerHTML = data.outcome


    });

    }

    function reset(e) {
      document.querySelector('#result').innerHTML = ""

    }
