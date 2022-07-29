import './TiltCard.css';
import { useLayoutEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

/* -------------------------------------------------------------------------- */
// 참고
// Vanilla Tilt — https://www.npmjs.com/package/vanilla-tilt
// jQuery Tilt  — https://www.npmjs.com/package/tilt.js
// React Tilt   — https://www.npmjs.com/package/react-parallax-tilt
/* -------------------------------------------------------------------------- */

// Vanilla Tilt 옵션
const tiltOptions = {
  max: 8,
  speed: 10,
  perspective: 400,
  scale: 1.02,
  glare: true,
  'max-glare': 0.85,
};

export const TiltCard = ({ children }) => {
  // DOM 요소 참조를 목적으로 Ref를 생성합니다.
  // 참조 객체 (변할 수 있는 JavaScript 객체)
  const cardRef = useRef(null); // { current: null }

  // 최초 마운트 시점 이후 처리할 로직을 작성합니다.
  // componentDidMount (이벤트 구독, 플러그인 연결)
  // → 코드 작성

  // 마운트 해제 직전에 처리할 로직을 작성합니다.
  // componentWillUnmount (구독한 이벤트 해제, 플러그인 연결 해제)
  // cleanup function
  // → 코드 작성

  // 함수 안에서 return JSX(React.Element)
  // DOM Node
  // side effects
  useLayoutEffect(() => {
    const { current: domNode } = cardRef;
    VanillaTilt.init(domNode, tiltOptions);

    const handleTiltChange = ({ detail }) => {
      console.log(detail);
    };

    domNode.addEventListener('tiltChange', handleTiltChange);

    // effect callback → cleanup function
    return () => {
      domNode.vanillaTilt.destroy();
      domNode.removeEventListener('tiltChange', handleTiltChange);
    };
  }, []);

  return (
    <div ref={cardRef} className="tiltCard">
      {children}
    </div>
  );
};
