import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage, saveImage }) => {
  const authorName = image.user?.name || 'No author name';
  const authorPortfolioUrl = image.user?.portfolio_url;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_description}</Card.Text>
        {image.saved && (
          <Button variant="primary" onClick={() => deleteImage(image.id)}>
            Delete
          </Button>
        )}{' '}
        {!image.saved && (
          <Button variant="secondary" onClick={() => saveImage(image.id)}>
            Save
          </Button>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-muted">
        {authorPortfolioUrl && (
          <a
            href={authorPortfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {authorName}
          </a>
        )}
        {!authorPortfolioUrl && authorName}
      </Card.Footer>
    </Card>
  );
};

export default ImageCard;
