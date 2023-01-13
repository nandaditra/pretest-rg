//javascript
//code 
let totalPenduduk = 0

//jumlah penduduk planet thanos dihari ke 50
let hari = 50
let totalSementara = 1

for(let i=1; i<=hari;i++) {
    
    if(i%3==0) {
        totalPenduduk = Math.floor(totalPenduduk/2)
    } 
    else if (i===1) {
        totalPenduduk = 1
    } 
    else  {
        let totalubah = totalPenduduk*3
        totalPenduduk = totalubah
    }
   
}

console.log("ada "+ totalPenduduk + " penduduk")

