# project

Краткая информация о приложении User Project
Приложение содержит две страницы: “Login Form” и “User Data”
Получение данных пользователя происходит при нажатии на кнопку Login  на первой странице
Информация про пользователя отображается на странице “User Data”
При получении ошибки, она выводится на странице “Login Form”

Содержание страницы Login Form
заголовок - “ Login Form”
Форма с полями и кнопкой Login
При нажатии на кнопку Login отправляется запрос на получение данных пользователя
Во время запроса отображается спиннер на странице
Если пришла ошибка, то она должна быть отображена на странице

Требования к полям
Email:
компонент Input;
обязательное поле;
тип данных: string;
Минимальное количество символов - 12;
Максимально количество символов - 40;
Password:
компонент Input;
Обязательное поле
тип данных: string;
Используйте типовую валидацию для password
"Login":
кнопка с типом Submit.

Содержание страницы User Data
заголовок - “Имя пользователя, которое вы получите”
Остальные данные расположите на странице по вашему усмотрению (все данные из ответа брать не нужно)

Cоздать дополнительную страницу User History 
На этой странице должны отображаться данные в виде карточек всех пользователей, которых вы получали (например, имя, емейл, должность). Каждая карточка должна иметь кнопка удалить карточку, при нажатии на которую будет удалена именно эта карточка. Также должна присутствовать кнопка Удалить все данные, для очистки всей страницы. Кнопка отображаться не должна, если данных нет.