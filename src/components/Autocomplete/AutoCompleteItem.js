import React from "react";
import "./AutoCompleteItem.css";

const AutoCompleteItem=({name, capital,region,flag,onSelectItem,isHiglighted})=>{
    return(
        <li className={`list-group-item ${isHiglighted ? "active highlighted" : " " }`} onClick={onSelectItem}>
            <div className="row">
                <div className="col text-left">
                    <div class="search-listitemdiv">
                        <p className='mb-0 font-weight-bold line-height-1'>
                            <strong>{name}{""}</strong>
                            
                        </p>
                        <img src={flag} alt="" style={{width: "30px"}}/>
                    </div>
                    <p className='mb-0 badge badge-primary'>{region}</p>
                    <p className='mb-0 ml-2 badge badge-secondary'>{capital}</p>
                </div>
            
            </div>
        </li>
    )
    
}
export default AutoCompleteItem;