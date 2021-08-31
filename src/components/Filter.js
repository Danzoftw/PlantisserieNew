import React, { Component, useEffect, useRef, useState  } from "react"
import ParentCategoriesBlock from "./category/category-block/ParentCategoriesBlock";

export default class Filter extends Component {
    render(){
        return(
            <div className="filter">
                {/* <div className="filter-result">{this.props.count}</div> */}
                <div className="filter-result">{this.props.count}</div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        {/* <ParentCategoriesBlock productCategories={ productCategories }/> */}
                        <option value="clothing">clothing</option>
                        <option value="accessories">accessories</option>
                        <option value="hoodies">hoodies</option>
                        <option value="tshirts">tshirts</option>
                        <option value="decor">decor</option>
                    </select>
                </div>
            </div>
        );
    }
}

// const Filter = (dataOne) => {
//     console.log(dataOne);
//     return(
//         <div className="filter">
//             {/* <div className="filter-result">{this.props.count}</div> */}
//             <div className="filter-result">{this.props.count}</div>
//             <div className="filter-sort">
//                 Order{" "}
//                 <select value={this.props.sort} onChange={this.props.sortProducts}>
//                     <option>Latest</option>
//                     <option value="lowest">Lowest</option>
//                     <option value="highest">Highest</option>
//                 </select>
//             </div>
//             <div className="filter-size">
//                 Filter{" "}
//                 <select value={this.props.size} onChange={this.props.filterProducts}>
//                     {/* <ParentCategoriesBlock productCategories={ productCategories }/> */}
//                     <option value="clothing">clothing</option>
//                     <option value="accessories">accessories</option>
//                     <option value="hoodies">hoodies</option>
//                     <option value="tshirts">tshirts</option>
//                     <option value="decor">decor</option>
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default Filter;