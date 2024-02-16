document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  // Substitua pelo seu token real
  const bearerToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Yjg1ZjIzZWQ0MjcwMmM1MTNkNTY2YyIsImlhdCI6MTcwNjU4Nzg1OCwiZXhwIjoxNzA2NTkxNDU4fQ.P30ueXTaQ7o84pewdoi-35vfMgGqLrUIDjIt9Do3REk";

  fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${bearerToken}`,      
    },
    body: formData,
  })
    .then((response) => {      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Erro:", error));
});
