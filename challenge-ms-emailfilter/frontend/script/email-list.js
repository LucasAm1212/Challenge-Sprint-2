let date = "";

const [form] = document.forms;
const handleSubmit = (event) => {
  event.preventDefault();
  const [input] = form;
  if (input.value) {
    date = input.value;
    init();
  }
};
form.addEventListener("submit", handleSubmit);

const getEmails = async () => {
  try {
    const products = await (await fetch("http://localhost:3000/email")).json();
    return products;
  } catch (error) {
    console.log(`Erro ao obter a lista de produtos:`, error);
  }
};

const init = async () => {
  const emails = await getEmails();
  const [year, month, day] = date.split("-");
  const dateTime = new Date(year, month - 1, day).setHours(23, 59, 59, 999);
  const emailsFiltered = emails?.filter(({ sendDateEmail }) => {
    if (dateTime) return Date.parse(sendDateEmail) < dateTime;
    return true;
  });
  const table = document.querySelector(".table tbody");

  const htmlList = emailsFiltered.reduce((acc, email) => {
    const li = `
    <tr>
      <td>${email.statusEmail}</td>
      <td>${email.subject}</td>
      <td>${email.emailFrom}</td>
      <td>${email.emailTo}</td>
      <td>${email.text}</td>
      <td>${new Date(email.sendDateEmail).toLocaleDateString()}</td>
    </tr>`;

    return acc + li;
  }, "");

  table.innerHTML = htmlList;
};

init();
