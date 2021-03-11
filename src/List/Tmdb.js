const API_kEY = '2c8bc6a8e41efe7511d8245b0d39dc92';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'Toprated',
                title:'Em alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'comedy',
                title:'comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'Romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_kEY}`)
            },
            {
                slug:'documentary',
                title:'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_kEY}`)
            },
        ];

    },

    getMovieInfo: async (randommovies, type) => {
        let info = {};

        if(randommovies) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${randommovies}?language=pt-BR&api_key=${API_kEY}`);
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${randommovies}?language=pt-BR&api_key=${API_kEY}`);
                    break;
                default:
                    info = null
                    break;
            }
        }

        return info;
    } 
}
