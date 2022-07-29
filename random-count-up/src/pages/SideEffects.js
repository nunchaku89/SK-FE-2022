import { useFetch } from 'hooks';

export default function SideEffects() {
  const { loading, error, data } = useFetch('https://randomuser.me/api');

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">오류 발생 {error.message}</div>;
  }

  const user = 'results' in data ? data.results[0] : null;

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
