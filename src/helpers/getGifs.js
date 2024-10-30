export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BMVfmOVnxVYMR4nHtLgrw0LiGQ6m6JyZ&q=${ category }&limit=5`;

    const res = await fetch(url);

    const {data} = await res.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            url:img.images.downsized_medium.url,
            title:img.title,
        }
    })
    
    return gifs;
}
