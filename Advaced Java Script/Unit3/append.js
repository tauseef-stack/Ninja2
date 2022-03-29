function Append() {
    let head = document.querySelector('.data')
    let p = document.createElement('p');
    let note = document.querySelector("#input").value;
    p.innerText = `${note}`;
    p.style.color = 'blue';
    p.style.fontSize = '25px';
    head.append(p);
    document.querySelector("#input").value = null;
}
