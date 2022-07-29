import { useState, useEffect } from 'react';
import { useFetch } from 'hooks';

// this.setState(newState, callback)

// useState(initialVaue)
// useEffect(effectCallback, [deps])

export default function SideEffects() {
  const { loading, error, data } = useFetch('https://randomuser.me/api');
  const [user, setUser] = useState(null);
  useEffect(() => setUser(data?.results[0]), [data]);

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">오류 발생 {error.message}</div>;
  }

  return (
    <div className="side-effect">
      <h2>User Information</h2>

      {user && (
        <figure className="userInfo">
          <img src={user.picture?.large} alt="" />
          <figcaption>{user.email}</figcaption>
        </figure>
      )}
    </div>
  );
}
