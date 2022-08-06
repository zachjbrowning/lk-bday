export const randomImage = (person: Person) => person.imgs[Math.floor(Math.random() * person.imgs.length)]
export const randomAUdio = (person: Person) => person.audio[Math.floor(Math.random() * person.audio.length)]

export type Person = {
    name: string;
    imgs: Array<string>;
    audio: Array<string>;
}

export const people: Array<Person> = [
    {
        name: "Lorna",
        imgs: [
            "/lk.jpg",
            "/lornaZombie.jpg",
        ],
        audio: [
            "Lorna.mp3"
        ]
    },
    {
        name: "Zach",
        imgs: [
            "/zz.jpg",
        ],
        audio: [
            "Choose.mp3"
        ]
    },
    {
        name: "Kaitlyn",
        imgs: [
            "/kK.jpg",
            "/kShhessh.jpg",
        ],
        audio: [
            "Kaityln1.mp3",
            "Kaityln2.mp3",
        ]
    },
    {
        name: "Bella",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Bella.mp3",
        ]
    },
    {
        name: "Beza",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Beza.mp3",
        ]
    },
    {
        name: "Courtney",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Courtney.mp3",
        ]
    },
    {
        name: "Cynthia",
        imgs: [
            "/Cynthia.jpg",
            "/Cynthia2.jpg",
        ],
        audio: [
            "Cynth.mp3",
        ]
    },
    {
        name: "Josh",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Josh.mp3",
        ]
    },
    {
        name: "Alex Mac",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Macca.mp3",
        ]
    },
    {
        name: "Mim",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Mim.mp3",
        ]
    },
    {
        name: "Nick",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Nick.mp3",
        ]
    },
    {
        name: "Tom",
        imgs: [
            "/favicon.ico",
        ],
        audio: [
            "Tom.mp3",
        ]
    },
]