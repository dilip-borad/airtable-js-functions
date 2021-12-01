const getAllDataFromTable = async function (obj) {
    let data = [], queryResult;
    if (typeof obj.view !== 'undefined') {
        let view = await obj.table.getView(obj.view);
        queryResult = await view.selectRecordsAsync();
    } else {
        queryResult = await obj.table.selectRecordsAsync();
    }
    //console.log(queryResult);
    let records = queryResult.records;
    for (let rec of records) {
        if (typeof obj.filters != 'undefined') {
            let { field, action } = obj.filters;
            let filterFieldValue = rec.getCellValue(field);
            if (action === "isNotEmpty") {
                if (filterFieldValue !== null) {
                    continue;
                }
            }
        }
        let row = [];
        row["recId"] = rec.id;
        for (let field of obj.fields) {
            if (typeof field.asString !== undefined && field.asString) {
                row[field.access + "String"] = rec.getCellValueAsString(field.name);
            }
            if (typeof field.getChildId !== 'undefined') {
                row[field.access] = rec.getCellValue(field.name)[0].id;
            } else {
                row[field.access] = rec.getCellValue(field.name);
            }
        }
        data.push(row);
    }
    return data;
}
