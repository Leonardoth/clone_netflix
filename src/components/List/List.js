import React from 'react';
import './index.scss';

// Components
import Show from '../Show/Show';

function List(props) {
  const { title, items } = props;
  return (
    <div className='List'>
      <h4 className='List__Title'>{title}</h4>
      <div className='List__Titles'>
        {items.map(show => {
          return (
            <Show
              season={show.season}
              episode={show.episode}
              image={show.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
