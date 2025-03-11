# [DW] AULA 07 - CSS Grid

CSS Grid é um sistema de layout poderoso e bidimensional que permite criar estruturas complexas de forma simples e organizada. Ele funciona com um **container** (grid container) e **itens filhos** (grid items). Vamos explorar as principais propriedades para trabalhar com CSS Grid.

---

## **Índice**
- [Grid Container](#grid-container)
  - [Elaboração do grid](#elaboracao-do-grid)
  - [Propriedades de Alinhamento](#propriedades-de-alinhamento)
- [Grid Items](#grid-items)
  - [Comportamento dos filhos no grid](#comportamento-dos-filhos-no-grid)
  - [Propriedades de Alinhamento](#propriedades-de-alinhamento-dos-itens)
- [Exemplo Completo](#exemplo-completo)

---

## **Grid Container**

O **grid container** é o elemento pai que define o contexto de grid. Para criar um grid, usamos:

```css
#container {
  display: grid;
}
```

### **Elaboração do grid**

Para definir o layout das colunas e linhas, usamos as seguintes propriedades:

- **grid-template-columns** – Define o tamanho e número de colunas do grid.
- **grid-template-rows** – Define o tamanho e número de linhas do grid.
- **grid-template-areas** – Define áreas nomeadas no grid para facilitar o posicionamento.

Exemplo:

```css
#container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
}
```

Você pode usar **fr** para criar colunas e linhas proporcionais:

```css
#container {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 200px;
}
```

### **Propriedades de Alinhamento**

As propriedades de alinhamento permitem posicionar os itens dentro do grid container:

- **align-content** – Alinha o conteúdo ao longo do eixo Y (vertical).
- **justify-content** – Alinha o conteúdo ao longo do eixo X (horizontal).
- **place-content** – Combina `align-content` e `justify-content`.

> 💡 **Dica:** Propriedades com `align` sempre trabalham no **eixo Y**. Propriedades com `justify` sempre trabalham no **eixo X**.

Exemplo:

```css
#container {
  place-content: center;
}
```

Além de `content`, também temos alinhamento individual dos itens:

- **align-items** – Alinha os itens individualmente ao longo do eixo Y.
- **justify-items** – Alinha os itens individualmente ao longo do eixo X.
- **place-items** – Combina `align-items` e `justify-items`.

Exemplo:

```css
#container {
  place-items: center;
}
```

> 💡 **Dica:** As propriedades de alinhamento (`content`, `items`, `self`) apenas fazem sentido quando o grid container possui espaço suficiente e quando os `grid-templates` não têm tamanhos relativos.

---

## **Grid Items**

Os **grid items** são os filhos diretos do container. Eles podem ser posicionados e redimensionados com as seguintes propriedades:

### **Comportamento dos filhos no grid**

- **grid-column** – Define a posição e extensão do item nas colunas.
  - **grid-column-start** – Define onde o item começa na coluna.
  - **grid-column-end** – Define onde o item termina na coluna.

- **grid-row** – Define a posição e extensão do item nas linhas.
  - **grid-row-start** – Define onde o item começa na linha.
  - **grid-row-end** – Define onde o item termina na linha.

Exemplo:

```css
.item:nth-child(1) {
  grid-row: 1/4;
}

.item:nth-child(2) {
  grid-column: 2/4;
  grid-row: 1/3;
}

.item:nth-child(3) {
  grid-row: 3/4;
}
```

Você também pode usar valores como `span` para definir o tamanho automaticamente:

```css
.item:nth-child(1) {
  grid-column: span 2;
}
```

### **Propriedades de Alinhamento dos Itens**

Para alinhar os itens dentro de suas células, usamos:

- **align-self** – Alinha o item individualmente ao longo do eixo Y.
- **justify-self** – Alinha o item individualmente ao longo do eixo X.

Exemplo:

```css
.item:nth-child(1) {
  align-self: center;
  justify-self: center;
}
```

Você também pode usar valores como:
- `start` – Alinha no início.
- `center` – Alinha no centro.
- `end` – Alinha no final.

Exemplo:

```css
.item:nth-child(2) {
  align-self: start;
  justify-self: end;
}
```

---

## **Exemplo Completo**

HTML:

```html
<div id="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

CSS:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;

  /* Alinhamento em ambos os eixos */
  place-content: center;
}

.item {
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item:nth-child(1) {
  grid-row: 1/4;
}

.item:nth-child(2) {
  grid-column: 2/4;
  grid-row: 1/3;
}

.item:nth-child(3) {
  grid-row: 3/4;
}
```
---

## 📝 Exercícios Práticos  

1️⃣ Modifique o código para que o **item 4** ocupe duas colunas.  
2️⃣ Altere o layout para ter **2 colunas e 3 linhas**.  
3️⃣ Use `grid-template-areas` para organizar os itens de forma diferente.  
