import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pages = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void; }) => {
  const handlePageChange = (event: React.MouseEvent<HTMLAnchorElement>, page: number) => {
    event.preventDefault();
    onPageChange(page);
  };

  return (
    <Pagination className="flex justify-end">
      <PaginationContent className="md:gap-2 gap-[3px]">
        <PaginationItem>
          {currentPage > 1 ? (
            <PaginationPrevious
              href="#"
              onClick={(e) => handlePageChange(e, currentPage - 1)}
            />
          ) : (
            <span className="w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm" />
          )}
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              className={`w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm ${currentPage === index + 1 ? 'bg-blue text-white' : 'bg-white border border-[#DCDCDC]'}`}
              onClick={(e) => handlePageChange(e, index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {currentPage < totalPages ? (
            <PaginationNext
              href="#"
              onClick={(e) => handlePageChange(e, currentPage + 1)}
            />
          ) : (
            <span className="w-[24px] h-[23px] md:h-9 md:w-9 text-[8px] md:text-sm" />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pages;
