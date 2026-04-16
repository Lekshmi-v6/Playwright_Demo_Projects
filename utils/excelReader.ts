import * as XLSX from 'xlsx';

export function getExcelData(filePath: string, sheetName: string) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[sheetName];

    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
}