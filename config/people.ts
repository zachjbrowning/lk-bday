export const randomImage = (person: Person) => person.imgs[Math.floor(Math.random() * person.imgs.length)]

export type Person = {
    name: string;
    imgs: Array<string>;
    audio: string;
}

export const people: Array<Person> = [
    {
        name: "Lorna",
        imgs: [
            "/lk.jpg",
            "/lornaZombie.jpg",
        ],
        audio: "Voice.mp3"
    },
    {
        name: "Zach",
        imgs: [
            "/zz.jpg",
        ],
        audio: "Voice.mp3"
    },
    {
        name: "Kaitlyn",
        imgs: [
            "/kK.jpg",
            "/kShhessh.jpg",
        ],
        audio: "Voice.mp3"
    },
]