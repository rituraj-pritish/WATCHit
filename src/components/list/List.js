import React from 'react';
import ListItem from '../list-item/ListItem';

const List = ({ data, dataType }) => {
  return (
    <div>
      {data.map(item => (
        <ListItem dataType={dataType} key={item.id} item={item} {...item} />
      ))}
    </div>
  );
};

export default List;
