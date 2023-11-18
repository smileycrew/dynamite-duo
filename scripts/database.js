const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Dr. Arki",
            power: "Freeze touch"
        },
        {
            id: 2,
            name: "Rewind",
            power: "Slow time"
        },
        {
            id: 3,
            name: "Doom",
            power: "Black hole"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}