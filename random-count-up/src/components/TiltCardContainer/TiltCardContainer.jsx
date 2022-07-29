import './TiltCardContainer.css';
import { useState, useEffect } from 'react';
import { useFetch } from 'hooks';
import { TiltCard } from 'components';
import { ReactComponent as Spinner } from 'assets/earth.svg';

/* -------------------------------------------------------------------------- */

export const TiltCardContainer = () => {
  const { loading, error, data } = useFetch('/api/tiltcard');
  const [cards, setCards] = useState(null);
  useEffect(() => setCards(data?.cards), [data]);

  const handleRemoveCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  if (loading) {
    return (
      <figure
        style={{
          position: 'fixed',
          zIndex: 10000,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          width: '100vw',
          minHeight: '100vh',
        }}
      >
        <Spinner style={{ margin: 0 }} />
        <figcaption>로딩 중....</figcaption>
      </figure>
    );
  }
  if (error) return <div role="alert">{error.message}</div>;

  // derived state ← cards
  const hasCards = cards && cards.length > 0;

  return (
    <div className="tiltCardContainer" lang="en">
      <div className="tiltCardContainer__buttonGroup">
        {hasCards &&
          cards.map(({ id, text }) => (
            <button
              key={id}
              type="button"
              className="tiltCardContainer__button"
              onClick={() => handleRemoveCard(id)}
            >
              {text} 제거
            </button>
          ))}
      </div>
      <ul className="tiltCardContainer__list">
        {hasCards &&
          cards.map((card) => (
            <li key={card.id}>
              <TiltCard
                card={card}
                options={{
                  'max-glare': 0.2,
                  perspective: 600,
                }}
              >
                {card.text}
              </TiltCard>
            </li>
          ))}
      </ul>
    </div>
  );
};
