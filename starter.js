const starter = document.querySelector('.starter')
const result_ofh = document.querySelector('.result-ofh')
const result_ofx = document.querySelector('.result-ofx')
const result_ofq = document.querySelector('.result-ofq')
const result_ofb = document.querySelector('.result-ofb')
const result_ofo = document.querySelector('.result-ofo')
const result_ofm = document.querySelector('.result-ofm')
const result_ofma = document.querySelector('.result-ofma')
const result_ofk = document.querySelector('.result-ofk')
const result_ofia = document.querySelector('.result-ofia')
const result_ofsh = document.querySelector('.result-ofsh')
const wrapper = document.querySelector('.wrapper')
const card = document.querySelectorAll('.card')
const title_of = document.querySelector('.title-of')
const modals = document.querySelector('.modals')
const a = document.querySelectorAll('a')
const res = []

result_ofh.textContent = `Natija: ${localStorage.getItem('hnatija') || 0}`
result_ofq.textContent = `Natija: ${localStorage.getItem('qnatija') || 0}`
result_ofb.textContent = `Natija: ${localStorage.getItem('bnatija') || 0}`
result_ofx.textContent = `Natija: ${localStorage.getItem('xnatija') || 0}`
result_ofm.textContent = `Natija: ${localStorage.getItem('mnatija') || 0}`
result_ofo.textContent = `Natija: ${localStorage.getItem('onatija') || 0}`
result_ofk.textContent = `Natija: ${localStorage.getItem('knatija') || 0}`
result_ofsh.textContent = `Natija: ${localStorage.getItem('shnatija') || 0}`
result_ofma.textContent = `Natija: ${localStorage.getItem('manatija') || 0}`
result_ofia.textContent = `Natija: ${localStorage.getItem('ianatija') || 0}`

starter.addEventListener('click', () => {
    starter.style.display = 'none'
    wrapper.style.display = 'flex'
})

let hidden = function(){
    card.forEach(e => {
        modals.style.display == 'none' ? modals.style.display = 'flex' : modals.style.display = 'none'
        e.style.display == 'none' ? e.style.display = 'flex' : e.style.display = 'none'
    })
}

card.forEach((el => {
    el.addEventListener('click', () => {
        el.childNodes.forEach((ew) => {
            res.push(ew.innerText)
        })
       hidden()
       localStorage.setItem("Part", res)
       a.forEach(el=>{
        el.addEventListener('click', ()=>{
            localStorage.setItem("degree", el.outerText)
        })
       })
    })
}))



if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("Service Worker ro‘yxatdan o‘tdi ✅"))
      .catch(err => console.log("Xatolik ❌", err));
  }
  

