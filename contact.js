const program = require('commander');
var async = require("async");
var usbDetect = require('usb-detection');
var colors = require('colors');

const version = '1.0.0';
/*set console Theme*/
colors.setTheme({
    logo: 'rainbow',
    boundary: 'grey',
    info: 'green',
    data: 'yellow',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
let logo = "           _               _      _            _            \n  _   _ ___| |__         __| | ___| |_ ___  ___| |_ ___ _ __ \n | | | / __| '_ \\ _____ / _` |/ _ \\ __/ _ \\/ __| __/ _ \\ '__|\n | |_| \\__ \\ |_) |_____| (_| |  __/ ||  __/ (__| ||  __/ |   \n  \\__,_|___/_.__/       \\__,_|\\___|\\__\\___|\\___|\\__\\___|_|\n".logo
// Detect add/insert
/* 
           _               _      _            _            
  _   _ ___| |__         __| | ___| |_ ___  ___| |_ ___ _ __ 
 | | | / __| '_ \ _____ / _` |/ _ \ __/ _ \/ __| __/ _ \ '__|
 | |_| \__ \ |_) |_____| (_| |  __/ ||  __/ (__| ||  __/ |   
  \__,_|___/_.__/       \__,_|\___|\__\___|\___|\__\___|_|
*/
function task() {
    console.log('=============================================================='.boundary);
    usbDetect.find().then(
        function (devices) {
            for (i = 0; i < devices.length; i++) {
                console.log('locationId:',devices[i]['locationId']);
                console.log('vendorId:',('0X'+devices[i]['vendorId'].toString(16)).data);
                console.log('productId:',('0X'+devices[i]['productId'].toString(16)).data);
                console.log('deviceName:',devices[i]['deviceName'].data);
                console.log('manufacturer:',devices[i]['manufacturer'].data);
                console.log('serialNumber:',devices[i]['serialNumber'].data);
                console.log('deviceAddress:',devices[i]['deviceAddress']);
                console.log('url:','https://www.the-sz.com/products/usbid/index.php?v='+devices[i]['vendorId'].toString(16)+'&p='+devices[i]['productId'].toString(16).data);
                console.log('--------------------------------------------------------------'.boundary);
             }
            //console.log(devices);
            console.log("總共", devices.length, "個裝置");
        }).catch(
            function (err) {
                console.log(err);
            }).then(
                function () {
                    console.log('=============================================================='.boundary);
                }).then(
                    function () {
                        console.log('done');
                    });

}

program
    .version(version)
    .helpOption('-e, --HELP', 'read more information')
    .option('-l, --list [idtype]', 'list usb device [idtype] dec hex bin','dec')
    .option('-v, --vers [idtype]', 'lookup version','0')
    .option('-t, --teatype [teatype]', '給我一杯 [紅茶]', '紅茶')
    .parse(process.argv);

console.log(logo);
if (program.list)
    if (program.list=='dec')
        task();
    else if (program.list=='hex')
        console.log('hex');
    else if (program.list=='bin')
        console.log('bin');
    else
        console.log('else');
if (program.vers)
    console.log(version.info);
 


