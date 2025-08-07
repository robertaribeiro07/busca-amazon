# 🔎 Busca Amazon - via API (RapidAPI)

Este projeto é uma interface web que permite buscar produtos da Amazon Brasil utilizando a [API real-time-amazon-data da RapidAPI](https://rapidapi.com/restyler/api/real-time-amazon-data/). Os resultados incluem imagens, preços e links diretos para os produtos na Amazon.

![screenshot](https://user-images.githubusercontent.com/placeholder/screenshot.png)

---

## 🚀 Funcionalidades

- 🔍 Busca por nome de produto
- 📦 Filtros de ordenação (menor preço, maior preço, mais recentes)
- ⏭️ Paginação entre os resultados
- 🖼️ Exibição de imagem, título, preço e link para o produto

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- RapidAPI – [real-time-amazon-data](https://rapidapi.com/restyler/api/real-time-amazon-data)

---

## 2. Configure sua chave da API
No arquivo api-config.js, substitua a chave do exemplo pela sua chave real gerada no RapidAPI:

js
Copiar
Editar
const apiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'SUA_CHAVE_AQUI', // Substitua pela sua chave do https://rapidapi.com/restyler/api/real-time-amazon-data
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};
Você pode obter sua chave criando uma conta no RapidAPI e assinando a API real-time-amazon-data.
Caso gere uma a chave gratuíta, ela ter´um limite de cota por consultas.

 ## 3. Abra o projeto no navegador
Basta abrir o arquivo index.html no seu navegador.

---

## 💻 Como usar localmente
### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/busca-amazon.git
cd busca-amazon

