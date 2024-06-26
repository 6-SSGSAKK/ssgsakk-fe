import Link from "next/link";
import WritableReviewSummary from "@/components/pages/mypage/review/WritableReviewSummary";
import { useGetServerToken } from "@/actions/useGetServerToken";

//작성가능한 리뷰 리스트 가져오기
const GetWriteableReviewList = async () => {
  const token = await useGetServerToken();
  if (!token) return;
  const res = await fetch(`${process.env.BASE_URL}/reviews/writable`, {
    headers: {
      Authorization: token,
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (res.ok) {
    return data.result.slice(0, 3);
  }
  if (!res.ok) {
    throw new Error("network error");
  }
};

const MyReviewSummary = async () => {
  const reviewList = await GetWriteableReviewList();

  return (
    <div className="px-[16px] pb-[50px]">
      <div className="flex items-center justify-between">
        <strong className="text-[18px] mr-[5px]">상품 리뷰 작성</strong>
      </div>

      <p className="mt-[10px] text-[13px] text-[#777777] leading-5">
        믿고 사는 즐거움을 리뷰로 남겨주세요!
        <br />
        다른 고객들에게 많은 도움이 됩니다.
        <br />
        리뷰 작성 시, 스페셜 리뷰 <strong>1,000</strong>원, 한달 사용 리뷰는
        <strong> 300</strong>원, 쓱찬스/일반 리뷰는 <strong>50</strong>원의
        <strong> SSG MONEY</strong>가 지급됩니다.
      </p>

      <div className="mt-[16px] h-[45px] px-[16px] rounded-[10px] border-[2px] border-[#f5f5f5] flex items-center justify-between text-[13px]">
        <strong className="basis-2/3 text-[#222222]">
          지금 작성가능한 리뷰
        </strong>

        <div className="basis-1/3 flex items-center">
          <Link
            href={"/mypage/reviewList/writable"}
            className="w-full flex justify-end items-center "
          >
            <span className="text-[#777777] text-[12px] mr-[3px]">일반</span>
            <strong className="text-[#cfcfcf]">{reviewList.length}</strong>
          </Link>
        </div>
      </div>

      <WritableReviewSummary reviewList={reviewList} />
    </div>
  );
};

export default MyReviewSummary;
