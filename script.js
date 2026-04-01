<script>
    const quizData = {
        robotics: [
            { q: "Який датчик дозволяє роботу визначати відстань до стіни за допомогою звуку?", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400", options: ["Гіроскоп", "Ультразвуковий сонар", "Датчик освітленості", "Акселерометр"], correct: 1 },
            { q: "Розгляньте фото. Яка частина маніпулятора імітує людську кисть?", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400", options: ["Сервопривід", "Контролер", "Гріппер (захоплювач)", "Станина"], correct: 2 },
            { q: "Що таке 'ступінь вільності' в робототехніці?", img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=400", options: ["Кількість коліс", "Напрямок руху суглоба", "Рівень заряду батареї", "Швидкість процесора"], correct: 1 },
            { q: "Який датчик допомагає роботу-пилососу не впасти зі сходів?", img: "https://images.unsplash.com/photo-1518314916301-73042180ad91?auto=format&fit=crop&q=80&w=400", options: ["Датчик перепаду висоти", "Термометр", "Мікрофон", "GPS"], correct: 0 },
            { q: "Для чого роботу потрібен гіроскоп?", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400", options: ["Для вимірювання сили", "Для підтримки рівноваги", "Для запису звуку", "Для розпізнавання кольорів"], correct: 1 },
            { q: "Який мозок у більшості навчальних роботів?", img: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=400", options: ["Відеокарта", "Мікроконтролер (напр. Arduino)", "Жорсткий диск", "Блок живлення"], correct: 1 },
            { q: "Як називається робот, який повторює форму людини?", img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=400", options: ["Дрон", "Гуманоїд", "Промисловий маніпулятор", "Ровер"], correct: 1 },
            { q: "Що вимірює енкодер у двигуні робота?", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400", options: ["Напругу", "Кут повороту колеса", "Температуру", "Вагу"], correct: 1 },
            { q: "Яка мова програмування найчастіше використовується в робототехніці?", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400", options: ["HTML", "C++ / Python", "CSS", "SQL"], correct: 1 },
            { q: "Яка система дозволяє роботу орієнтуватися по супутниках?", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=400", options: ["Bluetooth", "GPS", "Wi-Fi", "NFC"], correct: 1 },
            { q: "Який пристрій перетворює електрику в рух?", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400", options: ["Резистор", "Електродвигун", "Конденсатор", "Діод"], correct: 1 },
            { q: "Що таке лідар?", img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=400", options: ["Лазерний сканер простору", "Тип колеса", "Звуковий сигнал", "Антена"], correct: 0 }
        ],
        neural: [
            { q: "Як називається шар, який першим приймає дані в нейромережі?", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", options: ["Вихідний шар", "Вхідний шар", "Прихований шар", "Шар ваг"], correct: 1 },
            { q: "Що визначає силу зв'язку між двома нейронами?", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400", options: ["Колір нейрона", "Вага (Weight)", "Розмір нейрона", "Назва моделі"], correct: 1 },
            { q: "Яка функція допомагає нейрону вирішити, передавати сигнал далі чи ні?", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400", options: ["Функція активації", "Функція множення", "Функція видалення", "Функція друку"], correct: 0 },
            { q: "Процес підбору ваг у нейромережі називається...", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=400", options: ["Програмування", "Навчання", "Копіювання", "Малювання"], correct: 1 },
            { q: "Який тип мережі найкраще розпізнає зображення?", img: "https://images.unsplash.com/photo-1527430297724-4686a4179982?auto=format&fit=crop&q=80&w=400", options: ["Згорткова мережа (CNN)", "Текстовий файл", "Excel таблиця", "Калькулятор"], correct: 0 },
            { q: "Що таке 'епоха' у навчанні нейромереж?", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400", options: ["Рік створення ШІ", "Один повний прохід через дані", "Кількість нейронів", "Назва компанії"], correct: 1 },
            { q: "Як називається ситуація, коли мережа занадто добре вивчила лише тренувальні дані?", img: "https://images.unsplash.com/photo-1518186239751-6467fd21c998?auto=format&fit=crop&q=80&w=400", options: ["Недонавчання", "Перенавчання (Overfitting)", "Супернавчання", "Галюцинація"], correct: 1 },
            { q: "Яка частина нейромережі відповідає за складні обчислення всередині?", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", options: ["Корпус", "Приховані шари", "Монітор", "Мишка"], correct: 1 },
            { q: "Для чого використовується GPU (відеокарта) у навчанні ШІ?", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400", options: ["Для перегляду кіно", "Для паралельних обчислень", "Для охолодження", "Для звуку"], correct: 1 },
            { q: "Який алгоритм виправляє помилки нейромережі під час навчання?", img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400", options: ["Backpropagation", "Delete", "Enter", "Save As"], correct: 0 },
            { q: "Чим ШНМ відрізняється від звичайного алгоритму?", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", options: ["Вона не має коду", "Вона здатна до самонавчання", "Вона дорожча", "Вона працює без струму"], correct: 1 },
            { q: "Що таке біологічний прототип нейромережі?", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=400", options: ["Серце", "Мозок людини", "Легені", "М'язи"], correct: 1 }
        ],
        genai: [
            { q: "Яка технологія створює картинки з шуму за текстовим описом?", img: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80&w=400", options: ["Дифузія", "Принтер", "Сканер", "Фотоапарат"], correct: 0 },
            { q: "Як називається текстовий запит до нейромережі?", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400", options: ["Код", "Промпт (Prompt)", "Посилання", "Пароль"], correct: 1 },
            { q: "Яка нейромережа найкраще малює художні зображення?", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400", options: ["Excel", "Midjourney", "Word", "Suno"], correct: 1 },
            { q: "Що означає 'LLM'?", img: "https://images.unsplash.com/photo-1676299081847-5a3d07e6677f?auto=format&fit=crop&q=80&w=400", options: ["Маленька модель", "Велика мовна модель", "Довга пам'ять", "Тип відеокарти"], correct: 1 },
            { q: "Яка мережа здатна генерувати повноцінні пісні з вокалом?", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400", options: ["Suno AI", "Photoshop", "Notepad", "Chrome"], correct: 0 },
            { q: "Як називається помилка ШІ, коли він вигадує факти?", img: "https://images.unsplash.com/photo-1633512304193-4a6c42171ca5?auto=format&fit=crop&q=80&w=400", options: ["Сон", "Галюцинація", "Міраж", "Помилка 404"], correct: 1 },
            { q: "Для чого використовується техніка 'Few-shot' у промптах?", img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400", options: ["Для швидкості", "Надання прикладів перед завданням", "Для зміни мови", "Для видалення тексту"], correct: 1 },
            { q: "Хто створив ChatGPT?", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png", options: ["Google", "OpenAI", "Microsoft", "Apple"], correct: 1 },
            { q: "Яка архітектура лежить в основі GPT?", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400", options: ["Трансформер", "Піраміда", "Круг", "Спіраль"], correct: 0 },
            { q: "Який чат-бот має доступ до актуального пошуку Google?", img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", options: ["ChatGPT 3.5", "Gemini (Bard)", "Claude", "Midjourney"], correct: 1 },
            { q: "Чи має GenAI справжню свідомість?", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=400", options: ["Так", "Ні, це лише математика", "Тільки вночі", "Інколи"], correct: 1 },
            { q: "Що таке мультимодальність ШІ?", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400", options: ["Багато мов", "Робота з текстом, фото та звуком одночасно", "Багато користувачів", "Велика ціна"], correct: 1 }
        ]
    };
    let currentQuiz = [];
    let currentIdx = 0;
    let userAnswers = [];
    let completedQuizzes = 0;
    function startQuiz(type) {
        currentQuiz = quizData[type];
        currentIdx = 0;
        userAnswers = new Array(currentQuiz.length).fill(null);
        document.getElementById('selection-screen').style.display = 'none';
        document.getElementById('quiz-platform').style.display = 'block';
        document.getElementById('quiz-title').innerText = "Тест: " + type.toUpperCase();
        renderQuestion();
    }

    function renderQuestion() {
        const data = currentQuiz[currentIdx];
        document.getElementById('q-text').innerText = data.q;
        const imgElement = document.getElementById('q-img');
        if(data.img) {
            imgElement.src = data.img;
            imgElement.style.display = 'block';
        } else {
            imgElement.style.display = 'none';
        }
        document.getElementById('question-counter').innerText = `Питання ${currentIdx + 1} з ${currentQuiz.length}`;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        
        data.options.forEach((opt, index) => {
            const div = document.createElement('div');
            div.className = 'option' + (userAnswers[currentIdx] === index ? ' selected' : '');
            div.innerHTML = `<i class="${userAnswers[currentIdx] === index ? 'fas fa-check-circle' : 'far fa-circle'}"></i> ${opt}`;
            div.onclick = () => selectOption(index);
            optionsDiv.appendChild(div);
        });

        document.getElementById('prev-btn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
        document.getElementById('next-btn').innerText = currentIdx === currentQuiz.length - 1 ? 'Завершити' : 'Далі';
        document.getElementById('next-btn').disabled = userAnswers[currentIdx] === null;
    }

    function selectOption(idx) {
        userAnswers[currentIdx] = idx;
        renderQuestion();
    }

    function nextQuestion() {
        if (currentIdx < currentQuiz.length - 1) {
            currentIdx++;
            renderQuestion();
        } else {
            finishQuiz();
        }
    }

    function prevQuestion() {
        if (currentIdx > 0) {
            currentIdx--;
            renderQuestion();
        }
    }

    function finishQuiz() {
        let correctCount = 0;
        userAnswers.forEach((ans, i) => {
            if (ans === currentQuiz[i].correct) correctCount++;
        });

        const mastery = Math.round((correctCount / currentQuiz.length) * 100);
        
        document.getElementById('quiz-platform').style.display = 'none';
        document.getElementById('result-screen').style.display = 'block';
        document.getElementById('mastery-val').innerText = mastery + '%';
        
        let msg = "";
        if (mastery >= 90) msg = "Вражаюче! Ви експерт у цій темі.";
        else if (mastery >= 70) msg = "Чудовий результат. Ви добре засвоїли матеріал.";
        else if (mastery >= 50) msg = "Непогано, але варто ще раз переглянути теорію.";
        else msg = "Потрібно більше практики. Спробуйте ще раз вивчити модулі.";
        
        document.getElementById('mastery-text').innerText = msg;

        completedQuizzes++;
        document.getElementById('completed-count').innerText = completedQuizzes;
        document.getElementById('avg-mastery').innerText = mastery + '%';
    }

    function resetQuiz() {
        document.getElementById('result-screen').style.display = 'none';
        document.getElementById('selection-screen').style.display = 'block';
    }
</script>
