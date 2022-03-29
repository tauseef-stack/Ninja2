var process =
{
    item : "FireFox", // to use this value in further we will use this.key
    
    vowelsCount : function() {
        var count = 0;
        for (var i=0 ; i<this.item.length ; i++) {
            if (this.item[i]=="a" || this.item[i]=="e" || this.item[i]=="i" || this.item[i]=="o" || this.item[i]=="u") {
                count+=1;
            }
        }
        console.log(count)
    },
    reverse : function() {
        var result = "";
        for (var i=0 ; i<this.item.length ; i++) {
        result+=this.item[this.item.length-1-i]
        }
        console.log(result)
    },
    changeCase : function() {
        var result="";
        for (var i=0 ; i<this.item.length ; i++) {
            if (this.item[i] != this.item[i].toUpperCase()) {
                result += this.item[i].toUpperCase();
            
            }
            else if (this.item[i] != this.item[i].toLowerCase()) {
                result+=this.item[i].toLowerCase();
            }
        }
        console.log(result)
    },
    


}
process.vowelsCount()
process.reverse();
process.changeCase();