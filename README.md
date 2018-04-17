# Курс по синхронизации кода JavaScript

## 1-е задание
Сервер: https://httpbin.org/  
Задача: написать программу, которая загрузит 4 картинки с сервера и покажет их в галерее (нарисует на canvas) после загрузки.
Загрузкой должен заниматься класс ImageLoader, который грузит переданный список URL изображений и возвращает Promise на загрузку всех картинок.
До окончания загрузки должен висеть preloader.
Любая ошибка должна отображаться в alert.  
Материалы:
- https://github.com/mbeaudru/modern-js-cheatsheet#variable-declaration-var-const-let
- https://github.com/mbeaudru/modern-js-cheatsheet#class
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- https://github.com/mbeaudru/modern-js-cheatsheet#promises
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

## 2-е задание
Сервер, задача - те же самые.  
Особенности: при работе в основном скрипте с ImageLoader надо использовать async/await.  
Материалы:
- https://github.com/mbeaudru/modern-js-cheatsheet#async-await
- https://habrahabr.ru/company/ruvds/blog/326074/
