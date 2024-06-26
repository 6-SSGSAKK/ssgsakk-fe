import HeartIcon from "@/components/UI/HeartIcon";
import { Suspense } from "react";

interface Props {
    changeMode: (mode: string) => void;
    productSeq: number;
}

const BottomPurchaseMain = ({ changeMode, productSeq }: Props) => {
    return (
        <div className="w-full h-[52px] fixed left-0 right-0 bottom-0 bg-white flex font-Pretendard ">
            <button
                // onClick={() => handler()}
                className="w-[54px] h-[52px] border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center"
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <HeartIcon height={24} width={24} productSeq={productSeq} />
                </Suspense>
            </button>

            <button
                onClick={() => changeMode("gift")}
                className="w-[110px] h-[52px] border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center"
            >
                <div className=" w-[18px] h-[19px] mr-[4px] bg-product-icon bg-[position:-456px_-63px] bg-[size:524px_479px] align-middle" />
                <span className="text-[17px] ">선물하기</span>
            </button>

            <button
                onClick={() => changeMode("purchase")}
                className="flex-grow h-[52px] bg-primary-red border-t-[1px] border-t-[#c0c0c0] border-r-[1px] border-r-[#c0c0c0] flex justify-center items-center"
            >
                <span className="text-[17px] text-[#fff]">구매하기</span>
            </button>
        </div>
    );
};

export default BottomPurchaseMain;
