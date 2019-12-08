import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Modal from '../modal/Modal';
import { Container } from './PlaylistModal.styles';
import { fetchPlaylists, createList } from '../../actions/userActions';

const PlaylistModal = ({
  open,
  closeModal,
  fetchPlaylists,
  user,
  createList
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const { name, description } = formData;

  useEffect(() => {
    fetchPlaylists(user.id);
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddNew = e => {
    e.preventDefault();
    let data;
    if (description) {
      data = { name, description };
    } else {
      data = { name };
    }

    createList(data);
  };

  let lists;
  if (user.lists && !user.loading) {
    lists = user.lists.results.map(list => list.name);
  }

  return (
    <Modal open={open} closeModal={closeModal}>
      <Container>
        <input value={name} name='name' onChange={handleChange} />
        <input value={description} name='description' onChange={handleChange} />
        <button onClick={handleAddNew}>add new</button>
        {lists}
      </Container>
    </Modal>
  );
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { fetchPlaylists, createList }
)(PlaylistModal);
