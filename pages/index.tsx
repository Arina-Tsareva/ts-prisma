import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Добро пожаловать в приложение с аутентификацией!</h1>

      {!session ? (
        <div>
          <p>Войдите с помощью одного из провайдеров:</p>
          <button onClick={() => signIn("google")} style={{ margin: "10px" }}>
            Войти через Google
          </button>
          <button onClick={() => signIn("github")} style={{ margin: "10px" }}>
            Войти через GitHub
          </button>
        </div>
      ) : (
        <div>
          <h2>Привет, {session.user?.name || "Пользователь"}!</h2>
          <img
            src={session.user?.image || "/default-avatar.png"}
            alt="Avatar"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <p>Вы вошли как {session.user?.email}</p>
          <button onClick={() => signOut()} style={{ margin: "10px" }}>
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
