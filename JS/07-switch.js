console.clear()

const diena = 2;

switch (diena) {
    case 1:
        console.log('pirmadienis');
        break;
    case 2:    
        console.log('antradienis');
        break;
    default:
        console.log('tokios dienos nera');
        break;
}

console.log('-------------');

const day = 4;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('tokios dienos nera');
        break;
}
console.log('---------------');
if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day ===6 || day === 7) {
    console.log('savaitgalis');
} else {
    console.log('tokios dienos nera');
}

console.log('--------------');

const gamybosEtapas = 1;

switch (gamybosEtapas) {
    case 1:
        console.log('pasiimti puodeli');
        break;

    case 2:
        console.log('isideti arbatos');
        break;

    case 3:
        console.log('isideti cukru');
        break;

    case 4:
        console.log('isipilti vandens');
        break;

    case 5:
        console.log('gerti');
        break;

    default:
        console.log('tokio etapo nera');
        break;
}

console.log('---------');

const stotele = "Vasaros";

switch (stotele) {
    case 'Parko':
        console.log('Parko stotele');
        

    case 'Geniu':
        console.log('Geniu stotele');
        

    case 'Trentiniu':
        console.log('Trentiniu stotele');
        

    case 'Rudens':
        console.log('Rudens stotele');
       

    case 'Karalius Mindaugo':
        console.log('Karalius Mindaugo stotele');
          
        
    case 'Zaliasis Tiltas':
        console.log('Zaliasis Tiltas stotele');
        break; 

    case 'Lvovo':
        console.log('Lvovo stotele');   
        
    case 'Vasaros':
        console.log('Vasaros stotele');  

    case 'Rudens2':
        console.log('Rudens2 stotele');

    case 'Trentiniu2':
        console.log('Trentiniu2 stotele');

    case 'Geniu2':
        console.log('Geniu2 stotele');

    case 'Ziedas':
        console.log('Naujosios Vilnius Ziedas stotele');        
        break;

    default:
        console.log('tokios stoteles nera');
}