const CategoryItem = ({ href, iconSrc, title }) => {
    return (
      <div className="cat-item">
        <a href={href} className="cat-item-inner">
          <span className="cat-icon">
            <img src={iconSrc} alt={title} width="48" height="48" />
          </span>
          <p>{title}</p>
        </a>
      </div>
    );
  };
  