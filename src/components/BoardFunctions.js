let Fxn = {
    check: function(e){
        const element = e.target;
        if(element.classList.contains('chess-piece')) {
            element.style.position = "absolute"; 
            element.style.left = `${e.clientX-50}px`;
            element.style.top = `${e.clientY-50}px`;
            console.log(element.style);
        }
    },
    bruh: function(e){console.log('random shit');}
}

export default Fxn