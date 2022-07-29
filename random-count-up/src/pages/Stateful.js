import { useState, useCallback, useMemo, Component } from 'react';
import { InteractHeadline, A11yHidden } from 'components';
import { arrayOf, oneOfType, number, string } from 'prop-types';
import { UserType } from 'types';
import { fibonacci } from 'utils';
import { useTheme } from 'contexts/theme';

function StatefulComponent() {
  const themeConfig = useTheme(); // { theme, setTheme }

  console.log(themeConfig);

  // const { isShowChild, containerStyle, color, background, theme, members } = this.state;

  // 함수 컴포넌트가 상태를 관리하는 방법
  // useState는 단 하나의 상태만 관리하는 것이 좋다.
  // [state, updateFunction] = useState(initialValue)

  // lazy Initialization
  // const [state, updateFunction] = useState(() => )
  // React Hooks = Memoization
  // const [fibo] = useState(() => fibonacci(30));
  const [storage] = useState(() => {
    const yamoo9 = localStorage.getItem('yamoo9');
    return !yamoo9 ? false : true;
  });

  const [count, setCount] = useState(10);
  const [step] = useState(10);

  const [isShowChild, setIsShowChild] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [background, setBackground] = useState('#000');
  const [color, setColor] = useState('#fff');
  const [members, setMemebers] = useState([
    { id: 'user-1', name: '해오랑', age: 23 },
    { id: 'user-2', name: '김이박', age: 45 },
    { id: 'user-3', name: '박현식', age: 39 },
    { id: 'user-4', name: '최연지', age: 28 },
    { id: 'user-5', name: '박사랑', age: 19 },
  ]);

  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setColor(color.includes('000') ? '#fff' : '#000');
    setBackground(background.includes('000') ? '#fff' : '#000');
  };

  const handleToggleChild = () => {
    setIsShowChild(!isShowChild);
  };

  // 함수 컴포넌트가 리-렌더링 될 때 마다 함수 실행 컨텍스트 초기화
  // useCallback(() => {}, deps)은 useMemo(() => () => {}, deps)와 같습니다.
  const calcFibo = useCallback(() => {
    console.log('memoized callback', count);
    return fibonacci(count);
  }, [count]);

  return (
    <div
      id="stateful-component"
      style={{
        color,
        background,
        padding: 40,
      }}
    >
      <h2>Fibonacci</h2>
      <div style={{ display: 'flex', gap: 10 }}>
        <output>
          Count: <b>{count}</b>
        </output>
        <output>
          Fibonacci: <b>{calcFibo()}</b>
        </output>
        <output>
          Storage 'yamoo9 : <b>{storage.toString()}</b>
        </output>
      </div>
      <button
        onClick={() =>
          setMemebers((members) => {
            return members.filter((member, index) => {
              return index !== 0;
            });
          })
        }
      >
        remove member
      </button>
      <button onClick={() => setCount(count + step)}>
        Calcuration Fibonacci
      </button>

      <InteractHeadline
        theme={theme}
        onChangeTheme={handleChangeTheme}
        onToggleChild={handleToggleChild}
      />

      {isShowChild && (
        <StatefulComponent.Child numbers={[20, 3034, '22']} users={members} />
      )}
    </div>
  );
}

StatefulComponent.Child = class extends Component {
  clearId = null;

  static displayName = 'StatefulChild';
  static propTypes = {
    numbers: arrayOf(oneOfType([number, string])),
    users: arrayOf(UserType),
  };

  render() {
    const { numbers, users } = this.props;
    return (
      <>
        <A11yHidden as="h3">숫자 목록</A11yHidden>
        <ul>
          {numbers && numbers.length > 0 ? (
            numbers.map((number, index) => <li key={index}>{number}</li>)
          ) : (
            <li>출력할 숫자가 없습니다.</li>
          )}
        </ul>
        <A11yHidden as="h3">사용자 목록</A11yHidden>
        <ul>
          {users && users.length > 0 ? (
            users.map(({ id, name, age }, index) => (
              <li key={id}>
                <span className="user-name">{name}</span> |{' '}
                <span className="user-age">{age}</span>
              </li>
            ))
          ) : (
            <li>사용자가 없습니다.</li>
          )}
        </ul>

        {/* <Demo.Stateless /> */}
        {/* <Demo.AnotherStateless /> */}
      </>
    );
  }

  /* -------------------------------------------------------------------------- */

  componentDidMount() {
    // this.clearId = setInterval(() => console.log('this is child'), 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.clearId);
  }
};

export default StatefulComponent;
