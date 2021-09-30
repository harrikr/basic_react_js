import React, { Component } from 'react'

const harga = 10000;


let serabi = 500;
if (true){
    let serabi= 300;
}

var gethuk = 200;
if (true){
    var gethuk = 100;
}



export default class Variabel extends Component {
    render() {
        return (
            <div>
                <h2>Variabel ini menggunakan rcc</h2>
                <h2>Harga Tetap : {harga}</h2>
                <h2>Harga Serabi : {serabi}</h2>
                <h2>Harga Gethuk : {gethuk}</h2>
            </div>
        )
    }
}
