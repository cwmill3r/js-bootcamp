//let name = 'Andrew'
// JS will leak a Global Variable if you never declare it
if (true) {
    if (true) {
        // called variable shadowing
        //let name = 'Mike'
        //console.log(name)
        if (true) {
            name = 'Jen'
            console.log('Jen')
        }
    }
}

if (true) {
    console.log(name)
}