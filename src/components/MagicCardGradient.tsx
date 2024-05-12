import {
    MagicCard,
    MagicContainer,
  } from "./magicui/magic-card";
  
 function MagicCardGradient({image}:{image:string}) {
    return (
      <MagicContainer
        className={
          "flex h-full w-full flex-col gap-4  lg:flex-row"
        }
      >
        <MagicCard
          borderWidth={3}
          className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
        >
          {/* <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
            Magic
          </p> */}
          {/* <img src={image} alt="" className="w-full"/> */}
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
       
      </MagicContainer>
    );
  }
  
export default MagicCardGradient