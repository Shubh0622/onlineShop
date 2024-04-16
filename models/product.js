const fs = require('fs');
const path = require('path');

const getProductsFromFile = (cb) =>{
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err,fileContent)=>{
            if(err) {
                cb([]);
            }
            else{
                cb(JSON.parse(fileContent));
            }
        });
}

module.exports = class Product{
    constructor(t){
        this.title=t;
    }
    save(){
        getProductsFromFile(products => {
            const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }
    static fetch(cb){
        getProductsFromFile(cb);
    }
}