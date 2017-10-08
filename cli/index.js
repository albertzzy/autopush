#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);


async function run(){
    try{
        await exec('node autopush.js')

    }catch(e){
        console.log(e);
    }

} 

run();


