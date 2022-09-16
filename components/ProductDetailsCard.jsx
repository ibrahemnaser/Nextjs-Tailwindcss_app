import React from "react";

const ProductDetailsCard = ({ type }) => {
  const priceData = [
    { title: "Full Price" },
    { title: "Installment", selected: true },
  ];
  const memoryData = [
    { size: "128GB", price: 999.0, selected: true },
    { size: "256GB", price: 999.0, selected: false },
    { size: "512GB", price: 999.0, selected: false },
    { size: "1TB", price: 999.0, selected: false },
  ];
  const colorData = [
    { name: "Silver", bgColor: "#EDEDED", selected: false },
    { name: "Sierra Blue", bgColor: "#90BAD1", selected: true },
  ];

  const insuranceData = [
    { year: 1, price: 99.0, selected: false },
    { year: 2, price: 159.0, selected: true },
  ];

  return (
    <>
      {type === "price" &&
        priceData.map((ele, indx) => {
          return (
            <div key={indx} className="details-card">
              <span
                className={`text-[11px] ${
                  ele.selected ? "text-black" : "text-[#C3C3C3]"
                }  font-[600]`}
              >
                {ele.title}
              </span>
            </div>
          );
        })}
      {type === "bank" && (
        <div className="details-card">
          <img src="../assets/CIB.png" alt="cib logo" />
        </div>
      )}
      {type === "memory" &&
        memoryData.map((ele, indx) => {
          return (
            <div
              key={indx}
              className={`details-card flex flex-col ${
                ele.selected ? "border-black text-black" : "text-[#AAAAAA]"
              }`}
            >
              <span className="text-[10px]  font-bold">{ele.size}</span>
              <span className="text-xs">&#36;{ele.price}</span>
            </div>
          );
        })}
      {type === "color" &&
        colorData.map((ele, indx) => {
          return (
            <div
              key={indx}
              className={`details-card flex flex-col p-0 ${
                ele.selected ? "border-black" : ""
              }`}
            >
              <span
                className={`text-[10px] font-bold ${
                  ele.selected ? "text-black" : "text-[#AAAAAA]"
                }`}
              >
                {ele.name}
              </span>
              <span
                className={`block w-6 h-6 border border-[#707070] rounded-full bg-[${ele.bgColor}]`}
              />
            </div>
          );
        })}
      {type === "insurance" &&
        insuranceData.map((ele, indx) => {
          return (
            <div
              key={indx}
              className={`details-card flex flex-col ${
                ele.selected ? "border-black" : ""
              } `}
            >
              <span className="text-[10px]  font-bold">{ele.year} year</span>
              <span className="text-xs">&#36;{ele.price}</span>
            </div>
          );
        })}
    </>
  );
};

export default ProductDetailsCard;
