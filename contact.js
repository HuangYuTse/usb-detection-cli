const program = require('commander');
var async = require("async");
var usbDetect = require('usb-detection');


let logo = "           _               _      _            _            \n  _   _ ___| |__         __| | ___| |_ ___  ___| |_ ___ _ __ \n | | | / __| '_ \\ _____ / _` |/ _ \\ __/ _ \\/ __| __/ _ \\ '__|\n | |_| \\__ \\ |_) |_____| (_| |  __/ ||  __/ (__| ||  __/ |   \n  \\__,_|___/_.__/       \\__,_|\\___|\\__\\___|\\___|\\__\\___|_|\n"
// Detect add/insert
/* 
           _               _      _            _            
  _   _ ___| |__         __| | ___| |_ ___  ___| |_ ___ _ __ 
 | | | / __| '_ \ _____ / _` |/ _ \ __/ _ \/ __| __/ _ \ '__|
 | |_| \__ \ |_) |_____| (_| |  __/ ||  __/ (__| ||  __/ |   
  \__,_|___/_.__/       \__,_|\___|\__\___|\___|\__\___|_|
*/
function task() {
    console.log('==============================================================');
    usbDetect.find().then(
        function (devices) {
            for (i = 0; i < devices.length; i++) {
                console.log('locationId:',devices[i]['locationId']);
                console.log('vendorId:','0X'+devices[i]['vendorId'].toString(16));
                console.log('productId:','0X'+devices[i]['productId'].toString(16));
                console.log('deviceName:',devices[i]['deviceName']);
                console.log('manufacturer:',devices[i]['manufacturer']);
                console.log('serialNumber:',devices[i]['serialNumber']);
                console.log('deviceAddress:',devices[i]['deviceAddress']);
                console.log('url:','https://www.the-sz.com/products/usbid/index.php?v='+devices[i]['vendorId'].toString(16)+'&p='+devices[i]['productId'].toString(16));
                console.log('--------------------------------------------------------------');
             }
            //console.log(devices);
            console.log("總共", devices.length, "個裝置");
        }).catch(
            function (err) {
                console.log(err);
            }).then(
                function () {
                    console.log('==============================================================');
                }).then(
                    function () {
                        console.log('done');
                    });

}

program
    .version('0.1.0')
    .option('-l, --list [idtype]', 'list usb device [idtype] dec hex bin','dec')
    .option('-P, --no-parsley', '不要香菜, Remove parsley')
    .option('-t, --teatype [teatype]', '給我一杯 [紅茶]', '紅茶')
    .parse(process.argv);

console.log(logo);
if (program.list)
    task();




