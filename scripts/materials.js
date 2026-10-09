document.addEventListener('DOMContentLoaded', () => {
    /* =========================================================
       КОНКУРСНЫЕ РАБОТЫ
       Чтобы добавить работу — допишите объект в список items
       нужной номинации. Чтобы создать страницу другой номинации,
       скопируйте nomination.html и поменяйте data-nomination
       у <body> на один из ключей: video, calendar, poster,
       museum, infographic, excursion.
       ========================================================= */
    const NOMINATIONS_2026 = {
        video: {
            label: 'Видеоролик',
            description: 'Ролики участников о людях, событиях и традициях профессионального образования Томской области за 2026 год',
            items: []
        },

        calendar: {
            label: 'Календарь',
            description: 'Тематические календари, посвящённые знаменательным датам и истории отрасли',
            items: [
                {
                    title: 'Календарь «Год защитника Отечества»',
                    author: 'Козлов Дмитрий Игоревич',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/calendar-1.jpg',
                    type: 'image',
                    src: 'images/Materials/calendar-1-full.jpg'
                },
                {
                    title: 'Календарь «Традиции моего колледжа»',
                    author: 'Миронова Екатерина Павловна',
                    school: 'ОГБПОУ «Томский строительный колледж»',
                    preview: 'images/Materials/calendar-2.jpg',
                    type: 'image',
                    src: 'images/Materials/calendar-2-full.jpg'
                }
            ]
        },
        poster: {
            label: 'Плакат',
            description: 'Авторские плакаты о великих свершениях и людях труда',
            items: [
                {
                    title: '«Труженики тыла»',
                    author: 'Гусев Артём Викторович',
                    school: 'ОГБПОУ «Томский транспортный колледж»',
                    preview: 'images/Materials/poster-1.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-1-full.jpg'
                },
                {
                    title: '«Служили люди»',
                    author: 'Волкова Ольга Сергеевна',
                    school: 'ОГБПОУ «Томский медицинский колледж»',
                    preview: 'images/Materials/poster-2.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-2-full.jpg'
                },
                {
                    title: '«Символы эпохи»',
                    author: 'Романов Павел Денисович',
                    school: 'ОГБПОУ «Томский промышленно-технологический колледж»',
                    preview: 'images/Materials/poster-3.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-3-full.jpg'
                }
            ]
        },
        museum: {
            label: 'Виртуальный музей',
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников',
            items: [
                {
                    title: 'Виртуальный музей «Кабинет труда»',
                    author: 'Захарова Вера Константиновна',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/museum-1.jpg',
                    type: 'link',
                    src: 'https://example.com/museum-1'
                },
                {
                    title: 'Виртуальная экскурсия «Гордость колледжа»',
                    author: 'Тихонов Никита Олегович',
                    school: 'ОГБПОУ «Томский строительный колледж»',
                    preview: 'images/Materials/museum-2.jpg',
                    type: 'link',
                    src: 'https://example.com/museum-2'
                }
            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования',
            items: [
                {
                    title: '«Путь от ремесла к профессии»',
                    author: 'Белова Дарья Андреевна',
                    school: 'ОГБПОУ «Томский экономический колледж»',
                    preview: 'images/Materials/infographic-1.jpg',
                    type: 'image',
                    src: 'images/Materials/infographic-1-full.jpg'
                },
                {
                    title: '«Выпускники — гордость страны»',
                    author: 'Семёнов Игорь Витальевич',
                    school: 'ОГБПОУ «Томский транспортный колледж»',
                    preview: 'images/Materials/infographic-2.jpg',
                    type: 'image',
                    src: 'images/Materials/infographic-2-full.jpg'
                }
            ]
        },
        excursion: {
            label: 'Видеоэкскурсия',
            description: 'Видеоэкскурсии по памятным местам Томска и Томской области',
            items: [
                {
                    title: '«Улица, где начиналась профессия»',
                    author: 'Фёдорова Ксения Дмитриевна',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/excursion-1.jpg',
                    type: 'video',
                    src: 'https://www.youtube.com/embed/XXXXXXXXXXX'
                },
                {
                    title: '«Музей мастеров»',
                    author: 'Орлов Максим Сергеевич',
                    school: 'ОГБПОУ «Томский промышленно-технологический колледж»',
                    preview: 'images/Materials/excursion-2.jpg',
                    type: 'video',
                    src: 'https://www.youtube.com/embed/XXXXXXXXXXX'
                }
            ]
        }
    };

    const NOMINATIONS_2025 = {
        video: {
            label: 'Видеоролик',
            description: 'Ролики участников о людях, событиях и традициях профессионального образования Томской области за 2025 год',
            items: [
                {
                    title: '«Развитие водного транспорта»',
                    author: 'Чалина Зарина',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: '/2025/images/TTSTPREV.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-225946258&id=456239057'
                },
                {
                    title: '«ТКСТ»',
                    author: 'Силицкая Дарья',
                    school: 'ОГБПОУ «Томский коммунально-строительный техникум»',
                    preview: '/2025/images/TKSTPNG.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-207118347&id=456239432&hash=53992663ffa71625&hd=4'
                },
                {
                    title: '«Колпашевский мед - в завтра билет»',
                    author: 'Заварницина Светлана',
                    school: 'Колпашевский филиал ОГБПОУ "Томский базовый медицинский колледж"',
                    preview: '/2025/images/kp-tbmk.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-178490239&id=456239225&hash=25acfdd7da5b7834'
                },
                {
                    title: '«Вторая серия интервью о чемпионате «Профессионалы»',
                    author: 'Филатова Олеся',
                    school: 'ОГБПОУ "Томский государственный педагогический колледж"',
                    preview: '/2025/images/TGPKPREW.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-64194219&id=456239432&hash=466dd9a4b8248ef4'
                }
            ]
        },

        calendar: {
            label: 'Календарь',
            description: 'Тематические календари, посвящённые знаменательным датам и истории отрасли',
            items: [
                {
                    title: 'Календарь «Год защитника Отечества»',
                    author: 'Козлов Дмитрий Игоревич',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/calendar-1.jpg',
                    type: 'image',
                    src: 'images/Materials/calendar-1-full.jpg'
                },
                {
                    title: 'Календарь «Традиции моего колледжа»',
                    author: 'Миронова Екатерина Павловна',
                    school: 'ОГБПОУ «Томский строительный колледж»',
                    preview: 'images/Materials/calendar-2.jpg',
                    type: 'image',
                    src: 'images/Materials/calendar-2-full.jpg'
                }
            ]
        },
        poster: {
            label: 'Плакат',
            description: 'Авторские плакаты о великих свершениях и людях труда',
            items: [
                {
                    title: '«Труженики тыла»',
                    author: 'Гусев Артём Викторович',
                    school: 'ОГБПОУ «Томский транспортный колледж»',
                    preview: 'images/Materials/poster-1.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-1-full.jpg'
                },
                {
                    title: '«Служили люди»',
                    author: 'Волкова Ольга Сергеевна',
                    school: 'ОГБПОУ «Томский медицинский колледж»',
                    preview: 'images/Materials/poster-2.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-2-full.jpg'
                },
                {
                    title: '«Символы эпохи»',
                    author: 'Романов Павел Денисович',
                    school: 'ОГБПОУ «Томский промышленно-технологический колледж»',
                    preview: 'images/Materials/poster-3.jpg',
                    type: 'image',
                    src: 'images/Materials/poster-3-full.jpg'
                }
            ]
        },
        museum: {
            label: 'Виртуальный музей',
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников',
            items: [
                {
                    title: 'Виртуальный музей «Кабинет труда»',
                    author: 'Захарова Вера Константиновна',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/museum-1.jpg',
                    type: 'link',
                    src: 'https://example.com/museum-1'
                },
                {
                    title: 'Виртуальная экскурсия «Гордость колледжа»',
                    author: 'Тихонов Никита Олегович',
                    school: 'ОГБПОУ «Томский строительный колледж»',
                    preview: 'images/Materials/museum-2.jpg',
                    type: 'link',
                    src: 'https://example.com/museum-2'
                }
            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования',
            items: [
                {
                    title: '«Путь от ремесла к профессии»',
                    author: 'Белова Дарья Андреевна',
                    school: 'ОГБПОУ «Томский экономический колледж»',
                    preview: 'images/Materials/infographic-1.jpg',
                    type: 'image',
                    src: 'images/Materials/infographic-1-full.jpg'
                },
                {
                    title: '«Выпускники — гордость страны»',
                    author: 'Семёнов Игорь Витальевич',
                    school: 'ОГБПОУ «Томский транспортный колледж»',
                    preview: 'images/Materials/infographic-2.jpg',
                    type: 'image',
                    src: 'images/Materials/infographic-2-full.jpg'
                }
            ]
        },
        excursion: {
            label: 'Видеоэкскурсия',
            description: 'Видеоэкскурсии по памятным местам Томска и Томской области',
            items: [
                {
                    title: '«Улица, где начиналась профессия»',
                    author: 'Фёдорова Ксения Дмитриевна',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/Materials/excursion-1.jpg',
                    type: 'video',
                    src: 'https://www.youtube.com/embed/XXXXXXXXXXX'
                },
                {
                    title: '«Музей мастеров»',
                    author: 'Орлов Максим Сергеевич',
                    school: 'ОГБПОУ «Томский промышленно-технологический колледж»',
                    preview: 'images/Materials/excursion-2.jpg',
                    type: 'video',
                    src: 'https://www.youtube.com/embed/XXXXXXXXXXX'
                }
            ]
        }
    };

    const NOMINATIONS = { '2025': NOMINATIONS_2025, '2026': NOMINATIONS_2026 };

    const CARD_MODS = ['work-card--light', 'work-card--primary', 'work-card--dark'];

    const year = document.body.dataset.year || '2026';
    const key = document.body.dataset.nomination;
    const data = (NOMINATIONS[year] || NOMINATIONS['2026'])[key];
    if (!data) return;

    document.title = `${data.label} — конкурсные работы «Память поколений»`;

    const labelEl = document.getElementById('nominationLabel');
    const descEl = document.getElementById('nominationDescription');
    const countEl = document.getElementById('worksCount');
    const gridEl = document.getElementById('worksGrid');

    if (labelEl) labelEl.textContent = data.label;
    if (descEl) descEl.textContent = data.description;
    if (countEl) {
        const n = data.items.length;
        countEl.textContent = `Размещено работ: ${n}`;
    }

    /* --- Рендер карточек --- */
    if (!data.items.length) {
        const empty = document.createElement('p');
        empty.className = 'works__empty';
        empty.textContent = `Работы за ${year} год появятся позже.`;
        gridEl.appendChild(empty);
        return;
    }

    data.items.forEach((work, i) => {
        const card = document.createElement('article');
        card.className = `work-card ${CARD_MODS[i % CARD_MODS.length]}`;

        const img = document.createElement('img');
        img.className = 'work-card__preview';
        img.src = work.preview;
        img.alt = work.title;
        card.appendChild(img);

        const body = document.createElement('div');
        body.className = 'work-card__body';
        body.innerHTML = `
            <h3 class="work-card__title">${work.title}</h3>
            <p class="work-card__author">${work.author}</p>
            <p class="work-card__school">${work.school}</p>
        `;

        const btn = document.createElement('button');
        btn.className = 'work-card__btn';
        btn.type = 'button';
        btn.textContent = work.type === 'video' ? 'Смотреть' : (work.type === 'link' ? 'Открыть' : 'Рассмотреть');
        btn.addEventListener('click', () => openModal(work));
        body.appendChild(btn);

        card.appendChild(body);
        gridEl.appendChild(card);
    });

    /* --- Модальное окно --- */
    const modal = document.getElementById('workModal');
    const overlay = document.getElementById('workModalOverlay');
    const closeBtn = document.getElementById('workModalClose');
    const modalTitle = document.getElementById('workModalTitle');
    const modalMedia = document.getElementById('workModalMedia');
    const modalMeta = document.getElementById('workModalMeta');

    function openModal(work) {
        modalTitle.textContent = work.title;
        modalMedia.innerHTML = '';
        modalMeta.innerHTML = `
            <p><strong>Автор:</strong> ${work.author}</p>
            <p><strong>Организация:</strong> ${work.school}</p>
        `;

        if (work.type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = work.src;
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '1');
            iframe.setAttribute('style', 'background-color: #000');
            iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
            iframe.allowFullscreen = true;
            modalMedia.appendChild(iframe);
        } else if (work.type === 'image') {
            const img = document.createElement('img');
            img.src = work.src;
            img.alt = work.title;
            modalMedia.appendChild(img);
        } else if (work.type === 'link') {
            const link = document.createElement('a');
            link.href = work.src;
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = 'Перейти к виртуальной экскурсии';
            link.className = 'work-card__btn';
            link.style.textDecoration = 'none';
            modalMedia.appendChild(link);
        }

        modal.classList.add('work-modal--open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('work-modal--open');
        modal.setAttribute('aria-hidden', 'true');
        modalMedia.innerHTML = ''; // останавливаем видео
        document.body.style.overflow = '';
    }

    if (overlay) overlay.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('work-modal--open')) {
            closeModal();
        }
    });
});