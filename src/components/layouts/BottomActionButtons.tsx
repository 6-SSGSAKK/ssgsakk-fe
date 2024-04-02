"use client";
import React, { useState } from "react";
import BottomPurchaseMain from "@/components/pages/products/purchase/BottomPurchaseMain";
import BottomPurchaseSwitcher from "@/components/pages/products/purchase/BottomPurchaseSwitcher";

type Props = {
  productId: number;
  productPrice: number;
  discountPercent: number;
};

const BottomActionButtons = ({
  productId,
  productPrice,
  discountPercent,
}: Props) => {
  const [bottomMode, setBottomMode] = useState<string>("default");
  const onChangeBottomMode = (mode: string) => {
    setBottomMode(mode);
  };

  return (
    <>
      {bottomMode === "default" ? (
        <BottomPurchaseMain changeMode={onChangeBottomMode} />
      ) : (
        <>
          <BottomPurchaseSwitcher
            productId={productId}
            productPrice={productPrice}
            discountPercent={discountPercent}
            changeMode={onChangeBottomMode}
            mode={bottomMode}
          />
          {/* <BottomPurchaseOptionBox
            changeMode={onChangeBottomMode}
            onChangeOrderData={onChangeOrderData}
          /> */}
        </>
      )}
    </>
  );
};

export default BottomActionButtons;
