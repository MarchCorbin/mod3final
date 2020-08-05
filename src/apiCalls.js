export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}


export const postURL = (postInput) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postInput)
  })
}

export const deleteUrl = async (id) => {
  const response = await fetch(`http://localhost:3001/api/v1/urls/${id}`, {
    method: "DELETE",
  });
  const data = await response;
  return data;
};