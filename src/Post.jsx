import "./Post.css";
export default function Post({post}) {
    console.log(post);
    const {userId, id, title, body} = post;
    return (
        <div className="box">
            <h4>Title: {title}</h4>
            <p>UserId: {userId}</p>
            <p><small>Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}