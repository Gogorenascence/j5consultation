import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import ArticleImageCreate from "./ArticleImageCreate";
import ArticleTemplates from "./ArticleTemplates";
import { todaysFormattedDate } from "../Helpers";
import CardTextInput from "../Search/CardTextInput";


function ArticleCreatePage({
    booster_sets
}) {

    const { account } = useContext(AuthContext)

    const [article, setArticle ] = useState({
        title: "",
        subtitle: "",
        author: "",
        story_date: todaysFormattedDate(),
        section: "",
        content: "",
        images: "",
        news: true,
        site_link: "",
    });

    const [images, setImages] = useState([])
    const [stayHere, setStayHere] = useState(false)

    const handleArticleChange = (event) => {
        console.log(article)
        setArticle({
            ...article,
            [event.target.name]: event.target.value})
    }

    const handleImageChange = (imagesIndex, updatedImage) => {
        setImages((prevImages) => {
            const newImages = [...prevImages]
            newImages[imagesIndex] = updatedImage
            return newImages
        })
    }

    const handleAddImage = () => {
        const newImages = [...images]
        newImages.push({})
        setImages(newImages)
    }

    const handleRemoveImage = (index) => {
        const newImages = [...images]
        newImages.splice(index, 1)
        setImages(newImages)
    }

    const handleArticleCheck = (event) => {
        setArticle({...article, news: !article.news});
    };

    const handleStayCheck = (event) => {
        setStayHere(!stayHere);
    };

    useEffect(() => {
        document.title = "Article Create - PM CardBase"
        return () => {
            document.title = "PlayMaker CardBase"
        };
    // eslint-disable-next-line
    },[]);

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...article};
        data["author"] = account.username
        data["images"] = {}
        for (let image of images) {
            console.log(typeof image.keyName)
            if (data["images"][image.keyName]) {
                const articleImage = {
                    src: image.src,
                    caption: image.caption,
                    link: image.link,
                    order: image.order,
                    alt_text: image.alt_text,
                }
                data["images"][image.keyName].push(articleImage)
            } else {
                data["images"][image.keyName] = []
                const articleImage = {
                    src: image.src,
                    caption: image.caption,
                    link: image.link,
                    order: image.order,
                    alt_text: image.alt_text,
                }
                data["images"][image.keyName].push(articleImage)
            }
        }
        console.log(data)
        const articleUrl = "https://pm-deck-react-only.onrender.com/articles/";
        // const articleUrl = "http://localhost:4000/articles/";
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(articleUrl, fetchConfig);
        if (response.ok) {
            const responseData = await response.json();
            const article_id = responseData._id.toString();
            setArticle({
                title: "",
                subtitle: "",
                author: "",
                story_date: todaysFormattedDate(),
                section: "",
                content: "",
                images: "",
                news: false,
                site_link: "",
            });
            setImages([])
            if (!stayHere) {navigate(`/articles/${article_id}`)}
            console.log("Success", responseData)
        } else {
            alert("Error in creating news");
        }
    }

    console.log(booster_sets)
    // if (!(account && account.roles.includes("admin"))) {
    //     setTimeout(function() {
    //         navigate("/")
    //     }, 3000);
    // }

    return (
        <div>
            { account && account.roles.includes("admin")?
                <div className="white-space">
                    <h1 className="margin-top-40">Article Create</h1>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{width: "50%", display: "flex", justifyContent: "center"}}>
                            <div
                                id="create-article-page">
                                <h2 className="left">Article Details</h2>
                                <h5 className="label">Title </h5>
                                <input
                                    className="builder-input"
                                    type="text"
                                    placeholder=" Title"
                                    onChange={handleArticleChange}
                                    name="title"
                                    value={article.title}>
                                </input>
                                <br/>
                                <h5 className="label">Subtitle </h5>
                                <input
                                    className="builder-input"
                                    type="text"
                                    placeholder=" Subtitle"
                                    onChange={handleArticleChange}
                                    name="subtitle"
                                    value={article.subtitle}>
                                </input>
                                <br/>
                                <h5 className="label">Section </h5>
                                <select
                                    className="builder-input"
                                    type="text"
                                    value={article.section}
                                    name="section"
                                    onChange={handleArticleChange}>
                                    <option value="">Section</option>
                                    <option value="guide">Guide</option>
                                    <option value="lore">Lore</option>
                                    <option value="releases">Card Releases</option>
                                    <option value="game">Game Play and Mechanics</option>
                                    <option value="design">Game Design</option>
                                    <option value="site">Site</option>
                                    <option value="social">Social Media</option>
                                    <option value="events">Events</option>
                                    <option value="simulator">Simulator</option>
                                    <option value="admin">Admin</option>
                                </select>
                                <br/>
                                <h5 className="label">Date</h5>
                                <input
                                    className="builder-input"
                                    type="date"
                                    placeholder=" Date"
                                    max={todaysFormattedDate()}
                                    onChange={handleArticleChange}
                                    name="story_date"
                                    value={article.story_date}>
                                </input>
                                <br/>
                                <h5 className="label">Site Link</h5>
                                <input
                                    className="builder-input"
                                    type="text"
                                    placeholder=" Site Link"
                                    onChange={handleArticleChange}
                                    name="site_link"
                                    value={article.site_link}>
                                </input>
                                <br/>
                                <div className="flex builder-input">
                                    <div className="flex-full">
                                        <input
                                            style={{margin: "2px 5px 0 0", height:"10px"}}
                                            type="checkbox"
                                            onChange={handleArticleCheck}
                                            name="news"
                                            checked={article.news}
                                            >
                                        </input>
                                        <label for="news"
                                            className="bold"
                                        >
                                            News Article
                                        </label>
                                    </div>
                                    <div className="flex-full margin-left">
                                        <input
                                            style={{margin: "2px 5px 0 0", height:"10px"}}
                                            id="stayHere"
                                            type="checkbox"
                                            onChange={handleStayCheck}
                                            name="stayHere"
                                            checked={stayHere}
                                            >
                                        </input>
                                        <label for="stayHere"
                                            className="bold"
                                        >
                                            Keep me here
                                        </label>
                                    </div>
                                </div>
                                {account?
                                    <div className="flex-items">
                                        <button
                                            className="left"
                                            onClick={handleSubmit}
                                            disabled={article["title"]===""? true: false}
                                        >
                                            Create Article
                                        </button>
                                        <button
                                            className="left"
                                            onClick={() => handleAddImage()}
                                        >
                                            Add Image
                                        </button>
                                    </div>:null
                                }
                                <br/>
                                { !account?
                                    <h6 className="error">You must be logged in to create an article</h6>:
                                null
                                }
                                <ArticleTemplates
                                    setArticle={setArticle}
                                    setImages={setImages}
                                    author={account}
                                />
                                <br/>
                                <div className="margin-left-13">
                                    <p>Add "//" to make a new line</p>
                                    <p>Add "]]" to make a line bold</p>
                                    <p className="margin-bottom-0">Add "@@" to make a line larger</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h2 className="label">Article Content</h2>
                    <textarea
                        className="large-article"
                        type="text"
                        placeholder=" Article Content"
                        onChange={handleArticleChange}
                        name="content"
                        value={article.content}>
                    </textarea>
                    <br/>
                    <CardTextInput
                        booster_sets={booster_sets}
                        images={images}
                        setImages={setImages}
                    />
                    {images?.map((image, index) =>
                        <ArticleImageCreate
                            key={index}
                            image={image}
                            imagesIndex={index}
                            handleImageChange={handleImageChange}
                            content={article.content}
                            handleRemoveImage={handleRemoveImage}
                        />
                    )}
                </div>:
                <div className="textwindow">
                    <h1 className="undercontext">This Feature Is For Admins Only</h1>
                    <h3 className="undercontext">Redirecting in 3 Seconds</h3>
                </div>
            }
        </div>
    );
}

export default ArticleCreatePage;
