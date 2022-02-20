
const fs = require('fs')

fs.readFile('./rawfile/lv_json.txt','utf8',(err,data)=>{


    //console.log(data)

    readString(data)

})


function readString(data){


    var utext = ''

    data.split('').forEach(
        
        ch => {

            if (ch.charCodeAt(0) > 256){

                //console.log(ch)

                utext += ch;

            }


            

        }
        
        
    )
    generateFile(utext)



}


function generateFile(utext){


    var html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <style>
@font-face {
    font-family: 'LouisVuittonGlobal';
    src: url('./Louis Vuitton Global/LouisVuittonGlobal-Regular.ttf');
    font-weight: 500; 
}
@font-face {
    font-family: 'LouisVuittonGlobal-Demi';
    src: url('./Louis Vuitton Global Demi/LV_Global_Demi.ttf');
    font-weight: 500; 
}
@font-face {
    font-family: 'LouisVuittonGlobal-Light';
    src: url('./Louis Vuitton Global Light/LouisVuittonGlobal-Light.ttf');
    font-weight: 500; 
}

.demi {
    margin-bottom: 0;
    font-size: 28px;
    font-family: LouisVuittonGlobal-Demi;
}

.light {
    margin-bottom: 0;
    font-size: 28px;
    font-family: LouisVuittonGlobal-Light;
}

.normal {
    margin-bottom: 0;
    font-size: 28px;
    font-family: LouisVuittonGlobal;
}
    </style>
    </head>
<body>`


var alpha = `ABCDEFGHIJKLM
NOPQRSTUVWXYZ
abcdefghijklm
nopqrstuvwxyz
1234567890
微信登录请使用微信扫码访问VR硬箱与家具展空间体验
`
// hello

var fontarray = ["normal","light","demi"]

    


    fontarray.forEach(font=>{

        var hh = `<br>\n<div class=${font}>${utext}${alpha}</div>\n<br>`

        html += hh
    })




    html+=`
    
</body>
</html>`


    console.log(html)


    fs.writeFile('co.html', html, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
      });

}