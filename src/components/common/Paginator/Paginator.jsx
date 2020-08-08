import React, { useState, useEffect } from "react";
import style from "./Paginator.module.css";

export default ({ totalCount, portionSize, onPageClick, pageSize }) => {
  const [portions, setPortions] = useState([]);
  const totalPages = Math.ceil(totalCount / pageSize);
  const totalPortions = Math.ceil(totalPages / portionSize);
  const [portion, setPortion] = useState(0);

  useEffect(() => {
    const localPortions = [];
    for (let i = 0; i < totalPortions; i++) {
      const page = [];
      for (let j = 1; j <= portionSize; j++) {
        const increaser = i * portionSize + j;
        if (increaser > totalPages) {
          break;
        }
        page.push(increaser);
      }
      localPortions.push(page);
    }
    setPortions(localPortions);
    console.log(portions);
  }, [totalCount]);
  
  return (
    <div className={style.paginator}>
      <button
        className={style.paginator__item}
        onClick={() => setPortion(portion - 1 >= 0 ? portion - 1 : portion)}
      >
        prev
      </button>
      <div>
        {portions[portion]?.map((x) => (
          <span
            className={style.paginator__item}
            onClick={() => onPageClick(x)}
          >
            {x}
          </span>
        ))}
      </div>
      <button
        className={style.paginator__item}
        onClick={() => setPortion(portion + 1 < totalPortions ? portion + 1 : portion)}
      >
        next
      </button>
    </div>
  );
};
