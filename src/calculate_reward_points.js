
function calculateRewardPoints(amount) {
    let points = 0;

    if(amount > 100){
        points += 2*(amount - 100);
        }
        if(amount > 50){
            console.log(points)
            points += 1*(amount-50);         
        }
        return points;
}

export {calculateRewardPoints};