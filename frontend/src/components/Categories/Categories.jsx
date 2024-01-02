import CategoryItem from "./CategoryItem";
import "./Categories.css";

const categories = () => {
  return (
    <section className="categories">
    <div className="container">
      <div className="section-title">
        <h2>All Categories</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <ul className="category-list">
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </ul>
    </div>ğ
  </section>
  )
}

export default categories