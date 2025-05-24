class Playlist {
    constructor(musicas = []) {
        this.musicas = [...musicas];
    }

    adicionarMusica(nome) {
        this.musicas.push(nome);
    }

    [Symbol.iterator]() {
        let index = 0;
        const musicas = this.musicas;

        return {
            next() {
                if (index < musicas.length) {
                    return {
                        value: musicas[index++],
                        done: false
                    };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const Playlist1 = new Playlist(['Sweet Child O Mine', 'Bohemian Rhapsody', 'Thunderstruck']);
Playlist1.adicionarMusica('Welcome To The Jungle');

for (const musica of Playlist1) {
    console.log(musica);
}