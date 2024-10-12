function mincost(arr) {
    let MinCostPrice = 0;

    function mincost1(arr) { 
        if(arr.length === 1){
            return MinCostPrice;
        }
        else {
            let CostArray = [];
            SortedArray = arr.sort((a,b)=>a-b);
            CostArray[0] = SortedArray[0] + SortedArray[1];
            MinCostPrice += CostArray[0];
            for(let i = 1; i < SortedArray.length - 1; i++){
                CostArray[i] = SortedArray[i+1];
            }
            return mincost1(CostArray);
        }
    }

    return mincost1(arr);
}

module.exports = mincost;