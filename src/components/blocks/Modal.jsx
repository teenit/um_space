import React from "react";
import { createPortal } from "react-dom";
import RootPortal from "./Portal";
import closeImg from "./../../img/icons8-close.svg";

const Logoped = () => {

    return (
        <div className="Grid">
            <section>
                <h3>Логопед-дефектолог</h3>
                <p>У нашому центрі працюють комплексні спеціалісти, які під час своєї роботи використовують знання трьох професій: логопед, дефектолог, нейропсихолог. Робота на заняттях також комплексна, працюємо над інтелектуальним розвитком дитини, мовленнєвим розвитком та корекцією поведінки (за потреби). Кожне завдання направлене на формування нових нейронних зв'язків в певних ділянках головного мозку дитини, тому наші учні виходять на крутий результат.</p>
                <br /><p>Запис до занять можливий після проходження комплексної первинної діагностики!</p>
            </section>

        </div>
    )
}

const ChildPsy = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Корекційний психолог</h3>
                <p>Корекційний психолог спеціалізується на допомозі дітям у подоланні психологічних труднощів та розвитку позитивних навичок. Вони працюють з дітьми будь-якого віку, допомагаючи їм вирішувати проблеми, такі як емоційні труднощі, поведінкові проблеми, адаптація в школі та соціальні взаємини.</p>
                <br /><h3>Проблеми, які вирішуються:</h3>
                <ul>
                    <li>СДВГ (Синдром дефіциту уваги з гіперактивністю)</li>
                    <li>ЗПР (Затримка Психічного розвитку)</li>
                    <li>Емоційні труднощі (стрес, тривога, депресія)</li>
                    <li>Поведінкові проблеми (агресивність, неслухняність, нав'язливість)</li>
                    <li>Соціальні труднощі (проблеми зі спілкуванням, відчуття самотності)</li>
                    <li>Адаптація в школі\садочку (проблеми з навчанням, адаптація до нового оточення)</li>
                    <li>Робота над емоційним інтелектом</li>
                </ul>
            </section>
        </div>
    )
}

const Kinez = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Кінезіотерапія:</h3>
                <p>Кінезіотерапія - це метод фізичної терапії, що базується на рухових вправах для відновлення функцій опорно-рухової системи та поліпшення загального стану здоров’я. Основна ідея кінезіотерапії полягає в тому, що рух є ключем до поліпшення функцій організму та здоров’я загалом.📈</p>
                <br /><h3>Переваги кінезіотерапії для дітей:</h3>
                <ul>
                    <li>✅ Розвиток моторики: Кінезіотерапевтичні вправи допомагають розвивати моторику дітей, включаючи координацію, баланс та силу.</li>
                    <li>✅ Покращення здоров’я: Регулярні заняття кінезіотерапією можуть допомогти покращити здоров’я дітей, зміцнити їхні м’язи та кістки, покращити дихальну та серцево-судинну систему.</li>
                    <li>✅ Підтримка дітей з особливими потребами: Кінезіотерапія може бути корисною для дітей з різними порушеннями розвитку, допомагаючи покращити їхні рухові навички та сприйняття.</li>
                    <li>✅ Зменшення стресу та тривоги: Фізична активність під час кінезіотерапії може допомогти зменшити рівень стресу та тривоги у дітей, покращуючи їхнє емоційне самопочуття.</li>
                    <li>✅ Сприяння соціальному розвитку: Заняття у групі кінезіотерапії можуть сприяти соціальній взаємодії та спілкуванню дітей, сприяючи їхньому загальному розвитку.</li>
                </ul>
            </section>
        </div>
    )
}

const Painting = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Заняття з живопису:</h3>
                <br /><ul>
                    <li>- Розвиває дрібну моторику рук</li>
                    <li>- стимулює ділянки мозку, відповідальні за мислення, мовлення, координацію. Під час малювання задіяні обидві півкулі головного мозку, активно формуються міжпівкульні зв'язки. Дитина, яка займається творчою студією, розвивається швидше в порівнянні зі своїми однолітками.</li>
                    <li>- Тренує пам'ять</li>
                    <li>- Розвиває уяву, фантазію, креативні здібності</li>
                    <li>- Розвиває просторовий інтелект</li>
                    <li>- Через творчість дитина самовиражається, відображає свої думки у працях.</li>
                    <li>- Заняття живопису знімає напругу, затискачі в тілі. Особливо корисні творчі заняття дітям, схильним до капризів, неврозів.</li>
                </ul>
            </section>
        </div>
    )
}

