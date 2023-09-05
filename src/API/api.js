export const categories = [
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/news.png",
        name: "general",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "entertainment",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
        name: "health",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
        name: "science",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
        name: "sports",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
        name: "technology",
    },
];

export const country = [
    {
        code: "in",
        name: "India",
    },
    {
        code: "us",
        name: "USA",
    },
    {
        code: "au",
        name: "Australia",
    },
    {
        code: "ru",
        name: "Russia",
    },
    {
        code: "fr",
        name: "France",
    },
    {
        code: "gb",
        name: "United Kingdom",
    },
];

export const sources = [
    {
        id: "bbc-news",
        name: "BBC News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
        id: "cnn",
        name: "CNN",
        pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
    },
    {
        id: "fox-news",
        name: "Fox News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
        id: "google-news",
        name: "Google News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
];

export const images = [
    {
        "image": "https://i.pinimg.com/originals/2e/1a/84/2e1a84003a533f527b2b201e5ea6ca53.jpg",
    },
    {
        "image": "https://your-photography.com/files/2015/10/006.jpg",
    },
    {
        "image": "https://telegra.ph/file/c96f197537da8cd588585.jpg",
    },
]

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
    return `${BASE_URL}/everything/${source}.json`;
};

export const getAaradhana = async (successCallBack) => {
    console.log("\n\n getAaradhya called")

    try {
        const response = await fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/aradhana/getallaradhaya");
        const json = await response.json();
        console.log("\n\n getAaradhya success: ", json)
        successCallBack(json)
    } catch (error) {
        console.log("\n\n getAaradhya failed: ", error)
        successCallBack(null)
    }
}

export const getAllMandir = async (successCallBack) => {
    console.log("\n\n getAllMandir called")

    try {
        const response = await fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/mandir/getallmandir");
        const json = await response.json();
        console.log("\n\n getAllMandir success: ", json)
        successCallBack(json)
    } catch (error) {
        console.log("\n\n getAllMandir failed: ", error)
        successCallBack(null)
    }
}

export const getSingleMandir = async (mandir_id, successCallBack) => {
    console.log("\n\n getSingleMandir called")

    try {
        const response = await fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/mandir/getamandir/" + mandir_id);
        const json = await response.json();
        console.log("\n\n getSingleMandir success: ", json)
        successCallBack(json)
    } catch (error) {
        console.log("\n\n getSingleMandir failed: ", error)
        successCallBack(null)
    }
}
