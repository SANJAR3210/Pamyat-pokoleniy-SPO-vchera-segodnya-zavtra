document.addEventListener('DOMContentLoaded', () => {
    /* =========================================================
       КОНКУРСНЫЕ РАБОТЫ
       Чтобы добавить работу — допишите объект в список items
       нужной номинации. Чтобы создать страницу другой номинации,
       скопируйте calendar.html и поменяйте data-nomination
       у <body> на один из ключей: video, calendar, poster,
       museum, infographic, excursion.
       ========================================================= */
    const NOMINATIONS_2026 = {
        video: {
            label: 'Видеоролик',
            description: 'Ролики участников о людях, событиях и традициях профессионального образования Томской области за 2026 год',
            items: [
                {
                    title: '«История ТТВТС и Марии Михайловны Асеевой»',
                    author: 'Мангазеев Роман Дмитриевич, Грицин Радомир Евгеньевич, Бугрий Илья Александрович',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: '2025/images/videoImg/TTSTPREV.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-104711768&id=456239392&hash=d93a3350c29b89a7'
                },
                {
                    title: '«Мы — ТТВТС. Мы — сила Томского флота!»',
                    author: 'Михалёва Елизавета',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: '2025/images/videoImg/TTSTPREV.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-104711768&id=456239391&hash=80f9c24ccae39f9a'
                },
                {
                    title: '«27 января»',
                    author: 'Студенческий совет «ТБМК»',
                    school: 'ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: '2025/images/videoImg/tbmkPREW.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-52683499&id=456239888'
                },
                {
                    title: '«Дина Анатольевна Конюхова»',
                    author: 'Екатерина Замятина',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: '2025/images/videoImg/shtitPREW.png',
                    type: 'video',
                    src: '//ok.ru/videoembed/11422881811019?nochat=1'
                },
                {
                    title: '«Не смейте забывать учителей»',
                    author: 'Студенческий совет «ТТЖТ»',
                    school: 'Филиал СГУПС «Томский техникум железнодорожного транспорта»',
                    preview: '2025/images/videoImg/ttzhtPREW.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-174959877&id=456239376&hash=799d257ae72d17ca'
                },
                {
                    title: '«История ТПТ»',
                    author: 'Студенческий совет «ТПТ»',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: '2025/images/videoImg/tptPREW2026.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-77287198&id=456239366&hash=73146127f8bb5d43&hd=4'
                }
            ]
        },
        calendar: {
            label: 'Календарь',
            description: 'Тематические календари, посвящённые знаменательным датам и истории отрасли за 2026 год',
            items: [
                {
                    title: '«Это - ТГПК»',
                    author: 'Савельева Алина Витальевна',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: '2025/images/calendar/prevue/tgpkPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTGPK2026.png',
                },
                {
                    title: '«Прошлое - это...»',
                    author: 'Студенческий совет «КСПК»',
                    school: 'ОГБПОУ «Колпашевский социально-промышленный колледж»',
                    preview: '2025/images/calendar/prevue/kspk2PREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendar2KSPK2026.png'
                },
                {
                    title: '«История ТМТТ»',
                    author: 'Вакарчук, Бардакова',
                    school: 'ОГБПОУ «Томский механико-технологический техникум»',
                    preview: '2025/images/calendar/prevue/tmttPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTMTT2026.png'
                },
                {
                    title: '«Это - ТТВТС!»',
                    author: 'Шемерянкин Иван Сергеевич',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: '2025/images/calendar/prevue/ttvtsPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTTVTS2026.png',
                },
                {
                    title: '«Так это ТАК»',
                    author: 'Селезнева',
                    school: 'ОГБПОУ «Томский аграрный колледж»',
                    preview: '2025/images/calendar/prevue/takPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTAK2026.png'
                },
                {
                    title: '«Помним прошлое, гордимся настоящим»',
                    author: 'Кицман Евгений Александрович, Добрынский Владислав Максимович',
                    school: 'Парабельский филиал ОГБПОУ «Томский политехнический техникум»',
                    preview: '2025/images/calendar/prevue/pfTPTPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarPFtpt2026.png'
                },
                {
                    title: '«ШТИТ»',
                    author: 'Козлов Артём',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: '2025/images/calendar/prevue/shtitPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarSHTIT2026.png',
                },
                {
                    title: '«ТПТ 2026»',
                    author: 'Локтионова',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: '2025/images/calendar/prevue/tptPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTPT2026.png'
                },
                {
                    title: '«История ТПТ»',
                    author: 'Обеднин Александр Сергеевич',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: '2025/images/calendar/prevue/tpt2PREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendar2TPT2026.png'
                },
                {
                    title: '«Это - ТЛТ!»',
                    author: 'Чехлова',
                    school: 'ОГБПОУ «Томский лесотехнический техникум»',
                    preview: '2025/images/calendar/prevue/tltPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTLT2026.png',
                },
                {
                    title: '«КСПК»',
                    author: 'Каличкина Ангелина',
                    school: 'ОГБПОУ «Колпашевский социально-промышленный колледж»',
                    preview: '2025/images/calendar/prevue/kspk2PREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendar2KSPK2026.png'
                },
                {
                    title: '«MTOT»',
                    author: 'Стрельникова, Решетников',
                    school: 'ОГБПОУ «Молчановский техникум отраслевых технологий»',
                    preview: '2025/images/calendar/prevue/mtotPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarMTOT2026.png'
                },
                {
                    title: '«История ТБМК»',
                    author: 'Костенко А.И.',
                    school: 'ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: '2025/images/calendar/prevue/tbmkPREW2026.png',
                    type: 'image',
                    src: '2025/images/calendar/fullImg/calendarTBMK2026.png'
                }
            ]
        },
        poster: {
            label: 'Плакат',
            description: 'Авторские плакаты о великих свершениях и людях труда за 2026 год',
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
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников за 2026 год',
            items: [
                // {
                //     title: 'Виртуальная экскурсия «Гордость колледжа»',
                //     author: 'Тихонов Никита Олегович',
                //     school: 'ОГБПОУ «Томский строительный колледж»',
                //     preview: 'images/Materials/museum-2.jpg',
                //     type: 'link',
                //     src: 'https://example.com/museum-2'
                // }
            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования за 2026 год',
            items: [
                // {
                //     title: '«Путь от ремесла к профессии»',
                //     author: 'Белова Дарья Андреевна',
                //     school: 'ОГБПОУ «Томский экономический колледж»',
                //     preview: 'images/Materials/infographic-1.jpg',
                //     type: 'image',
                //     src: 'images/Materials/infographic-1-full.jpg'
                // },
            ]
        },
        excursion: {
            label: 'Видеоэкскурсия',
            description: 'Видеоэкскурсии по памятным местам Томска и Томской области за 2026 год',
            items: [
                // {
                //     title: '«Улица, где начиналась профессия»',
                //     author: 'Фёдорова Ксения Дмитриевна',
                //     school: 'ОГБПОУ «Томский техникум информационных технологий»',
                //     preview: 'images/Materials/excursion-1.jpg',
                //     type: 'video',
                //     src: 'https://www.youtube.com/embed/XXXXXXXXXXX'
                // }
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
                    preview: 'images/videoImg/TTSTPREV.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-225946258&id=456239057'
                },
                {
                    title: '«ТКСТ»',
                    author: 'Силицкая Дарья',
                    school: 'ОГБПОУ «Томский коммунально-строительный техникум»',
                    preview: 'images/videoImg/TKSTPNG.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-207118347&id=456239432&hash=53992663ffa71625&hd=4'
                },
                {
                    title: '«Колпашевский мед - в завтра билет»',
                    author: 'Заварницина Светлана',
                    school: 'Колпашевский филиал ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/videoImg/kp-tbmk.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-178490239&id=456239225&hash=25acfdd7da5b7834'
                },
                {
                    title: '«Вторая серия интервью о чемпионате «Профессионалы»',
                    author: 'Филатова Олеся',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: 'images/videoImg/TGPKPREW.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-64194219&id=456239432&hash=466dd9a4b8248ef4'
                },
                {
                    title: '«Истоки ТЛТ»',
                    author: 'Студенческий совет ОГБПОУ «Томский лесотехнический техникум»',
                    school: 'ОГБПОУ «Томский лесотехнический техникум»',
                    preview: 'images/videoImg/TLTPREW.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-144712319&id=456239514&hash=9d4f92dc8b96c3c7&hd=2'
                },
                {
                    title: '«История ТПТ»',
                    author: 'Владислав Терехин и Милица Лебедева',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/videoImg/tptPREW2025.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-77287198&id=456239320&hash=47c9e9b71c7368bb'
                }
            ]
        },

        calendar: {
            label: 'Календарь',
            description: 'Тематические календари, посвящённые знаменательным датам и истории отрасли за 2025 год',
            items: [
                {
                    title: '«Сделай шаг в мир профессий КИПТСУ»',
                    author: 'Мадаминова',
                    school: 'ОГБПОУ «Колледж индустрии питания, торговли и сферы услуг»',
                    preview: 'images/calendar/prevue/kiptsuMadPrew.jpg',
                    type: 'image',
                    src: 'images/calendar/fullImg/calendarKIPTSU2025.png'
                },
                {
                    title: '«ТомИнТех»',
                    author: 'Жидких Ульяна Михайловна, Токарева Полина Денисовна',
                    school: 'ОГБПОУ «Томский индустриальный техникум»',
                    preview: 'images/calendar/prevue/TomInTehPrevue.png',
                    type: 'image',
                    src: 'images/calendar/fullImg/calendarTomInTex2025.png'
                },
                {
                    title: '«ТАК»',
                    author: 'Чемезова, Посадская',
                    school: 'ОГБПОУ «Томский аграрный колледж»',
                    preview: 'images/calendar/prevue/takPrevue.png',
                    type: 'image',
                    src: 'images/calendar/fullImg/calendarTAK2025.png'
                }
            ]
        },
        poster: {
            label: 'Плакат',
            description: 'Авторские плакаты о великих свершениях и людях труда за 2025 год',
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
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников за 2025 год',
            items: [
                // {
                //     title: 'Виртуальная экскурсия «Гордость колледжа»',
                //     author: 'Тихонов Никита Олегович',
                //     school: 'ОГБПОУ «Томский строительный колледж»',
                //     preview: 'images/Materials/museum-2.jpg',
                //     type: 'link',
                //     src: 'https://example.com/museum-2'
                // }
            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования за 2025 год',
            items: [
                {
                    title: '«Александр Филиппович Мусохранов»',
                    author: 'Таскина М.В',
                    school: 'ОГАПОУ «Томский Губернаторский колледж культуры и искусств»',
                    preview: 'images/infographics/TGKKIinfographic2025.jpg',
                    type: 'image',
                    src: 'images/infographics/TGKKIinfographic2025.jpg'
                },
                {
                    title: '«Во власти долга»',
                    author: 'Рябикова',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/infographics/TPTinfographic2025.jpg',
                    type: 'image',
                    src: 'images/infographics/TPTinfographic2025.jpg'
                },
                {
                    title: '«Начало ТГПК»',
                    author: 'Горева Злата',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: 'images/infographics/TGPKinfographic2025.jpg',
                    type: 'image',
                    src: 'images/infographics/TGPKinfographic2025.jpg'
                },
                {
                    title: '«История развития ТТИТ»',
                    author: 'Власов Никита',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/infographics/TTITinfographic2025.jpg',
                    type: 'image',
                    src: 'images/infographics/TTITinfographic2025.jpg'
                },
                {
                    title: '«Кадры»',
                    author: 'Каличкина Ангелина Денисовна',
                    school: 'ОГБПОУ «Колпашевский социально-промышленный колледж»',
                    preview: 'images/infographics/KSPKinfographic2025.png',
                    type: 'image',
                    src: 'images/infographics/KSPKinfographic2025.png'
                },
                {
                    title: '«История развития профессий и специальностей»',
                    author: 'Рябова В.А',
                    school: 'ОГБПОУ «Колледж индустрии питания, торговли и сферы услуг»',
                    preview: 'images/infographics/KIPTSUinfographic2025.png',
                    type: 'image',
                    src: 'images/infographics/KIPTSUinfographic2025.png'
                },
                {
                    title: '«История развития ТТИТ»',
                    author: 'Студенческий совет колпашевского филиала ОГБПОУ «Томский базовый медицинский колледж»',
                    school: 'Колпашевский филиал ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/infographics/kfTBMKinfographic2025.png',
                    type: 'image',
                    src: 'images/infographics/kfTBMKinfographic2025.png'
                }
            ]
        },
        excursion: {
            label: 'Видеоэкскурсия',
            description: 'Видеоэкскурсии по памятным местам Томска и Томской области за 2025 год',
            items: [
                {
                    title: '«Это наша с тобою земля, это наша с тобой биография...»',
                    author: 'Григорьев',
                    school: 'ОГБПОУ «Северский промышленный колледж»',
                    preview: 'images/excursionPrew2025/excursSPK2025PREW.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-73151794&id=456239331&hash=a2ab7813b9122c79'
                }
            ]
        }
    };

    const NOMINATIONS = {'2025': NOMINATIONS_2025, '2026': NOMINATIONS_2026};

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