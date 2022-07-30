import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore <a href="#">Your DevPath</a>
      </p>
    </div>
  );
};

export default ExploreContainer;
