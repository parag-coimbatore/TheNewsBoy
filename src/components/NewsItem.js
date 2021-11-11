import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl?"https://www.hollywoodreporter.com/wp-content/uploads/2021/10/2021_MathieuBittonT1080234-H-2021.jpg?w=1024":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem

