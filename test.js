//
const mydicesubmit = document.getElementById('mydicesubmit');
let points = 100

mydicesubmit.addEventListener('click', () => {
    const mynumdice = document.getElementById('mynumdice');
    const mydiceoutputp = document.getElementById('mydiceoutputp');
    const mydiceoutputi = document.getElementById('mydiceoutputi');
    const values = [];
    const images =[];
    const resultgame =document.getElementById('resultgame');
    const mybetpoint = document.getElementById('mybetpoint').value;
    let betpoint = Number(document.getElementById('mybetpoint').value);
    let betodd = document.getElementById('betodd');
    let beteven = document.getElementById('beteven');
    let gamepoints = document.getElementById('gamepoints');
    if(points<=0){
        resultgame.style.color ='red';
        resultgame.textContent = 'You Lose';
    }
    else if(points>=500){
        resultgame.style.color = 'green';
        resultgame.textContent = 'You Win';
    }
    else if(betpoint>points){
        resultgame.style.color ='red';
        resultgame.textContent = 'CMM chs vừa vừa thôi gian vãi l*n, cược thì thấp thấp thôi cao hơn điểm cmm à????';
    }
    else{
        if(beteven.checked==true || betodd.checked==true){
            for (let i = 0; i < mynumdice.value ; i++) {
                const value = Math.floor(Math.random() *6)+1;
                values.push(value);
                images.push(`<img src="dice_images/${value}.png">`);
             }
             mydiceoutputp.textContent = `Dice: ${values.join(',')}`;
             mydiceoutputi.innerHTML = images.join('');
             let sum = 0;
             
             
             
             for (let i = 0; i < values.length; i++) {
                 sum += values[i];
             }
             
             /*if (sum % 2 === 0) {
                 points--;
               } else {
                 points++;
               }
             */
             if(sum%2 == 0 && beteven.checked) {
                 resultgame.textContent = ' This is Even!!';
                 resultgame.style.color = 'blue';
                 points+=betpoint
                 gamepoints.textContent = `You have ${points} points`;
                 
             }
             else if(sum%2 == 0 && betodd.checked) {
                 resultgame.textContent = ' This is Even!!';
                 resultgame.style.color = 'blue';
                 points-=betpoint
                 gamepoints.textContent = `You have ${points} points`;
                 
             }
             else if(sum%2 !== 0 && beteven.checked) {
                 resultgame.textContent = ' This is Odd!!';
                 resultgame.style.color = 'green';
                 points-=betpoint
                 gamepoints.textContent = `You have ${points} points`;
             }
             else if(sum%2 !== 0 && betodd.checked) {
                 resultgame.textContent = ' This is Odd!!';
                 resultgame.style.color = 'green';
                 points+=betpoint
                 gamepoints.textContent = `You have ${points} points`;
             }
             else{
                 resultgame.textContent = 'Please select one unit';
                 resultgame.style.color = 'red';
             }
         
             console.log(points);
             console.log(betpoint);
             }
        else{
                resultgame.textContent = 'Please select one unit';
                resultgame.style.color ='red';
            }    
             
        }
        
    })
    
    




    


