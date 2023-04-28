const fetchMetadata = async (id) => {
  const url = "https://api.up2tom.com/v3/models";
  const name = "Drink choice";

  const response = await fetch(url, {
    headers: {
      Authorization: "Token 9307bfd5fa011428ff198bb37547f979",
      "Content-Type": "application/vnd.api+json",
    },
  });
  const result = await response.json();
  for (const iterator of result.data) {
    console.log(iterator);
    if (iterator.attributes.name === name) {
      console.log(iterator.attributes.metadata.attributes);
      return iterator;
    }
  }
  // console.log(result.data[2]);
  // return result.data;
};

export default fetchMetadata;
// $.get({
//     url: 'https://api.up2tom.com/v3/models'
//     headers: { 'Authorization': 'Token <key>' },
//     contentType: 'application/vnd.api+json'
//   });
