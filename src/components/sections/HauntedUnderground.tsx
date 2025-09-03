import Image from "next/image";

const HauntedUnderground = () => {
  return (
    <div className="relative bg-gray-900 text-white pt-24 md:pt-32 lg:pt-48 overflow-hidden">
      {/* 
        This component uses custom animations: `float`, `sway`, `ray-pan`.
        These should be defined in `tailwind.config.js` like this:
        
        theme: {
          extend: {
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              },
              sway: {
                '0%, 100%': { transform: 'rotate(-5deg)' },
                '50%': { transform: 'rotate(5deg)' },
              },
              'ray-pan': {
                '0%, 100%': { transform: 'rotate(-10deg) translateX(-15%)' },
                '50%': { transform: 'rotate(10deg) translateX(15%)' },
              }
            },
            animation: {
              float: 'float 6s ease-in-out infinite',
              sway: 'sway 10s ease-in-out infinite',
              'ray-pan': 'ray-pan 20s ease-in-out infinite',
            }
          }
        }
      */}

      {/* Spooky fog wisps */}
      <div className="absolute -top-12 left-[-15%] w-[626px] h-[494px] opacity-20 animate-[ray-pan_20s_linear_infinite]">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute -top-16 right-[5%] w-[345px] h-[529px] opacity-15 animate-[ray-pan_25s_linear_infinite_reverse]">
        <div className="w-full h-full bg-gradient-to-bl from-green-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 right-[-10%] w-[266px] h-[570px] opacity-20 animate-[ray-pan_18s_linear_infinite]">
        <div className="w-full h-full bg-gradient-to-b from-orange-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute -top-24 left-[20%] w-[386px] h-[482px] opacity-15 animate-[ray-pan_22s_linear_infinite]">
        <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-12 px-8 py-16 md:flex-row md:py-24 lg:gap-24">
        {/* Image Content */}
        <div className="relative flex w-full justify-center md:w-1/2">
          <div className="relative h-[375px] w-[304px]">
            {/* Spooky character - Ghost with wizard hat */}
            <div className="animate-[float_6s_ease-in-out_infinite]">
              <div className="relative w-full h-full">
                {/* Ghost body */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-white/90 rounded-t-full">
                  <div className="absolute bottom-0 w-full h-12" 
                       style={{clipPath: 'polygon(0% 0%, 10% 100%, 20% 0%, 30% 100%, 40% 0%, 50% 100%, 60% 0%, 70% 100%, 80% 0%, 90% 100%, 100% 0%)'}}></div>
                  {/* Face */}
                  <div className="absolute top-[30%] left-[30%] w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-[30%] right-[30%] w-3 h-3 bg-black rounded-full"></div>
                  <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 w-2 h-6 bg-black rounded-full"></div>
                </div>
                
                {/* Wizard hat */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[60px] border-transparent border-b-purple-700"></div>
                  <div className="absolute top-[45px] left-1/2 transform -translate-x-1/2 w-12 h-2 bg-purple-700 rounded-full"></div>
                  {/* Stars on hat */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-yellow-400 text-sm">✦</div>
                  <div className="absolute top-6 left-3 text-yellow-400 text-xs">✦</div>
                  <div className="absolute top-8 right-2 text-yellow-400 text-xs">✦</div>
                </div>
              </div>
            </div>
            
            {/* Floating Halloween elements */}
            <div className="absolute inset-0">
              {/* Pumpkins */}
              <div className="absolute -top-8 -left-12 h-[40px] w-[40px] animate-[float_7s_ease-in-out_infinite_1s]">
                <div className="w-full h-full bg-orange-500 rounded-full relative">
                  <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-black rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute top-16 -left-20 h-[30px] w-[30px] animate-[float_8s_ease-in-out_infinite]">
                <div className="w-full h-full bg-purple-600 rounded-full relative">
                  <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -top-16 left-1/4 h-[35px] w-[35px] animate-[float_5s_ease-in-out_infinite_0.5s]">
                <div className="w-full h-full">
                  <div className="text-orange-400 text-2xl">🎃</div>
                </div>
              </div>
              
              <div className="absolute top-24 -left-8 h-[25px] w-[25px] animate-[float_9s_ease-in-out_infinite]">
                <div className="w-full h-full">
                  <div className="text-purple-400 text-xl">🦇</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="flex w-full flex-col gap-5 text-center md:w-1/2 md:text-left lg:w-5/12">
          <h2 className="text-4xl font-bold text-orange-400 lg:text-5xl">
            conjure solutions for
          </h2>
          <h2 className="text-4xl font-bold text-purple-400 lg:text-5xl">
            social good
          </h2>
          <p className="text-lg text-white/90">
            Spookathon challenges its participants to brew up tech solutions for social
            good, creating a magical opportunity to explore the intersection
            between technology and society.
          </p>
          <p className="text-lg text-white/90">
            Creators from all backgrounds are welcome at Spookathon — no coding
            spells or previous haunting experience required.
          </p>
        </div>
      </div>

      {/* Bottom scenery */}
      <div className="absolute bottom-0 left-0 -z-0 h-[250px] w-full md:h-[400px]">
        {/* Desktop views */}
        <img
          src="https://hackdavis.io/images/faq/underwater_dark.svg"
          alt="underwater dark layer"
          className="absolute bottom-0 left-0 hidden w-full md:block"
        />
        <img
          src="https://hackdavis.io/images/faq/underwater_medium.svg"
          alt="underwater medium layer"
          className="absolute bottom-0 left-0 hidden w-full md:block"
        />
        {/* Mobile views */}
        <img
          src="https://hackdavis.io/images/faq/underwater_dark_mobile.svg"
          alt="underwater dark layer mobile"
          className="absolute bottom-0 left-0 w-full md:hidden"
        />
        <img
          src="https://hackdavis.io/images/faq/underwater_medium_mobile.svg"
          alt="underwater medium layer mobile"
          className="absolute bottom-0 left-0 w-full md:hidden"
        />

        <div className="absolute -bottom-2 right-[10%] h-32 w-20 opacity-80 animate-[sway_10s_ease-in-out_infinite] md:h-48 md:w-28">
          <Image
            src="https://hackdavis.io/images/faq/algae_right.svg"
            alt="underwater vegetation"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="absolute -bottom-2 left-[15%] h-24 w-16 opacity-80 animate-[sway_12s_ease-in-out_infinite_reverse] md:h-40 md:w-24">
          <Image
            src="https://hackdavis.io/images/faq/algae_left.svg"
            alt="underwater vegetation"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="absolute -bottom-1 left-[5%] h-20 w-12 opacity-60 animate-[sway_8s_ease-in-out_infinite_1s] md:h-28 md:w-20">
          <Image
            src="https://hackdavis.io/images/faq/algae_left.svg"
            alt="underwater vegetation"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HauntedUnderground;
