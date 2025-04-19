export const HomePage = () => {
  return (
    <>
      <h1>Bem vindo, {localStorage.getItem("username")}</h1>
      {localStorage.getItem("role") === "admin" && (
				<a href="https://www.youtube.com/watch?v=xWWbdkSgd2w&pp=ygUTY2FicmEgZ3JpdGFuZG8gbWVtZQ%3D%3D">
					<button>Fazer ação perigosa</button>
				</a>
      )}
    </>
  );
};
