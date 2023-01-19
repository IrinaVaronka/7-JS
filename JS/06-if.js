console.clear()
if (4 > 22) {
    console.log('4 yra daugiau uz 2');
} else {
    console.log('nera daugiau');


    if (4 < 22) {
        console.log('tiesa');
    } else {
        console.log('mielas');
    }
}

if (7 == 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (88 >= 100) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 <= 7) {
    console.log('maziau arba lygu');
} else {
    console.log('daugiau');
}
console.log('---------');

if (4 == '4') {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if ('f' > 'b') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if (7 === '7') {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

console.log('-------------');

const diena = 5;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else {
    console.log('nezinau tokios dienos');
}


const day = 456;
if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis'); 
    } else {
        if (day === 3) {
            console.log('treciadienis'); 
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                console.log('penktadienis');
            }
        }
    }
    
}       
console.log('--------------');

const nuoKadaSilta = 15;
const temperatura = 4;
const arLyja = false;

if (temperatura < nuoKadaSilta) {
    if (arLyja) {
        console.log('nera silta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('nera silta ir nelyja: reikia striukes');
    }   
} else {
    if (arLyja) {
        console.log('silta ir lyja: varom su maike ir skecio');
    } else {
        console.log('silta ir nelyja: varom su maike');
    }
}

console.log('-----------');

if (temperatura >= nuoKadaSilta && arLyja === false) {
    console.log('silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja === true) {
    console.log('silta ir lyja: varom su maike ir skecio');
} else if (temperatura < nuoKadaSilta && arLyja === true) {   
} else {
  console.log('nera silta ir nelyja: reikia striukes');  
}