# mobster - техническое задание

Используя только читстый JS необходимо в документе [index.html](index.html) создать такую структуру разметки

```HTML
<div>
    <div>
        <iframe src="frame/index.html" frameborder=0></iframe>
    </div>
</div>
```
------

Весь JS нужно разместить в отдельном файле [index.js](index.js). Все инициализации, объявления и выполнения JS должны происходить в анонимной области видимости. Подключить файл [index.js](index.js) к документу можно только с помощью JS (т.е. нельзя просто в документ вписать `</script src="index.js"></script>`);

------

Основной `<div>...</div>` должен быть зафиксирован в нижней части экрана, занимать 100% от ширины и 25% от высоты экрана, быть адаптивным (т.е. должен иметь возможность растягиваться под разные размеры экранов - смартфоны / планшеты). Cодержимое основного `<div>...</div>` должно заполнять все доступное пространство внутри. CSS стили в создаваемой конструкции можно применять только с помощью JS.

------

В встроеном документе `<iframe src="frame/index.html" frameborder=0></iframe>` [frame/index.html](frame/index.html) нужно создать верстку которая будет менять картинку в зависимости от ориентации экрана.

------

Примеры того как должен выглядеть итоговый результат

- Смартфон : [smartphone.mp4](examples/smartphone.mp4)
- Планшет  : [tablet.mp4](examples/tablet.mp4)

------

## Чего делать нельзя!
* Изменять  CSS в документе [index.html](index.html)
* Дополнять CSS в документе [index.html](index.html)
* Редактировать существующую HTML разметку [index.html](index.html)
