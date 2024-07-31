$(document).ready(function () {
  let items = [
    { id: 1, product: "Kapo" },
    { id: 2, product: "Chokita" },
    { id: 3, product: "Chispop" },
    { id: 4, product: "Ramitas de queso" },
    { id: 5, product: "303" },
    { id: 6, product: "Frugeles" },
    { id: 7, product: "Tabletones" },
    { id: 8, product: "Cubanitos" },
    { id: 9, product: "Koyac" },
  ];

  //   elemento grid jquery
  const $grid = $(".grid");

  // Inicializar la grilla con Muuri
  const grid = new Muuri(".grid", {
    dragEnabled: true,
  });

  // Agregar items a la grilla y al DOM
  items.forEach(function (item) {
    const $item = $(
      `<div class="item" data-id="${item.id}">
           <div class="item-content">
              ${item.product}
           </div>
         </div>`
    );
    $grid.append(
      $item
    ); /* https://api.jquery.com/append/#append-content-content */
    grid.add($item[0]); /* https://docs.muuri.dev/grid-methods.html#add */
  });

  // Escuchar el evento "move" para reordenar el arreglo
  //   https://docs.muuri.dev/grid-events.html#move
  grid.on("move", function () {
    const newItems = [];

    /* https://docs.muuri.dev/grid-methods.html#getitems */
    grid.getItems().forEach(function (gridItem) {
      const id = $(gridItem.getElement()).data(
        "id"
      ); /*getElement: https://docs.muuri.dev/item-methods.html#getelement  data (data-id): https://api.jquery.com/data/#data-key*/
      const item = items.find(function (item) {
        return item.id === id;
      });

      newItems.push(item);
    });
    items = newItems;
    console.log(items);
  });
});
