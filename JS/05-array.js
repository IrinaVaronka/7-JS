console.clear();

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];

console.log(empty);
console.log(marks);
console.log(names);


const petroPazymis1 = 10;
const petroPazymis2 = 2;
const petroPazymis3 = 8;
const petroPazymis4 = 4;
const petroPazymis5 = 6;

const petroSuma = petroPazymis1 + petroPazymis2 + petroPazymis3 + petroPazymis4 + petroPazymis5;
const petroKiekis = 5;

const petroVidurkis = petroSuma / petroKiekis;
console.log('Petro pazymu vidurkis:', petroVidurkis);

console.log('----------------');

const ona = [10, 2, 8, 4, 6];
const onosSuma = ona[0] + ona[1] + ona[2] + ona[3] + ona[4];
console.log(onosSuma);

const onosKiekis = ona.length;
console.log(onosKiekis);

const onosVidurkis = onosSuma / onosKiekis;
console.log('Onos pazymu vidurkis:', onosVidurkis);

console.log('-------------');

const vegs = ['pomidoras', 'agurkas', 'svogunas', 'bulve'];

//Reikia nupirkti: pomidoras, agurkas, svogunas, bulve.

let sakinys = 'Reikia nupirkti: ';
let index = 0;

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += ', ';

sakinys += vegs[index];
index += 1;
sakinys += '. ';

console.log(sakinys);

const sakinys2 = 'Reikia nupirkti: ' + vegs.join(', ') + '.';
console.log(sakinys2);

const sakinys3 = `Reikia nupirkti: ${vegs.join(', ')}.` ;
console.log(sakinys3);

console.log('---------------');

const jonas = [];
console.log(jonas);

jonas.push(10);
console.log(jonas);

jonas.push(2);
console.log(jonas);

jonas.push(8);
console.log(jonas);


const arTuri7 = jonas.includes(7);
console.log(arTuri7);

const kelintas2 = jonas.indexOf(2);
console.log(kelintas2);