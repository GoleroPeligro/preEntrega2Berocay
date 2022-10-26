const CategoryButton = (prop, id) => {
    return (
        <div>
            <a className="category-button" href={`/category/${prop.value.toLowerCase()}`}>{prop.value}</a>
        </div>
    )
}

export default CategoryButton;