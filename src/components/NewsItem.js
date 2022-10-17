import React  from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } =props;
    return (
      <div className="my-4">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="badge bg-danger">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author?"Uknown":author} on{new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;