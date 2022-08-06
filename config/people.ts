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
            "/lornaZombie.jpg",
            "/lor.jpg",
        ],
        audio: [
            "/Lorna.mp3"
        ]
    },
    {
        name: "Zach",
        imgs: [
            "/zz.jpg",
        ],
        audio: [
            "/Choose.mp3"
        ]
    },
    {
        name: "Daitlyn",
        imgs: [
            "/kK.jpg",
            "/kShessh.jpg",
        ],
        audio: [
            "/Kaitlyn1.mp3",
            "/Kaitlyn2.mp3",
        ]
    },
    {
        name: "Bella",
        imgs: [
            "/bella.jpg",
        ],
        audio: [
            "/Ciao.mp3",
        ]
    },
    {
        name: "Beza",
        imgs: [
            "/beza.jpg",
        ],
        audio: [
            "/Salt.mp3",
        ]
    },
    {
        name: "Courtney",
        imgs: [
            "/courtney.jpg",
        ],
        audio: [
            "/Courtney.mp3",
        ]
    },
    {
        name: "Cynthia",
        imgs: [
            "/Cynthia.jpg",
            "/cynthia2.jpg",
        ],
        audio: [
            "/Cynth.mp3",
        ]
    },
    {
        name: "Josh",
        imgs: [
            "/josh.jpg",
        ],
        audio: [
            "/Joshhhh.mp3",
        ]
    },
    {
        name: "Alex Mac",
        imgs: [
            "/mac.jpg",
        ],
        audio: [
            "/Mcdonald.mp3",
        ]
    },
    {
        name: "Mim",
        imgs: [
            "/mim.jpg",
        ],
        audio: [
            "/Mimim.mp3",
        ]
    },
    {
        name: "Nick",
        imgs: [
            "/nick.jpg",
        ],
        audio: [
            "/Sprinkles.mp3",
        ]
    },
    {
        name: "Tom",
        imgs: [
            "/tom.jpg",
        ],
        audio: [
            "/Tom.mp3",
        ]
    },
]
