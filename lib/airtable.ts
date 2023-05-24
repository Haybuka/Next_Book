const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_KEY);

const table = base("coffee store");

//To refactore the object returned from airtable
// const getMinifiedRecord = (record) => {
//   return {
//     ...record.fields,
//   };
// };
// const getMinifiedRecords = (records) =>
//   records.map((record) => getMinifiedRecord(record));

export { table };


