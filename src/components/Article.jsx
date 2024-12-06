import React from "react";

function Footer() {
    return (
        <div>
            <main>
                <article>
                    <time dateTime="2024-08-07">7 Aug 2024</time>
                    <h2 className="blog-title">Fashion Today</h2>
                    <img src="./public/imgs/blog-image-1.jpg" alt="woman walking down the steet" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Odio explicabo doloribus possimus, consequuntur ducimus
                            reiciendis quia assumenda libero! Vero optio similique
                            eveniet dolorem ad. Harum distinctio unde placeat aut blanditiis!
                        </p>
                        <span> <a href="#">Continues...</a></span>
                        <aside>
                            <h3>Related Articles</h3>
                            <ul>
                                <li><a href="#">City Staples</a></li>
                                <li><a href="#"> Back to Basics</a></li>
                            </ul>
                        </aside>
                </article>

                <article>
                    <time dateTime="2024-08-07">7 Aug 2024</time>
                    <h2 className="blog-title">Trendy Comebacks</h2>
                    <img src="./public/imgs/blog-image-2.jpg" alt="fashion show audience"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Odio explicabo doloribus possimus, consequuntur ducimus
                            reiciendis quia assumenda libero! Vero optio similique
                            eveniet dolorem ad. Harum distinctio unde placeat aut blanditiis!
                        </p>
                        <span> <a href="#">Continues...</a></span>
                        <aside>
                            <h3>Related Articles</h3>
                            <ul>
                                <li><a href="#">Chic Outlook</a></li>
                                <li><a href="#">Pilates Princess </a></li>
                            </ul>
                        </aside>
                </article>
            </main>

        </div>
    )
}
export default Footer;  
