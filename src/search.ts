
interface data {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}
function Search(text: string, data: Array<data>): Array<data> {
  const filteredData = data.filter((item:any) => {
    let name = item.first_name + " " + item.last_name;
    text = text.toLowerCase();
    name = name.toLowerCase();
    return name.includes(text)
  })
  return filteredData;
}

export default Search
