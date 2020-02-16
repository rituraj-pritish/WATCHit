import React from 'react';
import ListItem from '../list-item/ListItem';

const List = ({ data, dataType }) => {
  if (data.length === 0) return <div>Nothing added yet</div>;
  return (
    <div>
      {data.map(item => (
        <ListItem dataType={dataType} key={item.id} item={item} {...item} />
      ))}
    </div>
  );
};

export default List;
