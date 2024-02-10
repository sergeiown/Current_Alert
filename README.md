# Локальний сервер оновлення тривог

Node.js сервер, який із заданою періодичністю отримує дані про тривоги, що надаються [alerts.in.ua](https://alerts.in.ua/) з подальшою обробкою і виводом повідомлення про початок та закінчення тривоги для зазначеного регіону України.

| Структура: |  |
| --- | --- |
| Залежності | ![image](https://github.com/sergeiown/Alert_Server/assets/112722061/f475f1d0-3e1a-41e7-b810-24c687084b27) |

## Встановлення

На поточний момент реалізована можливість повністю автоматизованого встановлення. Інсталятор виконано у мінімалістичному варіанті з використанням Batch scripts та PowerShell.

Порядок дій:
- завантажити архів інсталятора `Alert_server_setup.zip` доступний за посиланням: [Alert server releases](https://github.com/sergeiown/Alert_Server/releases);
- видобути інсталятор з архіву у вибраному розташуванні;
- запустити інсталятор `Alert_server_setup.bat`.

Інсталяція буде виконана в розташуванні `%userprofile%\Documents\Alert_server`, під час встановлення буде перевірено наявність [Git](https://git-scm.com/) та [Node.js](https://nodejs.org/en) та їх інсталяція за необхідності.

Безпосередньо інсталяція локального сервера оновлення тривог складається з імпорту проєкту з репозиторію [GitHub](https://github.com/sergeiown/Alert_Server), встановлення необхідних залежностей та ярликів в меню "Пуск".

Код відкритий, скомпільовані файли не використовуються.

---
***Disclamer:***  
*Тестування та адаптація функціоналу проводились на 64-розрядних версіях Windows 10 та 11 версії 22H2.*
*На інших платформах або версіях Windows можливості можуть бути обмежені або недоступні.*
*Рекомендується використовувати Windows 10 версії 22H2 або Windows 11 для кращого досвіду.*

## Використання

Використання локального сервера оновлення тривог напрочуд просте та інтуїтивно зрозуміле. Перший запуск виконується автоматично після завершення процесу інсталяції.

Індикація стану і керування налаштуваннями відбуваються через tray icon. Серед налаштувань доступний запуск сервера під час старту системи та вибір регіонів, щодо яких відбуватиметься відстеження наявності тривог.

Інформування, щодо поточної тривоги та відміни тривоги, збереження історії тривог відбувається через Windows Notification Center з використанням [Snoretoast](https://github.com/KDE/snoretoast). Додатково використовується індикація тривоги через tray icon та звукове оповіщення.

| Зовнішній вигляд:  | |
| --- | --- | 
| ![image](https://github.com/sergeiown/Alert_Server/assets/112722061/967cfb51-a668-4bfb-8028-f0d4067d4469) | ![image](https://github.com/sergeiown/Alert_Server/assets/112722061/7b2c63d6-eacb-47ee-b92c-956801682c0b) | 
## Видалення

| Рекомендація: |  |
| --- | --- |
| В разі необхідності деінсталяції локального сервера оновлення тривог потрібно використати ярлик `Uninstall` в меню "Пуск => Alert server". | ![image](https://github.com/sergeiown/Alert_Server/assets/112722061/139ee2ee-e07c-44b7-b2a2-4e42c8542dea) |

## Внесок

Якщо у вас є пропозиції або бажання запропонувати покращення до проєкту, будь ласка, відкривайте Pull Request.

## Ліцензія

[Copyright (c) 2024 Serhii I. Myshko](https://github.com/sergeiown/Current_Alert/blob/main/LICENSE)
