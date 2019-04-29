const OSinfo = require('../modules/OSinfo');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
    let input = process.stdin.read();
    if(input !== null) {
        let instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/computername':
                process.stdout.write(process.env.COMPUTERNAME + '\n');
                break;
            case '/username':
                process.stdout.write(process.env.USERNAME + '\n');
                break;
            case '/lang':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/node':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n'); 
                break;
        }
    }
});
