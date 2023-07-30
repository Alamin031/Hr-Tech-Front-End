import Link from 'next/link';

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

const FeaturedCategory = () => {
  return (
    <div className="m-home m-cat PX">
      <h2 className="m-header">Featured Category</h2>
      <p className="m-blurb">Get Your Desired Product from Featured Category!</p>
      <div className="cat-items-wrap">
        <CategoryItem
          href="https://www.startech.com.bd/drone"
          iconSrc="https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png"
          title="Drones"
        />
        <CategoryItem
          href="https://www.startech.com.bd/gimbal"
          iconSrc="https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png"
          title="Gimbal"
        />
        {/* Add more CategoryItem components as needed */}
      </div>
    </div>
  );
};

export default FeaturedCategory;
