console.clear();

/*
STRINGS (tekstas, symbolai) 
*/

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

const pilnasVardas = vardas + ' ' + pavarde;
console.log(pilnasVardas);

const vardas1 = 'Petras';
const pavarde1 = "Petraitis";
const pilnasVardas1 = vardas + pavarde;
console.log(pilnasVardas1);

const sveiki = 'Sveiki, as ' + vardas + '!';
console.log(sveiki);

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

const priekis = "Vienguba (') kabute ir ";
const galas = 'dviguba (") kabute.';
const kabute12_0 = priekis + galas;
console.log(kabute12_0);

const kabute12_1 = 'Vienguba (\') kabute ir dviguba (") kabute.';
console.log(kabute12_1);

const kabute12_2 = "Vienguba (') kabute ir dviguba (\") kabute."
console.log(kabute12_2);

const kabute12_3 = 'Vienguba (\') kabute ir dviguba (\") kabute.'
console.log(kabute12_3);

const kabute12_4 = "Vienguba (\') kabute ir dviguba (\") kabute."
console.log(kabute12_4);

const spec = ';$\''
console.log(spec);

const spec1 = '\\\''
console.log(spec1);

console.log('-------------');
/*
<header>
    <img src="#">
    <nav></nav>
</header>
*/

const HTML = '<header>\n\
    <img src="#">\n\
    <nav></nav>\n\
</header>';
console.log(HTML);
console.log('---------------');

const HTML2 = `<header>
    <img src="#">
    <nav></nav>
</header>`;
console.log(HTML2);

const name = 'Ona';
const age = 77;
const city = 'Kaimelis'

// Sveiki, mano vardas [vardas], man yra [amzius] metai ir as esu is [vietovardis].

const sms = 'Sveiki, mano vardas ' + name + ', man yra ' + age + ' metai ir as esu is '+ city + '.';
console.log(sms);

const sms2 = `Sveiki, mano vardas ${name}, man yra ${age} metai ir as esu is ${city}.`
console.log(sms2);

console.log('SMS teksto ilgis:', sms.length);