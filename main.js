import { hayvonlar, qushlar, hasharotlar, shaharlar, kasblar, buyumlar, mamlakatlar, osimliklar, ilmiyAtamalar, aralash, ilmiyMotivatsiya } from "./sozlar.js";
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn0 = document.querySelector('.btn0')
const time = document.querySelector('.time')
const izoh = document.querySelector('.izoh')
const input = document.querySelector('input')
const rebtn = document.querySelector('.rebtn')
const natija = document.querySelector('.natija')
const natija2 = document.querySelector('.natija2')
const wordmix = document.querySelector('.wordmix')
const motivate = document.querySelector('.motivate')
const record = document.querySelector('.record')
const modal_wrapper = document.querySelector('.modal-wrapper')

let index = 0, wordanimate = 0, interval = 0
let arr = [], tim = 40, e = 0, start = 0
let topilgansozlar = 0, errorwords = 0
let sozlar = []
// <<<functions>>>
function chek() {
    if ((input.value).toLowerCase() == arr[e]) {
        e += 1
        input.style.backgroundColor = "#6dd285"
        wordmix.textContent = mixedword((arr[e][0].toUpperCase() + arr[e].slice(1)))
        topilgansozlar++
        tim += 5
        input.value = ''
    }
    else {
        input.style.backgroundColor = "red"
        errorwords++
        input.value = ''
        tim-=2
    }
}
// <<<find which part>>>
function findepart(res) {
    console.log(res);
    switch (res[0]) {
        case "Hayvonlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(hayvonlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(hayvonlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(hayvonlar.hard)]
                    break;
            }
            break;
        case "Qushlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(qushlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(qushlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(qushlar.hard)]
                    break;
            }
            break;
        case "Hasharotlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(hasharotlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(hasharotlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(hasharotlar.hard)]
                    break;
            }
            break;
        case "Buyumlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(buyumlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(buyumlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(buyumlar.hard)]
                    break;
            }
            break;
        case "Aralash":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(aralash.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(aralash.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(aralash.hard)]
                    break;
            }
            break;
        case "Shaharlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(shaharlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(shaharlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(shaharlar.hard)]
                    break;
            }
            break;
        case "Mamlakatlar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(mamlakatlar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(mamlakatlar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(mamlakatlar.hard)]
                    break;
            }
            break;
        case "Ilmiy Atamalar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(ilmiyAtamalar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(ilmiyAtamalar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(ilmiyAtamalar.hard)]
                    break;
            }
            break;
        case "Kasblar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(kasblar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(kasblar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(kasblar.hard)]
                    break;
            }
            break;
        case "O`simliklar":
            switch (res[1]) {
                case 'Easy👌':
                    sozlar = [...(osimliklar.easy)]
                    break;
                case 'Medium😉':
                    sozlar = [...(osimliklar.medium)]
                    break;
                case 'Hard👿':
                    sozlar = [...(osimliklar.hard)]
                    break;
            }
            break;
    }
}
// main function
function chek2() {
    input.value = ''
    input.style.backgroundColor = "#6dd285"
    modal_wrapper.style.display = 'flex'
    clearInterval(interval)
    if (topilgansozlar >= 25) {
        izoh.textContent = `Qoilmaqom natija siz judayam aqlli insonsiz👌😉\n(you are the best!!!)`
        natija.textContent = topilgansozlar
        natija2.textContent = errorwords
        btn0.disabled = false
    }
    else if (topilgansozlar >= 10) {
        izoh.textContent = `Ajoyib siz aqlli insonsiz👌😉(perfecto!!!)`
        natija.textContent = topilgansozlar
        natija2.textContent = errorwords
        btn0.disabled = false
    }
    else if (topilgansozlar > 3) {
        izoh.textContent = `Biroz yaxshiroq👌😉`
        natija.textContent = topilgansozlar
        natija2.textContent = errorwords
        btn0.disabled = false
    }
    else {
        izoh.textContent = `Bu gapni aytayotganimdan afsusdaman ammo...(ha mayli boshqattan o'ynab koring😐😕)`
        natija.textContent = topilgansozlar
        natija2.textContent = errorwords
        btn0.disabled = false
    }
}
// shuffle words and arrays
function mixedword(soz) {
    let newword, str = new Set(), w = 0
    typeof soz == 'string' ? newword = '' : newword = []
    while (w != soz.length) {
        index = Math.floor(Math.random() * soz.length)
        if (!str.has(index)) {
            str.add(index)
            if (typeof soz == 'string') {
                newword += soz[index]
            }
            else {
                newword.push(soz[index])
            }
            w++
        }
    }
    return newword
}
// game teaching
function animate() {
    let qer = 0
    wordanimate = setInterval(() => {
        if (qer % 2 == 0) {
            wordmix.textContent = "word"
            qer++
        }
        else {
            wordmix.textContent = "wrod"
            qer++
        }
    }, 1000)

    return wordanimate
}

let localin = localStorage.getItem("Part").split(',').filter(el => el != '')

// <<<functions end>>>
record.textContent = `Record ${localin[1]}`
animate()
btn0.addEventListener('click', function () {
    findepart([localin[0], localin[2]])
    clearInterval(wordanimate)
    arr = mixedword(sozlar)
    start += 1
    tim = 40
    btn0.disabled = true
    wordmix.textContent = mixedword((arr[e][0].toUpperCase() + arr[e].slice(1)))
    interval = setInterval(() => {
        time.textContent = tim
        if (tim == 0) {
            chek2()
        }
        tim--
    }, 1000)
})


let o = 0
btn1.addEventListener('click', () => {
    if (input.value && start > 0) {
        chek()
        motivate.textContent = ilmiyMotivatsiya[o]
        o == ilmiyMotivatsiya.length ? o = 0 : o++
    }
})
document.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        if (input.value && start > 0) {
            chek()
            motivate.textContent = ilmiyMotivatsiya[o]
            o == ilmiyMotivatsiya.length ? o = 0 : o++
        }
    }
})


btn2.addEventListener('click', () => {
    chek2()
})


rebtn.addEventListener('click', () => {
    switch (localin[0]) {
        case "Hayvonlar":
            localStorage.setItem('hnatija', topilgansozlar)
            break
        case "Qushlar":
            localStorage.setItem('qnatija', topilgansozlar)
            break
        case "Hasharotlar":
            localStorage.setItem('xnatija', topilgansozlar)
            break
        case "Buyumlar":
            localStorage.setItem('bnatija', topilgansozlar)
            break
        case "Aralash":
            localStorage.setItem('mnatija', topilgansozlar)
            break
        case "Kasblar":
            localStorage.setItem('knatija', topilgansozlar)
            break
        case "Shaharlar":
            localStorage.setItem('shnatija', topilgansozlar)
            break
        case "Mamlakatlar":
            localStorage.setItem('manatija', topilgansozlar)
            break
        case "Ilmiy Atamalar":
            localStorage.setItem('ianatija', topilgansozlar)
            break
        case "O'simliklar":
            localStorage.setItem('mnatija', topilgansozlar)
            break
    }
    record.textContent = `Record: ${topilgansozlar}`
    index = 0
    arr = []
    tim = 40
    e = 0
    start = 0
    topilgansozlar = 0
    errorwords = 0
    time.textContent = 'Time: 40 seconds'
    input.style.backgroundColor = "#6dd285"
    input.value = ''
    modal_wrapper.style.display = 'none'
    animate()
})

