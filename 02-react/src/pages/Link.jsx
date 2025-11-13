export function Link({ href, children, ...restOfProps }) {

    // para no recargra la pagina usamos el pushstate
    const handleClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    }
  return (
    <a href={href} {...restOfProps} onClick={handleClick}>
      {children}
    </a>
  );
}
