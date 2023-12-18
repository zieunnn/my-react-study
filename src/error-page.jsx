import { useRouteError } from "react-router-dom";
import "./assets/css/error.css";

export default function ErrorPage() {
  const error = useRouteError();

  let errorMessage = "오류가 발생했습니다.";
  if (error.status === 404) {
    errorMessage = "페이지를 찾을 수 없습니다.";
  } else if (error.status === 500) {
    errorMessage = "서버 오류가 발생했습니다.";
  }

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div id="error-page">
      <h1>이런!</h1>
      <p>{errorMessage}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <button onClick={goBack} className="btn btn-secondary">
          이전 페이지로 돌아가기
        </button>
      </p>
    </div>
  );
}
