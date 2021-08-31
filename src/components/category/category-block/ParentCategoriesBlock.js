import ProductCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = ( props ) => {

	const { productCategories } = props || {};
	// console.log("productCategories",productCategories)
	return (
		<div className="product-categories d-flex">
			{ productCategories.length ? (
				productCategories.map( ( productCategory, index ) => <ProductCategoryBlock key={ productCategory?.id ?? index }  category={ productCategory }/> )
			) : null }
		</div>
	)
};

export default ParentCategoriesBlock;
