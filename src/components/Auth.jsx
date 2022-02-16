function Auth() {
  return (
    <div style={{ background: "white", height: "1000px", paddingTop: "250px" }}>
      <a href="/cabinet">
        <button>Пользователь</button>
      </a>
      <a href="/cabinetraider">
        <button>Трейдер</button>
      </a>
      <a href="/cabinetadmin/alllots">
        <button>Администратор</button>
      </a>
    </div>
  );
}

export default Auth;
