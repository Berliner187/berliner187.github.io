var array_data = [
    [
        "Спортивная школа", "Сайт о спортивной школе в Москве.",
        "sport-school-1.png", "sport-school-2.png",
        "Главная", "Запись в школу", 
        "sport-school/index.html", "",
        "content-color1"
    ],
    [
        "Bank Finance", "Реализация расчёта кредита и вклада при помощи JavaScript.",
        "bank-finance-1.png", "bank-finance-2.png",
        "Аннуитетный кредит", "Вклад", 
        "bank/index.html", "BankFinance", 
        "content-color-dark"
    ],
    [
        "Meiner Siten", "Предыдущая версия сайта.",
        "old-version-main.png", "old-version.png",
        "Старт", "Работы", 
        "old-personal-site/index.html", "", 
        "content-color-black"
    ],
    [
        "Мiсто Львiв", "История города, интересные места и достопримечательности.",
        "SiteFace.jpg", "Lviv-1.png",
        "Гарне мiсто Львiв", "Львівська ратуша", 
        "lviv/main-page.html", "Lviv", 
        "content-color2"
    ],
    [
        "Mercedes-Benz", "История, модели, характеристики.",
        "mercedes-benz-s-class.png", "mercedes-benz-history.png",
        "S-Класс", "История", 
        "mercedes/mercedes-benz-main.html", "", 
        "content-color-black"
    ],
    [
        "reDesign", "Редизайн статей.",
        "redesign-overview.png", "redesign-main.png",
        "Стартовая", "Неоморфизм", 
        "re-design/main-page.html", "reDesign", 
        "content-color-redesign"
    ],
    [
        "Сайт-визитка", "Сайт-визитка парикхмахера-стилиста.",
        "hair.png", "stylist-achievements.png",
        "", "", 
        "stylist/index.html", "", 
        "content-color1"
    ],
    [
        "Лофт кофейня", "Сайт о кофейне в стиле лофт.",
        "Cafe-Main.png", "Cafe-Menu.png",
        "Стартовая", "Меню", 
        "cafe/index.html", "Loft_Cafe", 
        "content-color-cafe"
    ]
]

// Шаблон создания блоков с проектами по веб-разработке
function templateContainer() {
    for (let i = 0; i < array_data.length; i++) {
        let block = document.createElement('div');
        block.innerHTML = '\
            <h3>' + array_data[i][0] + '</h3>\
            <p class="align-center">' + array_data[i][1] + '</p>\
            <div id="img-img-container" class="img-img-container">\
                <div class="img-container">\
                    <figure class=' + array_data[i][8] + '>\
                        <figcaption>\
                            <img src=img/' + array_data[i][2] + '>\
                            <h2>' + array_data[i][0] + '</h2>\
                            <p>' + array_data[i][4] + '</p>\
                        </figcaption>\
                    </figure>\
                </div>\
                <div class="img-container ">\
                    <figure class=' + array_data[i][8] + '>\
                        <figcaption>\
                            <img src=img/' + array_data[i][3] + '>\
                            <h2>' + array_data[i][0] + '</h2>\
                            <p>' + array_data[i][5] + '</p>\
                        </figcaption>\
                    </figure>\
                </div>\
            </div>\
            <!-- Кнопка перехода -->\
            <div class="block-buttons">\
                <a target="_blank" class="button-redirect bg-redirect " href=works/sites/' + array_data[i][6] + '>ПЕРЕЙТИ</a>\
                <a target="_blank" class="button-redirect bg-redirect " href=https://github.com/Berliner187/' + array_data[i][7] + '>РЕПОЗИТОРИЙ</a>\
            </div>\
            <hr>';
            document.querySelector('#web').append(block);
    }
}
