import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pages = () => {
  return (
    <Pagination className="flex justify-end">
      <PaginationContent className="md:gap-2 gap-[3px]">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-blue text-white hover:bg-blue-2 hover:text-white w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white border border-[#DCDCDC] w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="bg-white border border-[#DCDCDC] w-[24px] h-[22px] mt-1 md:mt-0 md:h-9 md:w-9 text-[8px] md:text-sm" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white border border-[#DCDCDC] w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm"
          >
            9
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-white border border-[#DCDCDC] w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm"
          >
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default Pages;
