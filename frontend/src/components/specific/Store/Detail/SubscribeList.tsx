import SubscribeInfo from "./SubscribeInfo";
import { useGetStoreSubscribe } from "../../../../queries/queries";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

const SubscribeList = () => {
  const { id } = useParams();
  const subscribes = useGetStoreSubscribe(Number(id));
  const PackageSkeleton = () => {
    return (
      <div className="space-y-4 my-5 w-full">
        <div className="border rounded-lg shadow-sm p-4">
          <Skeleton variant="text" width="30%" height={30} />
          <Skeleton variant="text" width="90%" height={20} />
          <Skeleton variant="text" width="85%" height={20} />
          <Skeleton variant="text" width="70%" height={20} />
        </div>
        <div className="border rounded-lg shadow-sm p-4">
          <Skeleton variant="text" width="30%" height={30} />
          <Skeleton variant="text" width="90%" height={20} />
          <Skeleton variant="text" width="85%" height={20} />
          <Skeleton variant="text" width="70%" height={20} />
        </div>
      </div>
    );
  };

  if (!subscribes) {
    return <PackageSkeleton />;
  }

  if (subscribes.length === 0) {
    return (
      <div className="flex flex-col gap-y-5 min-h-80 mt-5 w-11/12 justify-center items-center">
        <p className="text-lg font-bold">구독 상품이 존재하지 않습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-y-5 min-h-80 mx-auto mt-5 w-full">
      {subscribes.map((sub) => (
        <SubscribeInfo sub={sub} key={`sub-${sub.subscribeName}`} />
      ))}
    </div>
  );
};

export default SubscribeList;
