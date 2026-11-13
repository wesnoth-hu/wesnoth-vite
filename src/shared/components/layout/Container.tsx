export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-testid="layout-container__bg"
      className="w-full h-screen min-h-[1200px] flex justify-center items-start bg-[url('/images/bg/tart_hatter_crop.png')] bg-repeat-y bg-size-[auto_auto] bg-center min-2xl:max-4xl:bg-size-[100%_auto] "
    >
      <div
        data-testid="layout-container__bg-inner"
        className="w-full max-w-[1700px] h-screen min-h-[1200px] min-md:max-lg:px-15 min-lg:max-xl:px-20 min-xl:max-4xl:px-25 min-md:max-4xl:py-5 flex flex-col items-center bg-[url('/images/bg/parchment_vecteezy.png')] bg-no-repeat bg-size-[auto_120%] bg-center min-md:max-4xl:bg-size-[110%_120%]"
      >
        {children}
      </div>
    </div>
  );
}
