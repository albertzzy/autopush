#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);


async function run(){
    try{
        let res = await exec('node autopush.js')
        console.log(res);

    }catch(e){
        console.log(e);
    }

} 

run();


