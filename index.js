require('dotenv').config();
const fs = require('fs');
const utils = require('./utils');
const convert = require('./convert');
const tmpFileName = new Date().getTime() + '.xlsx';
utils.fileDownload(process.env.SOURCE_URL, tmpFileName).then(() => {
    const zipList = convert.generateList(tmpFileName);
    fs.unlinkSync(tmpFileName);
    fs.writeFileSync(process.env.TARGET_FILE, JSON.stringify(zipList));
    process.exit(0);
});

