

function Search(text: string, data: Array<object>): Array<object> {
  console.log(data)
  const filteredData = data.filter((item:any) => {
    let name = item.first_name + " " + item.last_name;
    text = text.toLowerCase();
    name = name.toLowerCase();
    return name.includes(text)
  })
  console.log(filteredData)
  return filteredData;
}

export default Search
