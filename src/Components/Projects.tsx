import styles from './projects.module.scss'


export default function Projects() {
    const portfolio = [
        {
            name: "Картина маслом",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://i.ibb.co/GvKZj8F/38150-original.jpg"
        },
        {
            name: "Картина маслом",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://i.ibb.co/GvKZj8F/38150-original.jpg"
        },
        {
            name: "Картина маслом",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://i.ibb.co/GvKZj8F/38150-original.jpg"
        },
        {
            name: "Картина маслом",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://i.ibb.co/GvKZj8F/38150-original.jpg"
        },
        {
            name: "Картина маслом",
            date: "12.04.21",
            description: "Эту картину маслом я нарисовал когда был в полном отчаяние из-за случившегося на днях, я ударился мизинцем об стул :(",
            img: "https://i.ibb.co/GvKZj8F/38150-original.jpg"
        },
    ]
    return (
        <div className={styles.projects}>
            {
                portfolio.map((item, index) => (
                    <div className={styles.project} key={index}>
                        <div className={styles.card}>
                            <img src={item.img} alt="" />
                            <div>Kesio Dev</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}