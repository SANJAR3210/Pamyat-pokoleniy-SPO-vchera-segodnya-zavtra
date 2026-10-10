document.addEventListener('DOMContentLoaded', () => {
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
                    title: '«ТТИТ»',
                    author: 'Ахмедов Санджар Наимжонович',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/posterImg2026/graphic/posterTTIT2026graphic.jpg',
                    type: 'image',
                    src: 'images/posterImg2026/graphic/posterTTIT2026graphic.jpg',
                    category: 'graphic'
                },
                {
                    title: '«ТТИТ»',
                    author: 'Стремякова Полина Викторовна, Захарушкина Татьяна Валерьевна, Подлипская Ксения Александровна',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/posterImg2026/color/posterTTIT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTTIT2026color.png',
                    category: 'color'
                },
                {
                    title: '«Знания СПО»',
                    author: 'Архипова Карина Олегвона, Пушкарёва Алина Александровна, Яткина Анжелика Витальевна',
                    school: 'ОГБПОУ «Колпашевский социально-промышленный колледж»',
                    preview: 'images/posterImg2026/color/posterKSPK2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterKSPK2026color.png',
                    category: 'color'
                },
                {
                    title: '«Томский финансово-юридический техникум»',
                    author: 'Балдакова Ирина Евгеньевна',
                    school: 'АНОПБ «Томский финансово-юридический техникум»',
                    preview: 'images/posterImg2026/color/posterTOMFUT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTOMFUT2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТТЖТ - путь длинною в вековую магистраль»',
                    author: 'Богданова Яна Витальевна',
                    school: 'Филиал СГУПС «Томский техникум железнодорожного транспорта»',
                    preview: 'images/posterImg2026/color/posterTTZHT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTTZHT2026color.png',
                    category: 'color'
                },
                {
                    title: '«Асиновский техникум промышленной индустрии и сервиса»',
                    author: 'Владимирова Ирина Вячеславовна',
                    school: 'ОГБПОУ «Асиновский техникум промышленной индустрии и сервиса»',
                    preview: 'images/posterImg2026/color/poster2ATPROMIS2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2ATPROMIS2026color.png',
                    category: 'color'
                },
                {
                    title: '«Вчера, сегодня, завтра»',
                    author: 'Гулевич Екатерина Николаевна',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: 'images/posterImg2026/color/posterTGPK2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTGPK2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТБМК»',
                    author: 'Добрускина Анна Денисовна',
                    school: 'ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/posterImg2026/color/posterTBMK2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTBMK2026color.png',
                    category: 'color'
                },
                {
                    title: '«ШТИТ»',
                    author: 'Ефимова Виктория Александровна',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: 'images/posterImg2026/color/posterSHTIT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterSHTIT2026color.png',
                    category: 'color'
                },
                {
                    title: '«Капитан грузового судна»',
                    author: 'Зеленкова Алиса Михайловна',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: 'images/posterImg2026/color/posterTTVTS2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTTVTS2026color.png',
                    category: 'color'
                },
                {
                    title: '«Настоящий капитан»',
                    author: 'Кардонец Виктор Сергеевич',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: 'images/posterImg2026/color/poster2TTVTS2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2TTVTS2026color.png',
                    category: 'color'
                },
                {
                    title: '«Будущее за настоящими професиионалами»',
                    author: 'Кромских Даниил Вячеславович ',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: 'images/posterImg2026/color/poster2SHTIT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2SHTIT2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТПТ»',
                    author: 'Куприянов Дмитрий Сергеевич, Курочкин Алексей Сергеевич',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/posterImg2026/color/poster2TPT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2TPT2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТКСТ»',
                    author: 'Новицкая Таисия Евгеньевна',
                    school: 'ОГБПОУ «Томский коммунально-строительный техникум»',
                    preview: 'images/posterImg2026/color/poster2TKST2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2TKST2026color.png',
                    category: 'color'
                },
                {
                    title: '«История - Великий учитель»',
                    author: 'Пятова Анна Ильинична',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: 'images/posterImg2026/color/poster2TGPK2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/poster2TGPK2026color.png',
                    category: 'color'
                },
                {
                    title: '«Наши профессии»',
                    author: 'Сулейманова Алина Александровна',
                    school: 'Александровский филиал ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/posterImg2026/color/posterAfTPT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterAfTPT2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТКСТ»',
                    author: 'Сырбу Каролина Михайловна',
                    school: 'ОГБПОУ «Томский коммунально-строительный техникум»',
                    preview: 'images/posterImg2026/color/posterTKST2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTKST2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТомИнТех»',
                    author: 'Тарасюк Олеся Константиновна',
                    school: 'ОГБПОУ «Томский индустриальный техникум»',
                    preview: 'images/posterImg2026/color/posterTOMINTEH2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTOMINTEH2026color.png',
                    category: 'color'
                },
                {
                    title: '«АТпромИС»',
                    author: 'Чемагина Анна Юрьевна',
                    school: 'ОГБПОУ «Асиновский техникум промышленной индустрии и сервиса»',
                    preview: 'images/posterImg2026/color/posterATPROMIS2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterATPROMIS2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТПТ»',
                    author: 'Шерстобитова Дарина Максимовна',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/posterImg2026/color/posterTPT2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterTPT2026color.png',
                    category: 'color'
                },
                {
                    title: '«КТАБ и друзья»',
                    author: 'Шерстобоева Диана Антоновна',
                    school: 'ОГБПОУ «Кожевниковский техникум агробизнеса»',
                    preview: 'images/posterImg2026/color/posterKTAB2026color.png',
                    type: 'image',
                    src: 'images/posterImg2026/color/posterKTAB2026color.png',
                    category: 'color'
                },
                {
                    title: '«ТТЖТ: Путь сквозь поколения»',
                    author: 'Килинчук Артём',
                    school: 'Филиал СГУПС «Томский техникум железнодорожного транспорта»',
                    preview: 'images/posterImg2026/graphic/posterTTZHT2026graphic.jpg',
                    type: 'image',
                    src: 'images/posterImg2026/graphic/posterTTZHT2026graphic.jpg',
                    category: 'graphic'
                }
            ]
        },
        museum: {
            label: 'Виртуальный музей',
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников за 2026 год',
            items: [
                {
                    title: '«ИСТОРИЯ РАЗВИТИЯ СЕЛЬСКОГО ХОЗЯЙСТВА»',
                    author: 'Вишнарёв А.Р',
                    school: 'ОГБПОУ «Кривошеинский агропромышленный техникум»',
                    preview: 'images/museumPrev2026/muzeyPrewKAPT2026.png',
                    type: 'link',
                    src: 'https://vk.ru/club210618353'
                },
                {
                    title: '«Музей 79-й Гвардейской стрелковой дивизии»',
                    author: 'ТТВТС',
                    school: 'ОГБПОУ «Томский техникум водного транспорта и судоходства»',
                    preview: 'images/museumPrev2026/muzeyPrewTTVTS2026.png',
                    type: 'link',
                    src: 'https://vk.ru/club216410795'
                },
                {
                    title: '«Музей медицины»',
                    author: 'ТБМК',
                    school: 'Колпашевский филиал ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/museumPrev2026/muzeyPrewKfTBMK2026.png',
                    type: 'link',
                    src: 'https://vk.ru/public205695824'
                }

            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования за 2026 год',
            items: [
                {
                    title: '«ТТИТ»',
                    author: 'Ахмедов Санджар Наимжонович',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/infographic2026/infographicTTIT2026.jpg',
                    type: 'image',
                    src: 'images/infographic2026/infographicTTIT2026.jpg'
                },
                {
                    title: '«Летопись становления ТБМК»',
                    author: 'Золотовская А.М.',
                    school: 'ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/infographic2026/infographicTBMK2026.png',
                    type: 'image',
                    src: 'images/infographic2026/infographicTBMK2026.png'
                },
                {
                    title: '«КСПК»',
                    author: 'Гормолысова Анастасия Алексеевна',
                    school: 'ОГБПОУ «Колпашевский социально-промышленный колледж»',
                    preview: 'images/infographic2026/infographicKSPK2026.png',
                    type: 'image',
                    src: 'images/infographic2026/infographicKSPK2026.png'
                },
                {
                    title: '«МТОТ»',
                    author: 'Полоник Мария Александровна',
                    school: 'ОГБПОУ «Молчановский техникум отраслевых технологий»',
                    preview: 'images/infographic2026/infographicMTOT2026.png',
                    type: 'image',
                    src: 'images/infographic2026/infographicMTOT2026.png'
                },
                {
                    title: '«История техникума в истории страны»',
                    author: 'Вирфель Сергей',
                    school: 'Александровский филиал ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/infographic2026/infographicAfTPT2026.png',
                    type: 'image',
                    src: 'images/infographic2026/infographicAfTPT2026.png'
                },
                {
                    title: '«ТПТ»',
                    author: 'Скосырева',
                    school: 'ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/infographic2026/infographicTPT2026.jpg',
                    type: 'image',
                    src: 'images/infographic2026/infographicTPT2026.jpg'
                },
                {
                    title: '«АТпромИС»',
                    author: 'Плотников МВ',
                    school: 'ОГБПОУ «Асиновский техникум промышленной индустрии и сервиса»',
                    preview: 'images/infographic2026/infographicATPROMIS2026.png',
                    type: 'image',
                    src: 'images/infographic2026/infographicATPROMIS2026.png'
                },
                {
                    title: '«Как менялись названия ШТИТ»',
                    author: 'Николаева',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: 'images/infographic2026/infographicSHTIT2026.jpg',
                    type: 'image',
                    src: 'images/infographic2026/infographicSHTIT2026.jpg'
                },
                {
                    title: '«ШТИТ»',
                    author: 'Петриченко',
                    school: 'ОГБПОУ «Шегарский техникум индустриальных технологий»',
                    preview: 'images/infographic2026/infographic2SHTIT2026.jpg',
                    type: 'image',
                    src: 'images/infographic2026/infographic2SHTIT2026.jpg'
                },
            ]
        },
        excursion: {
            label: 'Видеоэкскурсия',
            description: 'Видеоэкскурсии по памятным местам Томска и Томской области за 2026 год',
            items: [
                {
                    title: '«ТЭПК»',
                    author: 'Никита Литвинов и Никита Белоусов',
                    school: 'ОГБПОУ «Томский экономико-промышленный колледж»',
                    preview: 'images/excursionPrew2026/excursTEPK2026.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-173380626&id=456239404&hash=69c9f1fd6dd0e630'
                },
                {
                    title: '«КИПТСУ»',
                    author: 'Алькантры КИПТСУ',
                    school: 'ОГБПОУ «Колледж индустрии питания, торговли и сферы услуг»',
                    preview: 'images/excursionPrew2026/excursKIPTSU2026.png',
                    type: 'video',
                    src: 'https://vkvideo.ru/video_ext.php?oid=-222446361&id=456239053&hash=da9cd3c7851d9c8a&hd=3'
                },
                {
                    title: '«ТГПК с Валерией»',
                    author: 'Валерия',
                    school: 'ОГБПОУ «Томский государственный педагогический колледж»',
                    preview: 'images/excursionPrew2026/excursTGPK2026.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-128831204&id=456239725&hash=4fc4d72e0e81d088'
                },
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
                    title: '«От поколения к поколению»',
                    author: 'Бакилина Маргарита Романова',
                    school: 'ОГБПОУ «Северский промышленный колледж»',
                    preview: 'images/poster/graphic2025/posterSPK2025graphic.jpg',
                    type: 'image',
                    src: 'images/poster/graphic2025/posterSPK2025graphic.jpg',
                    category: 'graphic'
                },
                {
                    title: '«СПО: Вчера Сегодня Завтра»',
                    author: 'Бардакова Вакарчук',
                    school: 'ОГБПОУ «Томский механико-технологический техникум»',
                    preview: 'images/poster/graphic2025/posterTMTT2025graphic.jpg',
                    type: 'image',
                    src: 'images/poster/graphic2025/posterTMTT2025graphic.jpg',
                    category: 'graphic'
                },
                {
                    title: '«КИПТСУ»',
                    author: 'Сергеева',
                    school: 'ОГБПОУ «Колледж индустрии питания, торговли и сферы услуг»',
                    preview: 'images/poster/graphic2025/posterKIPTSU2025graphic.jpg',
                    type: 'image',
                    src: 'images/poster/graphic2025/posterKIPTSU2025graphic.jpg',
                    category: 'graphic'
                },
                {
                    title: '«ТомИнТех»',
                    author: 'Кадзукова Сафия Сухробовна',
                    school: 'ОГБПОУ «Томский индустриальный техникум»',
                    preview: 'images/poster/color2025/poster2TOMINTEH2025color.jpg',
                    type: 'image',
                    src: 'images/poster/color2025/poster2TOMINTEH2025color.jpg',
                    category: 'color'
                },
                {
                    title: '«Парабельский филиал ТПТ»',
                    author: 'Карпов',
                    school: 'Парабельский филиал ОГБПОУ «Томский политехнический техникум»',
                    preview: 'images/poster/color2025/posterPfTPT2025color.jpg',
                    type: 'image',
                    src: 'images/poster/color2025/posterPfTPT2025color.jpg',
                    category: 'color'
                },
                {
                    title: '«Вход в ТомИнТех»',
                    author: 'Купрессова Ульяна',
                    school: 'ОГБПОУ «Томский индустриальный техникум» ',
                    preview: 'images/poster/color2025/posterTOMINTEH2025color.jpg',
                    type: 'image',
                    src: 'images/poster/color2025/posterTOMINTEH2025color.jpg',
                    category: 'color'
                },
                {
                    title: '«СПО: Вчера Сегодня Завтра»',
                    author: 'Терёхина Марина Викторовна',
                    school: 'Колпашевский филиал ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/poster/color2025/posterKfTBMK2025color.png',
                    type: 'image',
                    src: 'images/poster/color2025/posterKfTBMK2025color.png',
                    category: 'color'
                },
                {
                    title: '«Традиции - наша опора, иновации - наш путь»',
                    author: 'Семушина Эвелина Олеговна',
                    school: 'ОГБПОУ «Томский базовый медицинский колледж»',
                    preview: 'images/poster/color2025/posterTBMK2025color.jpg',
                    type: 'image',
                    src: 'images/poster/color2025/posterTBMK2025color.jpg',
                    category: 'color'
                },
                {
                    title: '«Труд»',
                    author: 'Челнакова Алина',
                    school: 'ОГБПОУ «Кожевниковский техникум агробизнеса»',
                    preview: 'images/poster/color2025/posterKTAB2025color.png',
                    type: 'image',
                    src: 'images/poster/color2025/posterKTAB2025color.png',
                    category: 'color'
                }
            ]
        },
        museum: {
            label: 'Виртуальный музей',
            description: 'Виртуальные экспозиции, сохраняющие историю учебных заведений и их выпускников за 2025 год',
            items: [
                {
                    title: '«Музей ТМТТ»',
                    author: 'Борщ Кирилл Константинович',
                    school: 'ОГБПОУ «Томский механико-технологический техникум»',
                    preview: 'images/museumPrev2025/muzeyPrewTMTT2025.png',
                    type: 'link',
                    src: 'https://poly.cam/capture/0DB4A483-4981-4F96-A7CA-322F530D11D0'
                },
                {
                    title: '«МУЗЕЙНАЯ КОМНАТА ТПГК»',
                    author: 'ТГПК',
                    school: 'ОГБПОУ «Томский промышленно-гуманитарный колледж»',
                    preview: 'images/museumPrev2025/muzeyPrewTGPK2025.png',
                    type: 'link',
                    src: 'https://vk.ru/wall-229089160_3'
                }
            ]
        },
        infographic: {
            label: 'Инфографика',
            description: 'Инфографика о событиях, цифрах и фактах истории профессионального образования за 2025 год',
            items: [
                {
                    title: '«История ТТИТ»',
                    author: 'Ахмедов Санджар Наимжонович',
                    school: 'ОГБПОУ «Томский техникум информационных технологий»',
                    preview: 'images/infographics/TTIT1infographic2025.jpg',
                    type: 'image',
                    src: 'images/infographics/TTIT1infographic2025.jpg'
                },
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
                    title: '«История развития ТБМК»',
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
                },
                {
                    title: '«Музейная комната»',
                    author: 'Артём Разумов и Евгений Хаустов',
                    school: 'ОГБПОУ «Томский промышленно-гуманитарный колледж»',
                    preview: 'images/excursionPrew2025/excursTPGK2025PREW.png',
                    type: 'video',
                    src: 'https://vk.ru/video_ext.php?oid=-229089160&id=456239019'
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

    const CATEGORY_LABELS = {color: 'В цвете', graphic: 'В графике'};
    const categories = [...new Set(data.items.map(w => w.category).filter(Boolean))];
    let activeCategory = 'all';

    const worksContainer = gridEl.closest('.works__container') || gridEl.parentElement;
    let tabsEl = null;

    function makeTab(value, labelText) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'works__tab';
        btn.textContent = labelText;
        btn.dataset.category = value;
        if (value === 'all') btn.classList.add('works__tab--active');
        btn.addEventListener('click', () => {
            activeCategory = value;
            tabsEl.querySelectorAll('.works__tab').forEach(t =>
                t.classList.toggle('works__tab--active', t === btn)
            );
            renderItems();
        });
        return btn;
    }

    if (categories.length) {
        tabsEl = document.createElement('div');
        tabsEl.className = 'works__tabs';
        tabsEl.appendChild(makeTab('all', 'Все работы'));
        categories.forEach(c => tabsEl.appendChild(makeTab(c, CATEGORY_LABELS[c] || c)));
        worksContainer.insertBefore(tabsEl, gridEl);
    }

    function renderItems() {
        const list = activeCategory === 'all'
            ? data.items
            : data.items.filter(w => w.category === activeCategory);

        if (countEl) {
            const catLabel = activeCategory === 'all'
                ? ''
                : ` — ${CATEGORY_LABELS[activeCategory] || activeCategory}`;
            countEl.textContent = `Размещено работ: ${list.length}${catLabel}`;
        }

        gridEl.innerHTML = '';

        if (!list.length) {
            const empty = document.createElement('p');
            empty.className = 'works__empty';
            empty.textContent = activeCategory === 'all'
                ? `Работы за ${year} год появятся позже.`
                : `Работы в подноминации «${CATEGORY_LABELS[activeCategory] || activeCategory}» появятся позже.`;
            gridEl.appendChild(empty);
            return;
        }

        list.forEach((work, i) => {
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
    }

    renderItems();

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
            link.textContent = 'Перейти в музей';
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
        modalMedia.innerHTML = '';
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