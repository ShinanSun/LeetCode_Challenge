class HitCounter {
    constructor() {
        this.hits = [];
    }
    
    hit(timestamp) {
        this.hits.push(timestamp);
    }
    
    getHits(timestamp) {
        while (this.hits.length) {
            let diff = timestamp - this.hits[0];
            if (diff >= 300) this.hits.shift();
            else break;
        }
        
        return this.hits.length;
    }
}
