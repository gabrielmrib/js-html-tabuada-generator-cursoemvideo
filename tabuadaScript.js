function calcular() {
    let num = document.getElementById('numero')
    let seltab = (document.getElementById('seltab'))
    console.log(num);
    if (num == '') {
        window.alert('[erro] Digite um valor')
    } else {
        let n = Number(num.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `item${c}`
            seltab.appendChild(item)
            c++ 
        }
    } confirm()


} 