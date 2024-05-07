import Image from "next/image";

export default function Home() {
  return (
<div className="p-0 flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full h-screen">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full top-0 left-0 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(0,100,0)_58%)]" />
          {/*<div className="absolute w-[430px] h-[932px] top-0 left-0 [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(0,100,0)_58%)]" >*/}
          <img
            className="absolute w-full h-full top-0 left-0 object-cover"
            alt="Brooke lark"
            src="/img/sp1.png"
          />
          <div className="absolute w-[418px] h-[644px] top-[180px] left-[29px]">
            <div className="relative w-[422px] h-[644px]">
              <p className="absolute w-[418px] top-0 left-0 [font-family:'Poppins-Bold',Helvetica] font-bold text-transparent text-[36px] tracking-[0] leading-[46.1px]">
                <span className="text-[#111719]">
                  Bienvenue sur
                  <br />
                </span>
                <span className="text-[#f09f36]">Geeru.bj</span>
              </p>
              <div className="absolute w-[324px] h-[28px] top-[616px] left-[28px] opacity-[0.87]" />
            </div>
          </div>
          <div className="absolute w-[57px] h-[32px] top-[40px] left-[342px]">
            <div className="relative w-[55px] h-[32px] bg-[#006400] rounded-[27.41px] shadow-[17.87px_17.87px_35.75px_#d3d1d840]">
              <div className="absolute w-[27px] top-[7px] font-bold left-[16px] [font-family:'Poppins-Regular',Helvetica] text-white text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                Skip
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
