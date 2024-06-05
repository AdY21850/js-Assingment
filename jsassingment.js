let a = [];
function nft(N, D, C,p) {
   
    const nft = {
        N: N,
        D: D,
        C: C,
        p:p
    };
    a.push(nft);
}
function listnft() {
    for (let i = 0; i < a.length; i++) {
         console.log("cloth : " + a[i].N);
        console.log("size  : " + a[i].D);
       console.log("customer : " + a[i].C);
       console.log("price : " + a[i].p);
        console.log();
    }
}
function totalnfts() {
    return a.length;
}
nft("pant", "xxl ", "Aditya","Rs 420");
nft("shirt", "xl", "Manav","Rs 900");
nft("coat", "small", "Mayank","Rs 600");
nft("tshirt", "medium", "Rahul","Rs 1250");
listnft();
console.log();
console.log("total number of nfts = " + totalnfts());
