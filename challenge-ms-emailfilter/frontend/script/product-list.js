const getProducts = async () => {
  try {
    const products = await (
      await fetch("http://localhost:3000/product")
    ).json();
    return products;
  } catch (error) {
    console.log(`Erro ao obter a lista de produtos:`, error);
  }
};

const init = async () => {
  const products = await getProducts();
  const table = document.querySelector(".table tbody");

  const htmlList = products.reduce((acc, product) => {
    const li = `
    <tr>
      <td>${product.sku}</td>
      <td>${product.name}</td>
      <td>R$ ${Number(product.price).toFixed(2)}</td>
      <td>${product.quantity}</td>
    </tr>`;

    return acc + li;
  }, "");

  table.innerHTML = htmlList;
};

init();
