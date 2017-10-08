const util = require('util');
const figlet = util.promisify(require('figlet'));
const exec = util.promisify(require('child_process').exec);



async function  autoPush(){
    
    try{
        const add_std = await exec('git add .');
        
        if(add_std.stdout){
            console.log(`add----${add_std.stdout}`);
        }


        const com_std = await exec('git commit -m "doc update"');

        if(com_std.stdout){
            console.log(`commit----${com_std.stdout}`);
        }


        const push_std = await exec("git push");

        if(push_std.stdout){
            console.log(`push-----${push_std.stdout}`);
        }


    }catch(e){
        console.log(e);

    }

}

async function figletTxt(){
    try{
        const txt = await figlet('git autopush');
        console.log(txt);
    }catch(e){
        console.log(e);
    }
}



async function run(){
    await figletTxt();
    await  autoPush();  
}

run();
