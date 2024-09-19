let stat = null; 

let ans = stat == "approved" ? "green" : stat =="pending" ? "yellow" : stat == "reject" ? "red" : "No stats left";

console.log(ans)
