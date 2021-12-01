# Airtable JS Functions
>**Function getAllDataFromTable**

Allow to fetch/get all data from table with using views. By default you need to pass some of the parameters when you call it.
  
  ```
  let tableObj = base.getTable("Table-Name");
  let records = await getAllDataFromTable({
    table: tableObj,
    view: "viewName",
    fields: [
      { "name": "Actual Field Name 1", "access": "fieldAccessName1" },
      // Also pass asString as true when you want to access object value as a string.
      { "name": "Actual Field Name 2", "access": "fieldAccessName2", asString:true } 
    ]
  });
  ```
