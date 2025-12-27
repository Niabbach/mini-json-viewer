let allSignals = {};
let signalNames = [];

fetch("data/ACDC_static.json")
  .then(r => r.json())
  .then(json => {
    allSignals = json;
    signalNames = Object.keys(json);
    populate(signalNames);
  });

document.getElementById("search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  populate(signalNames.filter(s => s.toLowerCase().includes(q)));
});

document.getElementById("signal-select").addEventListener("change", e => {
  show(e.target.value);
});

function populate(list) {
  const sel = document.getElementById("signal-select");
  sel.innerHTML = `<option disabled selected>Choisis un signal</option>`;
  list.forEach(s => {
    const o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    sel.appendChild(o);
  });
}

function show(name) {
  const v = allSignals[name];
  const min = Math.min(...v);
  const max = Math.max(...v);
  const fin = v[v.length - 1];

  document.getElementById("viewer").innerHTML = `
    <div class="card">
      <h2>${name}</h2>
      <div class="stat"><span>Min</span><span>${min.toFixed(3)}</span></div>
      <div class="stat"><span>Max</span><span>${max.toFixed(3)}</span></div>
      <div class="stat"><span>Final</span><span>${fin.toFixed(3)}</span></div>
    </div>
  `;
}
