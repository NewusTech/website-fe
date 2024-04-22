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
      <PaginationContent className="gap-2">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-blue text-white hover:bg-blue-2 hover:text-white"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#DCDCDC]">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="bg-white border border-[#DCDCDC]" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#DCDCDC]">
            9
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="bg-white border border-[#DCDCDC]">
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
