function mincost(arr) {
    // Create a Min Heap (Priority Queue)
    const minHeap = new MinPriorityQueue();
    
    // Add all ropes to the Min Heap
    arr.forEach(rope => minHeap.enqueue(rope));
    
    let totalCost = 0;
    
    // While there is more than one rope, keep connecting the shortest two
    while (minHeap.size() > 1) {
        // Extract the two shortest ropes
        let first = minHeap.dequeue().element;
        let second = minHeap.dequeue().element;
        
        // Cost of connecting the two ropes
        let cost = first + second;
        totalCost += cost;
        
        // Add the new combined rope back to the heap
        minHeap.enqueue(cost);
    }
    
    return totalCost;
}

module.exports = mincost;
