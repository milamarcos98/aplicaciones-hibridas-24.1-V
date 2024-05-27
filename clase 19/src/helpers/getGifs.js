import axios from "axios";

export const getGifs = async (endpoint, info) => {
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const base_url = "https://api.giphy.com/v1/"
    let url;
    switch(endpoint){
        case "search":
            url = `${base_url}gifs/search?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${info}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        break;
        case "id":
            url = `${base_url}gifs/${info}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&rating=g`
        break;
        case "random":
            url = `${base_url}gifs/${endpoint}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&tag=&rating=g`;
        break;
        case "autocomplete":
            url = `${base_url}tags/related/${info}?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL`;
        break;
        default:
            throw new Error("invalid endpoint");
    }

    return axios.get(url)
    .then(res => {
        // console.log(res)
        return res.data.data
    })
}