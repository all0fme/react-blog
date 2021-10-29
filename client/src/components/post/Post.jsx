import React from './Post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="/assets/postImg.jpg" alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit </span>
                <hr />
                <span className="postDate">1 hr ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ducimus illum asperiores neque blanditiis eum quidem a temporibus ex inventore suscipit repudiandae quo, veritatis incidunt, dicta exercitationem fuga praesentium unde!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore explicabo voluptates numquam voluptate, atque dolor rem? Dolorem, tempore! Mollitia, omnis! Consequuntur ut repudiandae quis temporibus atque repellendus possimus assumenda laboriosam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui! Voluptas, nihil quidem facere quas quos asperiores distinctio dolores vel doloribus temporibus magnam qui minima consequuntur ducimus cumque ipsa odit?
                </p>
            </div>


        </div>
    )
}
