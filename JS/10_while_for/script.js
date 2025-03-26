function bucleWhile() {
    let count = 10;
    let array = [];
    while(count >= 1) {
        array.push(count);
        count--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function bucleFor() {
    let count = 10;
    let array = [];
    for (let count = 10; count >= 1; count-- ){
        array.push(count);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}