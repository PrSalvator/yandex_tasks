const mines = [[1, 1], [2, 2], [1, 3]];

field = makeField(4, 4, mines);

print(field);

function makeField(m, n, mines){ // m - y count, n - x count, c - bomb count
    const dj = [-1, 0, 1, 1, 1, 0, -1, -1];
    const di = [-1, -1, -1, 0, 1, 1, 1, 0];
    
    const field = [];

    for(let i = 0; i < n + 2; i++){
        field[i] = [];
        for(let j = 0; j < m + 2; j++){
            field[i][j] = 0;
        }
    }

    mines.forEach(mine => {
        for(let i = 0; i < di.length; i++){
            field[mine[0] + di[i]][mine[1] + dj[i]] += 1;
        }
    });

    mines.forEach(mine => {
        field[mine[0]][mine[1]] = '*';
    })

    return field;
}

function print(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].join(' ');
    }
    console.log(arr.join('\n'))
}


