import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const MyPoint = async () => {
  const session = await getServerSession(options);
  const point = 1000;

  return (
    <section className="pt-[24px] pb-[80px] relative overflow-hidden">
      <div className="px-[16px]">
        <Link href="/">
          <span className="text-[24px] text-[#22222]">
            {session?.user.userName} 님
          </span>
        </Link>

        <Link className="mt-[8px]" href="/">
          <div>
            <span className="text-[20px]">SSG에서 이번 달</span>
          </div>
          <div>
            <span className="text-[20px] leading-5">
              <strong>{point.toLocaleString()}포인트 혜택</strong>을 받았어요
            </span>
          </div>
        </Link>

        <div className="flex justify-between gap-2 relative mt-[12px]">
          {/* 쿠폰 */}
          <div className="basis-1.5/5 flex flex-col items-center h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link href="/">
              <span className="text-[14px]">쿠폰</span>
              <div>
                <strong className="text-[18px]">0</strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">장</span>
              </div>
            </Link>

            <div className="mt-[15px] bg-[#222222] text-[#fff] text-[12px] px-[12px] h-[20px] rounded-[3px] box-border text-center">
              쿠폰함
            </div>
          </div>
          {/* SSG MONEY */}
          <div className="basis-2/5 flex flex-col items-center  h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link className="flex flex-col items-center" href="/">
              <span className="text-[14px]">SSG MONEY</span>
              <div>
                <strong className="text-[18px]">0</strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">원</span>
              </div>
            </Link>
          </div>

          {/* 신세계포인트 */}
          <div className="basis-1.5/5 flex flex-col items-center h-[114px] border border-[#cfcfcf] rounded-[10px] bg-white p-[16px]">
            <Link className="flex flex-col items-center" href="/">
              <span className="text-[14px]">신세계포인트</span>
              <div>
                <strong className="text-[18px]">
                  {point.toLocaleString()}
                </strong>
                <span className="text-[13px] ml-[3px] mt-[-2px]">point</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <span className="top-border" />
    </section>
  );
};

export default MyPoint;
