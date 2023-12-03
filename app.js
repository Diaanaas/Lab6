unoptimized();
optimized();
function unoptimized() {
    for (let i = 0; i < 20000; i++) {
        console.log('i----------->', i);
    }
}
function optimized() {
    for (let i = 0; i < 5000; i++) {
        console.log('i----------->', i);
    }
}