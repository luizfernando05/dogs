import React from 'react';
import FeedModal from './FeedModal';
import FeedPhoto from './FeedPhotos';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed;