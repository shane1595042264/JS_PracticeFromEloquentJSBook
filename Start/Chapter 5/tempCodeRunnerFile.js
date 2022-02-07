function loop(value, test, update, body){


while (test(value)){
    body(value)
    let value = update(value);
}

}

 loop(3, n => n > 0, n => n - 1, console.log);

