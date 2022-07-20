import styles from './projects.module.scss'


export default function Projects() {
    const portfolio = [
        {
            name: "Французские народные сказки",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://illustrators.ru/uploads/illustration/image/470683/470683_original.jpg",
            author: "Иван Грозный",
            avatar: "https://i.ibb.co/zr67tTv/scale-1200.webp"
        },
        {
            name: 'О. Дриз, "Стихи для детей"',
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://illustrators.ru/uploads/illustration/image/402915/402915_original.jpg",
            author: "Иван Грозный",
            avatar: "https://i.ibb.co/zr67tTv/scale-1200.webp"
        },
        {
            name: 'Е. Шварц, Сказка о потерянном времени',
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://illustrators.ru/uploads/illustration/image/1164316/Часы_для_фб..jpg",
            author: "Иван Грозный",
            avatar: "https://i.ibb.co/zr67tTv/scale-1200.webp"
        },
        {
            name: 'Е. Шварц, "Сказка о потерянном времени". для изд. "Капитал".',
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://illustrators.ru/uploads/illustration/image/1382360/Старик_едет_на_трамвае..jpg",
            author: "Иван Грозный",
            avatar: "https://i.ibb.co/zr67tTv/scale-1200.webp"
        },
        {
            name: 'Д. Свифт, "Путешествие Гулливера"',
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://illustrators.ru/uploads/illustration/image/1033777/Мастер-стр..jpg",
            author: "Иван Грозный",
            avatar: "https://i.ibb.co/zr67tTv/scale-1200.webp"
        },
    ]
    return (
        <div className={styles.projects}>
            {
                portfolio.map((item, index) => (
                    <div className={styles.project} key={index}>
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <a href="" target="_blank" className={styles.cardName}>{item.name}</a>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={styles.author}>
                                <img src={item.avatar} alt="" />
                                <div className={styles.name}>{item.author}</div>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}