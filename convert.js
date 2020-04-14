const utils = require('./utils');
const XLSX = require('xlsx');
const generateList = (sourceFileName) => {
    const workbook = XLSX.readFile(sourceFileName);
    const settlementSheetName = 'Települések';
    const budapestSheetName = 'Bp.u.';
    const settlementJson = XLSX.utils.sheet_to_json(workbook.Sheets[settlementSheetName]);
    const budapestJson = XLSX.utils.sheet_to_json(workbook.Sheets[budapestSheetName]);
    const settlementRecordList = settlementJson.map((record) => {
        return {value: record.IRSZ, title: record['Település']}
    });

    const budapestRecordList = budapestJson.filter(filterRecord => filterRecord['KER'] !== 0).map((record) => {
        return {value: record.IRSZ, title: 'Budapest ' + record['KER'] + ' kerület'}
    });

    const zipList = settlementRecordList.concat(budapestRecordList);
    const zipListUnique =utils.findUnique(zipList);
    return zipListUnique;
}

module.exports = {generateList};
