async function generate(){
  const r = await fetch("http://localhost:4000/generate", {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("token")
    },
    body:JSON.stringify({
      mode:document.getElementById("mode").value,
      style:document.getElementById("style").value,
      idea:document.getElementById("idea").value
    })
  });
  const d = await r.json();
  document.getElementById("result").innerHTML = `${LANG[currentLang].preview}: ${d.preview}<br>Price: $${d.amount}`;
}

async function pay(){
  const r = await fetch("http://localhost:4000/pay/options");
  const p = await r.json();
  document.getElementById("result").innerHTML = `
  TON: ${p.ton}<br>
  USDT (TRC20): ${p.usdt}`;
}