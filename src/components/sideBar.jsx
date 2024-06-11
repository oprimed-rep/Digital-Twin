import side from "../assets/side.png";
import down from "../assets/down.png";
import { useState } from "react";

const Sidebar = () => {
  const [left1, setLeft1] = useState("");
  const [left2, setLeft2] = useState("");
  const [left3, setLeft3] = useState("");
  const [left4, setLeft4] = useState("");
  const [left5, setLeft5] = useState("");
  const [left6, setLeft6] = useState("");
  const [left7, setLeft7] = useState("");
  const [left8, setLeft8] = useState("");
  const [left9, setLeft9] = useState("");
  const [left10, setLeft10] = useState("");
  const [left11, setLeft11] = useState("");
  const [left12, setLeftt12] = useState("");

  return (
    <div className="w-[552px] h-full overflow-y-auto">
      <div className="w-[469ox] h-[256px] flex relative mb-[33px]">
        <div className="bg-[#00FFC2] w-[12px] h-full"></div>
        <div className="bg-[#5E35F5] w-[457px] h-full rounded-tr-[16px] rounded-br-[16px]"></div>
        <img
          src={side}
          className="cursor-pointer absolute bottom-0"
          alt="icon"
        />
      </div>
      <div className="flex flex-col pl-[54px]">
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Age ( years )</div>
            <div className="text-[25px]">Sex</div>
            <div className="text-[25px]">ApoE e4 count</div>
          </div>
          <div className="w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
            <input
              className="flex w-[133px] min-h-[46px] items-center justify-center text-center bg-[#80769a] group-hover:bg-[#9a94ae] outline-none"
              value={getValue("a", index2)}
              onChange={(e) => {
                handleChange(e, "a", index2);
              }}
              maxLength={1}
            ></input>
            <div className="text-[25px]">Male</div>
            <div className="text-[25px]">1</div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Diagnosis</div>
            <div className="text-[25px]">Weight</div>
            <div className="text-[25px]">Height</div>
          </div>
          <div className="w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
            <div className="text-[25px]">AD</div>
            <div className="text-[25px]">70.2 kg</div>
            <div className="text-[25px]">170cm</div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">Amyloid Status</div>
            <div className="text-[25px]">CSF Total tau</div>
            <div className="text-[25px]">CSF p-tau181</div>
          </div>
          <div className="w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
            <div className="text-[25px]">-</div>
            <div className="text-[25px]">-</div>
            <div className="text-[25px]">-</div>
          </div>
        </div>
        <div className="flex gap-[19px] pb-[38px]">
          <div className="border-t-[4px] border-solid border-white w-[306px] pt-[7px] leading-[1.4]">
            <div className="text-[25px]">History of Hypertension</div>
            <div className="text-[25px]">History of Type ll Diabetes</div>
          </div>
          <div className="w-[90px] border-t-[4px] border-solid border-white pt-[7px] leading-[1.4] font-bold">
            <div className="text-[25px]">No</div>
            <div className="text-[25px]">No</div>
          </div>
        </div>
      </div>
      <div className="pl-[54px] text-[30px] font-bold mb-[130px]">
        <div className="flex gap-[15px] mb-[30px]">
          <div className="px-[25px] h-[60px] bg-[#5825F5] text-white flex items-center justify-center rounded-[50px]">
            Male
          </div>
          <div className="px-[25px] h-[60px] bg-white text-[#681BFF] flex items-center justify-center rounded-[50px]">
            White
          </div>
        </div>
        <div className="px-[25px] w-fit h-[60px] bg-[#00FFC2] text-[#681BFF] rounded-[50px] flex items-center justify-center">
          Alzheimer
        </div>
      </div>
      <div className="pl-[54px] cursor-pointer mb-[50px]">
        <img
          src={down}
          className="cursor-pointer w-[85px] h-[85px]s"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
