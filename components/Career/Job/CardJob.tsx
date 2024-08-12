import { formatRupiah, removeHTMLTags } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardJob = ({ id, title, description, salary, status }: any) => {
  return (
    <div
      className="flex p-5 xl:p-10 2xl:p-[30px] border border-[#4F4F4F] rounded-[10px]"
      style={{ boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="flex-1 flex flex-col gap-3 md:gap-6">
        <h1 className="font-bold text-[14px] md:text-[16px] hidden md:block">
          {title}
        </h1>
        <div className="flex md:hidden justify-between items-center">
          <h1 className="font-bold text-[14px] md:text-[16px]">{title}</h1>
          <div className="w-[50%] flex justify-end gap-3">
            <Link
              href={`/career/${id}`}
              className="bg-[#480DEC] text-white rounded-lg md:rounded-[10px] inline-flex px-4 py-2 md:px-6 md:py-3 items-center justify-center gap-1 md:gap-3 text-[12px] md:text-[14px] hover:bg-[#7b4bff]"
            >
              Apply Now
              <Image
                src="/assets/icons/arrow-up-right.svg"
                alt="Icon arrow up right"
                width={19}
                height={19}
                className=""
              />
            </Link>
          </div>
        </div>
        <div
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="text-[12px] md:text-webSubjudul font-semibold">
          {salary}
        </p>
        <div className="flex justify-start items-center gap-4">
          <div className="capitalize flex items-center justify-center py-2 px-5 bg-[#D9D9D9] rounded-[10px] gap-[10px] text-[12px] md:text-sm">
            {status}
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Link
          href={`/${id}`}
          className="bg-[#480DEC] text-white rounded-[10px] px-6 py-3 flex items-center gap-3 md:text-[16px] hover:bg-[#7b4bff]"
        >
          Apply Now
          <Image
            src="/assets/icons/arrow-up-right.svg"
            alt="Icon arrow up right"
            width={19}
            height={19}
            className=""
          />
        </Link>
      </div>
    </div>
  );
};

export default CardJob;
