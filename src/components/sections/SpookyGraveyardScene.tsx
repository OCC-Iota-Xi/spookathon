const SpookyGraveyardScene = () => {
  return (
    <main className="relative -top-px overflow-hidden bg-gray-900 pt-4 sm:pt-0">
      <div className="flex h-auto w-screen flex-col justify-center bg-gradient-to-b from-purple-900 to-gray-900">
        <div className="relative h-[750px] w-full sm:h-[950px] md:h-[900px] lg:h-[950px] xl:h-[1100px] 2xl:h-[1300px]">
          {/* Dark spooky sky background */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-gray-800 to-gray-900"></div>
          
          {/* Fog overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-400/10 to-transparent"></div>
          
          <div className="absolute inset-0 h-full w-full">
            {/* Floating ghost */}
            <div className="absolute left-[15%] top-[45%] z-10 sm:left-[10%] sm:top-[60%] lg:top-[60%] animate-bounce">
              <div className="relative h-[60px] w-[50px] sm:h-[80px] sm:w-[70px] md:h-[90px] md:w-[80px] lg:h-[100px] lg:w-[90px]">
                <div className="w-full h-full bg-white rounded-t-full relative">
                  <div className="absolute bottom-0 w-full h-6 bg-white" 
                       style={{clipPath: 'polygon(0% 0%, 20% 100%, 40% 0%, 60% 100%, 80% 0%, 100% 100%, 100% 0%)'}}></div>
                  <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-1 h-3 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Bat silhouette */}
            <div className="absolute right-[20%] top-[15%] md:right-[45%] md:top-[20%] z-10 animate-pulse">
              <div className="relative h-[40px] w-[80px] md:h-[30px] md:w-[60px] xl:h-[50px] xl:w-[100px]">
                <div className="w-full h-full bg-black relative">
                  <div className="absolute inset-0" 
                       style={{clipPath: 'polygon(50% 70%, 0% 20%, 20% 50%, 35% 30%, 50% 40%, 65% 30%, 80% 50%, 100% 20%)'}}></div>
                </div>
              </div>
            </div>
            
            {/* Tombstone */}
            <div className="absolute left-[60%] top-[55%] z-10">
              <div className="relative hidden h-[80px] w-[50px] md:block md:h-[100px] md:w-[60px] lg:h-[120px] lg:w-[70px]">
                <div className="w-full h-full bg-gray-600 rounded-t-full relative border-2 border-gray-500">
                  <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-xs text-gray-300 font-bold">RIP</div>
                </div>
              </div>
            </div>
            
            {/* Spooky tree silhouette */}
            <div className="absolute right-[5%] top-[25%] z-10">
              <div className="relative h-[120px] w-[80px] md:h-[150px] md:w-[100px]">
                <div className="w-2 h-3/4 bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-6 h-6 bg-black absolute top-[20%] left-[30%] rounded-full"></div>
                <div className="w-4 h-4 bg-black absolute top-[10%] right-[25%] rounded-full"></div>
                <div className="w-5 h-5 bg-black absolute top-[35%] right-[15%] rounded-full"></div>
                <div className="w-3 h-3 bg-black absolute top-[45%] left-[15%] rounded-full"></div>
              </div>
            </div>
            
            {/* Glowing eyes in bushes */}
            <div className="absolute left-[5%] top-[70%] z-10">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Ground/graveyard mist */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-500/20 to-transparent z-5"></div>
          
          <div className="absolute inset-0 z-10 flex w-full">
            <div className="mt-20 flex h-fit w-full flex-wrap justify-between gap-4 p-[10%] pt-[15%] sm:mt-10 sm:gap-0 md:flex-row md:p-[10%]">
              <div className="w-full sm:w-3/4 sm:p-10 sm:pr-0 md:w-3/5 lg:w-2/3 xl:w-1/2">
                <div className="flex w-full max-w-[900px] flex-col items-start justify-center text-white">
                  <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-orange-400">
                    Spookathon
                  </h1>
                  <p className="text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl text-gray-200">
                    is one of the
                    <strong className="font-bold text-purple-300"> largest collegiate hackathons </strong>
                    in California, where over 900 students, creators, and
                    leaders come together to
                    <strong className="font-bold text-orange-300"> create for social good</strong>.
                  </p>
                </div>
              </div>
              <div className="flex w-full items-end justify-end sm:items-center sm:justify-center md:w-1/3">
                <div className="relative mt-8 flex h-full w-2/3 justify-center sm:w-full md:-mt-10 md:justify-end">
                  {/* Haunted castle */}
                  <div className="relative h-[150px] w-[185px] sm:h-[200px] sm:w-[245px] md:h-[245px] md:w-[301px]">
                    <div className="w-full h-full bg-gray-800 relative">
                      {/* Main castle structure */}
                      <div className="absolute bottom-0 w-full h-3/4 bg-gray-800 border-t-4 border-gray-600"></div>
                      {/* Tower */}
                      <div className="absolute bottom-3/4 left-1/2 transform -translate-x-1/2 w-1/3 h-1/2 bg-gray-700"></div>
                      {/* Roof */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-transparent border-b-gray-600"></div>
                      {/* Windows */}
                      <div className="absolute bottom-[40%] left-[20%] w-3 h-4 bg-yellow-400"></div>
                      <div className="absolute bottom-[40%] right-[20%] w-3 h-4 bg-yellow-400"></div>
                    </div>
                  </div>
                  
                  {/* Giant pumpkin */}
                  <div className="relative -ml-10 h-[200px] w-[200px] sm:-ml-12 sm:h-[270px] sm:w-[270px] md:-ml-16 md:h-[335px] md:w-[330px]">
                    <div className="w-full h-full bg-orange-500 rounded-full relative border-4 border-orange-600">
                      {/* Pumpkin ridges */}
                      <div className="absolute inset-y-2 left-[20%] w-1 bg-orange-600"></div>
                      <div className="absolute inset-y-2 left-[40%] w-1 bg-orange-600"></div>
                      <div className="absolute inset-y-2 left-[60%] w-1 bg-orange-600"></div>
                      <div className="absolute inset-y-2 left-[80%] w-1 bg-orange-600"></div>
                      
                      {/* Jack-o'-lantern face */}
                      <div className="absolute top-[25%] left-[25%] w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-black"></div>
                      <div className="absolute top-[25%] right-[25%] w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-black"></div>
                      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-12 h-6 bg-black rounded-full"></div>
                      
                      {/* Pumpkin stem */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpookyGraveyardScene;
