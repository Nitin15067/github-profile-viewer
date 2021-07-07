import React, {useState} from 'react';

// css
import './filters.css';

// Helpers
import {filterBtns} from '../helpers/filterHelper';

const Filters = ({applyFilter}) => { 
    const [filter, setFilter] = useState(filterBtns[0].value);
    // sort flag will be 1 or -1 for ascending and descending respectively.
    const [sortFlag, setSortFlag] = useState(1);

    const handleClick = (filterValue) => {
        console.log(filterValue);
        if(filter === filterValue) {
            applyFilter(filterValue, -1*sortFlag);
            setSortFlag(-1*sortFlag);
        } else {
            applyFilter(filterValue, 1);
            setSortFlag(1);
        }
        setFilter(filterValue);
        console.log(filter);
    }

    return <div className="filters">Sort By: <span className="sort-by-btns">
        {filterBtns.map(filterBtn => {
            return <button onClick={() => handleClick(filterBtn.value)} key={filterBtn.id} className={`btn ${filterBtn.value === filter ? `active`: ``}`}>{filterBtn.label}{filterBtn.value === filter ? sortFlag === 1 ? <>&darr;</> : <>&uarr;</> : null}</button>
        })}
        </span>
    </div>
}

export default Filters;