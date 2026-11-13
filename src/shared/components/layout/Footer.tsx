export default function Footer() {
  return (
    <div
      data-testid="layout-footer__bg-container"
      className="relative w-full h-[150px] z-0"
    >
      <div
        data-testid="layout-footer__bg-image"
        className="absolute left-0 bottom-0 w-full h-[150px] bg-[url('/images/bg/dark_brown.jpg')] bg-no-repeat bg-cover bg-center z-20"
      ></div>
      <div
        data-testid="layout-menu__decor"
        className="absolute bottom-0 left-0 z-30 w-full flex flex-row justify-between items-center"
      >
        <img
          data-testid="layout-menu__decor-corner-left"
          src="/images/decor/fleur_de_lis.png"
          alt="Medieval Corner Decor Pattern"
          width="50"
          height="50"
          className="rotate-[45deg]"
        />
        <img
          data-testid="layout-menu__decor-corner-right"
          src="/images/decor/fleur_de_lis.png"
          alt="Medieval Corner Decor Pattern"
          width="50"
          height="50"
          className="rotate-[-45deg]"
        />
      </div>
    </div>
  );
}
