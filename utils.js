const https = require("https");
const fs = require('fs');
const XLSX = require('xlsx');

const hello = () => {
    console.log('hello');
}

const fileDownload = (source, target) => {
    return new Promise(resolve => {
        https.get(source, (res) => {
            const data = [];
            res.on('data', (chunk) => {
                data.push(chunk);
            }).on('end', () => {
                const buffer = Buffer.concat(data);
                fs.writeFileSync(target, buffer);
                resolve();
            });
        });
    });
}

const findUnique = (recordList) => {
    const returnList = [];
    recordList.forEach((record) => {
        if (returnList.find(a => a.value === record.value) === undefined) {
            returnList.push(record);
        }
    });
    return returnList;
};

module.exports = {fileDownload, findUnique,hello};
