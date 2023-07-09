import { nanoid } from "nanoid"
import "./App.less"
import { useState } from "react"

interface Card {
    key: string
    text: string
}

function App() {
    const cardList: Card[] = [
        {
            key: nanoid(),
            text: "0"
        },
        {
            key: nanoid(),
            text: "1"
        },
        {
            key: nanoid(),
            text: "2"
        },
        {
            key: nanoid(),
            text: "3"
        },
        {
            key: nanoid(),
            text: "4"
        },
        {
            key: nanoid(),
            text: "5"
        },
        {
            key: nanoid(),
            text: "6"
        },
        {
            key: nanoid(),
            text: "7"
        },
        {
            key: nanoid(),
            text: "8"
        },
        {
            key: nanoid(),
            text: "9"
        },
        {
            key: nanoid(),
            text: "10"
        },
        {
            key: nanoid(),
            text: "10"
        },
        {
            key: nanoid(),
            text: "11"
        },
        {
            key: nanoid(),
            text: "12"
        },
        {
            key: nanoid(),
            text: "13"
        },
        {
            key: nanoid(),
            text: "14"
        },
        {
            key: nanoid(),
            text: "15"
        },
        {
            key: nanoid(),
            text: "16"
        },
        {
            key: nanoid(),
            text: "17"
        },
        {
            key: nanoid(),
            text: "18"
        },
        {
            key: nanoid(),
            text: "19"
        },
        {
            key: nanoid(),
            text: "20"
        },
        {
            key: nanoid(),
            text: "21"
        },
        {
            key: nanoid(),
            text: "22"
        },
        {
            key: nanoid(),
            text: "23"
        },
        {
            key: nanoid(),
            text: "24"
        },
        {
            key: nanoid(),
            text: "25"
        },
        {
            key: nanoid(),
            text: "26"
        },
        {
            key: nanoid(),
            text: "27"
        },
        {
            key: nanoid(),
            text: "28"
        },
        {
            key: nanoid(),
            text: "29"
        },
        {
            key: nanoid(),
            text: "30"
        },
        {
            key: nanoid(),
            text: "31"
        }
    ]

    const [actived, setActived] = useState(false)

    const more = () => {
        setActived(!actived)
    }

    return (
        <div className="container">
            <div className={actived ? "spread" : "default"}>
                {cardList.map(e => (
                    <div className="item" key={e.key}>
                        {e.text}
                    </div>
                ))}
            </div>
            <div className={actived ? "fold" : "more"} onClick={more}>
                {actived ? "收起" : "更多"}
            </div>
        </div>
    )
}

export default App
