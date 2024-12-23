import MenuSelect from "./MenuSelect";
import { useGetStoreDetail } from "../../../../queries/queries";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

interface StoreInfo {
  storeId: number;
  name: string;
  description: string;
  img: string;
}

const StoreInfo = () => {
  const { id } = useParams();
  const info = useGetStoreDetail(Number(id));

  //Skeleton UI
  const SkeletonUI = () => {
    return (
      <Box className="grid grid-cols-2 h-[400px] gap-x-20 mb-16">
        <Skeleton variant="rectangular" height={400} width={400} />
        <Box className="flex flex-col gap-y-3">
          <Skeleton variant="text" width="50%" height={40} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Box className="flex items-center">
            <Skeleton variant="text" width="20%" height={40} sx={{ py: 3 }} />
            <Skeleton
              variant="rectangular"
              width="60%"
              height={40}
              sx={{ ml: 2 }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  if (!info) {
    return <SkeletonUI />;
  }

  const HelmetContent = () => {
    return (
      <Helmet>
        <title>소상한 구독 | {info.name}</title>
        <meta name="description" content={info.description} />
        <meta property="og:title" content={info.name} />
        <meta property="og:description" content={info.description} />
        <meta property="og:image" content={info.img} />
        <meta property="og:url" content={`https://www.sogoo.kr/store/${id}`} />
        <meta
          name="keywords"
          content="반찬, 가게, 신선한 반찬, 반찬 구독 서비스"
        />
      </Helmet>
    );
  };

  return (
    <div className="grid grid-cols-2 h-[400px] gap-x-20 mb-16">
      <HelmetContent />
      <img
        src={info.img}
        className="inline-block h-[400px] w-full my-auto object-cover"
      />
      <div className="flex flex-col gap-y-3 py-4">
        <p className="text-2xl font-bold">{info.name}</p>
        <p className="text-slate-500 text-base">{info.description}</p>
        <div className="flex">
          <p className="basis-1/6 py-3">상품 선택</p>
          <MenuSelect storeImg={info.img} storeName={info.name} />
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
