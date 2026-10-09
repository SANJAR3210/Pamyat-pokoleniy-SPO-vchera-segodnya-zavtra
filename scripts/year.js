// document.addEventListener('DOMContentLoaded', () => {
//     /* =========================================================
//        УПРАВЛЕНИЕ ГОДОМ КОНКУРСА
//        Год задаётся атрибутом <body data-year="2026">.
//        Скрипт сам:
//        1) превращает кнопку в шапке в переключатель годов
//           (на сайте 2026 ведёт на 2025 и наоборот);
//        2) обновляет копирайт в футере;
//        3) добавляет год в конец заголовка вкладки.
//        ========================================================= */
//     const year = document.body.dataset.year || '2026';
//     const otherYear = year === '2026' ? '2025' : '2026';
//
//     /* --- Кнопка-переключатель в шапке --- */
//     const yearBtn = document.querySelector('.header__btn');
//     if (yearBtn) {
//         yearBtn.textContent = otherYear;
//         // Сайт 2025 лежит в папке 2025/, текущий год — в корне
//         yearBtn.href = year === '2026' ? '2025/index2.html' : '../index.html';
//         yearBtn.removeAttribute('target');
//     }
//
//     /* --- Копирайт в футере --- */
//     document.querySelectorAll('.footer__bottom p').forEach(p => {
//         p.textContent = `© ${year}`;
//     });
//
//     /* --- Заголовок вкладки --- */
//     if (!document.title.includes(year)) {
//         document.title = `${document.title} — ${year}`;
//     }
// });
