const starter = document.querySelector('.starter')
const result_ofh = document.querySelector('.result-ofh')
const result_ofx = document.querySelector('.result-ofx')
const result_ofq = document.querySelector('.result-ofq')
const result_ofb = document.querySelector('.result-ofb')
const result_ofm = document.querySelector('.result-ofm')
const wrapper = document.querySelector('.wrapper')
const card = document.querySelectorAll('.card')
const title_of = document.querySelector('.title-of')
const res = []

result_ofh.textContent = `Natija: ${localStorage.getItem('hnatija')==null ? 0 : localStorage.getItem('hnatija')}`
result_ofq.textContent = `Natija: ${localStorage.getItem('qnatija')==null ? 0 : localStorage.getItem('qnatija')}`
result_ofb.textContent = `Natija: ${localStorage.getItem('bnatija')==null ? 0 : localStorage.getItem('bnatija')}`
result_ofx.textContent = `Natija: ${localStorage.getItem('xnatija')==null ? 0 : localStorage.getItem('xnatija')}`
result_ofm.textContent = `Natija: ${localStorage.getItem('mnatija')==null ? 0 : localStorage.getItem('mnatija')}`

starter.addEventListener('click', () => {
    starter.style.display = 'none'
    wrapper.style.display = 'flex'
})

card.forEach((el => {
    el.addEventListener('click', () => {
        el.childNodes.forEach((ew) => {
            res.push(ew.innerText)
        })
        localStorage.setItem("Part", res)
    })
}))

