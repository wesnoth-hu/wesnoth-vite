export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-testid="layout-container__bg"
      className="w-full max-w-[7680px] h-screen min-h-[1800px] flex justify-center items-start bg-[url('/images/bg/tart_hatter_crop.png')] bg-repeat-y bg-size-[auto_auto] bg-center min-2xl:max-10xl:bg-size-[100%_auto] 10xl:bg-repeat z-0"
    >
      <div
        data-testid="layout-container__bg-inner"
        className="w-full max-w-[7680px] h-screen min-h-[1800px] min-md:max-lg:px-15 min-lg:max-xl:px-20 min-xl:max-4xl:px-30 min-4xl:max-7xl:px-50 7xl:px-50 8xl:px-75 9xl:px-100 10xl:px-640 min-md:max-10xl:py-5 flex flex-col items-center bg-[url('/images/bg/parchment_vecteezy.png')] bg-no-repeat bg-size-[auto_120%] bg-center min-md:max-10xl:bg-size-[120%_120%] z-10"
      >
        {children}
      </div>
    </div>
  );
}