const Art = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Арт - терапія:</h3>
                <p>Арт-терапія - це форма психотерапії, яка використовує мистецтво і творчість як засіб для підтримки психічного здоров'я та благополуччя. Під час арт-терапії діти працюють з різними мистецькими матеріалами, такими як фарби, кольорові олівці, глина тощо, щоб висловити свої почуття та емоції через творчість.</p>
                <br /><p>Арт-терапія не обмежується високими вимогами до художньої техніки або образотворчого мистецтва. Вона спрямована на підтримку самовираження та самовираження дітей, незалежно від їхнього рівня мистецького навиків. Процес самостворення може бути стимулюючим, важливим і ефективним для розвитку психічного здоров'я та підтримки внутрішнього росту дітей.</p>
                <br /><p>В арт-терапії фокусується не тільки на самому результаті, але і на процесі творення. Вільне вираження емоцій та думок через мистецтво може допомогти дітям засвоїти нові способи реагування на стрес та важкі ситуації, збільшити свідомість своїх почуттів, а також знаходити конструктивні способи вираження себе.</p>
            </section>
        </div>
    )
}

const Preschool = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Підготовка до школи</h3>
                <p>Успіх у школі та інтерес дитини до занять багато в чому залежить від того, наскільки вона підготовлена до майбутніх змін.</p>
                <br /><p>Комплексна підготовка до школи в нашому центрі включає в себе заняття один раз на тиждень по  50 хвилин а саме:</p>
                <ul>
                    <li>- Основи математики (логіка)</li>
                    <li>- Розвиток дрібної моторики (письмо)</li>
                    <li>- Основи грамоти та читання</li>
                </ul>
                <br /><p>В “Математиці (логічне мислення)” важливо не навчання рахунку, а формування певних логічних зв'язків та уявлень: склад числа, порівняння чисел та величин.</p>
                <br /><p>“Основи грамоти читання”- важливо не сама здатність дитини читати, а володіння складовим аналізом, вмінням грамотно викласти свою думку, будувати пропозицію та ясно висловлювати свої ідеї та ставити запитання.</p>
                <br /><p>“Розвиток дрібної моторики (письмо)”- важливо ще й тому, що все подальше життя дитини вимагатиме використання точних, координованих рухів кистей та пальців, які необхідні, щоб одягатися, малювати та писати, а також виконувати безліч різноманітних побутових та навчальних дій.</p>
            </section>
        </div>
    )
}
const Group = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Логопедична група для наймолодших</h3>
                <p>Логопедична група UMSCHOOL підходить для діток від 2х до 4х років.</p>
                <p>Група працює з понеділка по пʼятницю з 09:00 до 13:00.</p>
                <p>Діти мають сталий розклад за яким займаються: розвиток мовлення, основи математики, кінезіотерапія, АРТ- заняття, конструювання, казкотерапія, логіка та багато іншого.</p>
                <br /><p>4 години діти мають цікаві заняття направлені на всебічний розвиток дитини.</p>
                <br /><p>Запис до занять можливий після проходження комплексної первинної діагностики!</p>
            </section>
        </div>
    )
}
const English = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Англійська мова</h3>
                <p>Мова з кожним роком стає все більше популярною та необхідною в сучасному світі.</p>
                <br /><p>Тут кілька переконливих причин:</p>
                <ul>
                    <li>- Глобальний доступ: Знання англійської розширює можливості спілкування та роботи в будь-якому куточку світу.</li>
                    <li>- Розвиток кар’єри: Багато компаній вимагають знання англійської як ключового навички при наймі персоналу.</li>
                    <li>- Культурний обмін: Вивчення англійської дозволяє вам поглиблюватися в культуру та спілкуватися з людьми з різних країн.</li>
                </ul>
                <br /><p>В UMschool викладачі з глибоким досвідом та індивідуальним підходом зможуть якісно передати Вам свої знання. В нас немає нудних занять, які забирають мотивацію до навчання.</p>
                <br /><p>Ми використовуємо тільки інноваційні методи навчання. Вивчаємо мову у захопливій та ефективній формі, яка допомагає за короткий термін вивчити її.</p>
            </section>
        </div>
    )
}
const Music = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Музичні заняття</h3>
                <p>Голос - це інструмент який допомагає нам взаємодіяти зі світом використовуючи пісню та мелодію, ми можемо ділитись своїми почуттями та думками з усіма навколо.</p>
                <p>Музика та вокальні заняття:</p>
                <ul>
                    <li>● Активізація слухового сприйняття.Музика допомагає розвивати слухове сприйняття, що може користуватися дітям при вивченні та розвитку мовлення. </li>
                    <li>● Ритмічна координація.Вокальні вправи, пов'язані з ритмом, можуть покращити моторику та ритмічну координацію, що є важливим для розвитку мовлення. </li>
                    <li>● Соціальна взаємодія. Групові заняття музикою та вокалом створюють можливість для дітей спілкуватися та взаємодіяти, що сприяє соціальному розвитку. </li>
                    <li>● Виразне мовлення. Вокальні вправи сприяють виразному мовленню та допомагають у формуванні чіткої артикуляції. </li>
                    <li>● Радість та мотивація. Музика може створювати позитивні емоції та стимулювати дітей до активності та вивчення. Важливо при цьому враховувати індивідуальні особливості кожної дитини та адаптувати підходи відповідно до їхніх потреб і рівня розвитку.</li>
                </ul>
            </section>
        </div>
    )
}
const Dance = () => {
    return (
        <div className="Grid">
            <section>
                <h3>Танці</h3>
                <p>Танець - це спосіб підтримувати дух і тіло в гарній формі.</p>
                <br /><p>Танці можуть мати позитивний вплив на розвиток дитини в різних аспектах, включаючи мовлення та корекцію поведінки. Ось деякі способи, які танці можуть впливати на розвиток:</p>
                <ul>
                    <li>1. Мовлення та виразний рух:
                        <ul>
                            <li>• розвиток координації:танці вимагають від дітей різнобарвних рухів та координації, що може сприяти розвитку моторики та виразного руху.</li>
                            <li>• мовленнєва експресія:рухи тіла та вираз обличчя під час танцю можуть допомагати дітям виражати свої почуття та емоції.</li>
                        </ul>
                    </li>
                    <li>2. Соціальна взаємодія та групова співпраця: 
                        <ul>
                            <li>• групові танці:участь у групових танцях може сприяти розвитку соціальних навичок, взаємодії та співпраці з іншими дітьми.</li>
                            <li>• робота в колективі:танці можуть сприяти розвитку вмінь слухати інших, взаємодіяти та дотримуватися правил.</li>
                        </ul>
                    </li>
                    <li>3. Корекція поведінки та самоконтроль: 
                        <ul>
                            <li>• регуляція емоцій:танці можуть служити як засіб для вираження та виведення емоцій, допомагаючи дитині зберігати емоційний баланс.</li>
                            <li>• розвиток самодисципліни: вивчення танців може вимагати від дітей концентрації та самодисципліни, що сприяє розвитку контролю над поведінкою.</li>
                        </ul>
                    </li>
                    <li>4. Когнітивний розвиток: 
                        <ul>
                            <li>• пам'ять та координація:виконання танців вимагає запам'ятовування послідовностей та координації рухів, що може позитивно впливати на когнітивний розвиток.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}
const Modal = ({ element, close }) => {

    const data = {
        logoped: {
            title: "Логопед-дефектолог",
            content: Logoped
        },
        child_psy: {
            title: "Корекційний психолог",
            content: ChildPsy
        },
        kinez: {
            title: "Кінезіотерапія",
            content: Kinez
        },
        painting:{
            title:"Заняття з живопису",
            content:Painting
        },
        art: {
            title: "АРТ - терапія",
            content: Art
        },
        preschool: {
            title: "Підготовка до школи",
            content: Preschool
        },
        group: {
            title: "Логопедична група для наймолодших",
            content: Group
        },
        english: {
            title: "Англійська мова",
            content: English
        },
        music: {
            title: "Музичні заняття",
            content: Music
        },
        dance: {
            title: "Танці",
            content: Dance
        }
    }

    return (
        <RootPortal>
            <div className="Modal-back" onClick={close}></div>
            <div className="Modal">
                <div className="Modal-close" onClick={close}>
                    <img src={closeImg} />
                </div>
                <div className="Modal-title">
                    <h2>{data[element].title}</h2>
                </div>
                <div className="Modal-content">{data[element].content()}</div>
                <div className="Modal-footer">
                    <button className="btn">Записатися</button>
                </div>
            </div>

        </RootPortal>
    )
}
export default Modal;