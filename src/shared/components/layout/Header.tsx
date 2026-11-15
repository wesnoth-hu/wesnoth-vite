import Menu from "./Menu";

export default function Header() {
  return (
    <div
      data-testid="layout-header__bg"
      className="relative w-full h-[385px] bg-[url('/images/bg/spring_fall_season.jpg')] bg-no-repeat bg-cover bg-center z-0"
    >
      <div
        data-testid="layout-header__logo-container"
        className="absolute top-15 w-full mx-auto h-auto flex flex-row justify-center items-center z-30"
      >
        <img
          data-testid="layout-header__logo-image"
          src="/images/logos/mwesnoth.png"
          alt="Magyar Wesnoth Közösség Logo"
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      <div
        data-testid="layout-menu__bg"
        className="absolute bottom-0 w-full h-[100px] bg-[url('/images/bg/dark_brown.jpg')] bg-no-repeat bg-cover bg-center z-20 shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
      >
        <div
          data-testid="layout-menu__decor"
          className="absolute top-0 left-0 z-30 w-full flex flex-row justify-between items-center"
        >
          <img
            data-testid="layout-menu__decor-corner-left"
            src="/images/decor/fleur_de_lis.png"
            alt="Medieval Corner Decor Pattern"
            width="50"
            height="50"
            className="rotate-[135deg]"
          />
          <img
            data-testid="layout-menu__decor-corner-right"
            src="/images/decor/fleur_de_lis.png"
            alt="Medieval Corner Decor Pattern"
            width="50"
            height="50"
            className="rotate-[-135deg]"
          />
        </div>
        <Menu />
      </div>
    </div>
  );
}
