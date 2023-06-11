function createPattern(rows, char){
    for(let pat = 1; pat <= rows; pat++){
       
        let spaces = '';
        for(let space = rows - pat; space >= 0; space--){
            spaces+=' ';
            
        }
        
        let stars = ''; 
        for(let star = 1; star <=pat; star++){
            stars+=char;
            stars+=' ';
        } 
        console.log(spaces+stars);
    }
}

createPattern(10, '%');
//     *
//    * *
//   * * *
//  * * * *
// * * * * *