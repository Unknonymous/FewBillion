var sum = .01,
    offer = 10000,
    billion = 1000000000,
    over = Infinity,
    end = 33;

for (var i = 1; i <= end; i++){
    sum *= 2;
    if (i == 30){
        console.log("The peasant has $" + sum +" dollars and cents after " + i + " days.");
    }
    if (sum >= 10000 && sum < 20000){
        console.log("It took " + i + " days to reach past $10,000.00 and on that day the servant had $" + sum + " dollars and cents!");
    }
    if (sum >= billion && sum < (billion * 1.5)){
        console.log("The peasant has $" + sum +" dollars and cents after " + i + " days and has crossed over $1 billion.");
    }
    if(sum < over && i == 33){
        i -= 1;
        end += 1;
    }else if( sum == over){
        console.log("The servant is boundlessly wealthy after " + end + " days.");
        break;
    }
}