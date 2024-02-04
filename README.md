# Локальний сервер оновлення тривог

Node.js сервер, який із заданою періодичністю отримує дані про тривоги з [alerts.in.ua API](https://alerts.in.ua/) та зберігає їх у файл `current_alert.json` з подальшою обробкою і виводом пвідомлення про початок та закінчення тривоги для зазначеного регіону України.

![image](https://github.com/sergeiown/Alert_Server/assets/112722061/c184aa5e-ec48-4589-9c02-405fd4abed63)

## Встановлення

Встановіть залежності: `npm install`.

**ВАЖЛИВО:** Створіть файл `token.json` у корені проекту та додайте свій [API](https://alerts.in.ua/) токен:

```
{
  "token": "ваш-токен"
}
```

## Використання

Гарною практикою буде використання підготованих batch script файлів `start_alertserver_visible.bat` *(запуск сервера зі згорнутим вікном термінала)* чи `start_alertserver_hidden.bat` *(запуск сервера у фоновому режимі)*, після чого сервер автоматично отримуватиме дані про тривоги кожну хвилину та зберігатиме їх у файлі `current_alert.json`.

Кожен із запропонованих варіантів має запобіжник від запуску кількох екземплярів сервера.

Всі події та помилки записуються у зручному форматі *(Comma-Separated Values)* у файлі `log.csv`.

Додано `tray icon` з меню для перегляду мапи поточних тривог, виконання налаштувань, перегляду додаткової інформації та можливості завершення роботи.

Доступне налаштування регіонів, по яких має виводитись повідомлення про тривогу та автоматичний запуск сервера при старті системи.

Повідомлення про поточну тривогу та її скасування буде виводитись через центр повідомлень Windows зі звуковим нагадуванням та зміною зображення `tray icon`.

Також в разі необхідності завершення роботи сервера, що працює у фоновому режимі, можна використати `stop_alertserver.bat`.

## Внесок

В разі виявлення зацікавленості проєктом розглядаю можливість створення повноцінного клієнт-серверного застосунку.

Якщо у вас є пропозиції або бажання запропонувати покращення до проєкту, будь ласка, відкривайте Pull Request.

## Ліцензія

[Copyright (c) 2024 Serhii I. Myshko](https://github.com/sergeiown/Current_Alert/blob/main/LICENSE)
