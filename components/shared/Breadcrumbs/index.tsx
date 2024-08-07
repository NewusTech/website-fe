import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumbs = ({ paths }: any) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-[12px] md:text-sm">
        {paths.map((path: any, index: any) => (
          <React.Fragment key={index}>
            {index < paths.length - 1 ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={path.href} className="text-gray-2 font-bold">
                    {path.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              </>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage className="hidden xl:block text-gray-4 font-medium">
                  {path.label}
                </BreadcrumbPage>
                <BreadcrumbPage className="block xl:hidden text-gray-4 font-medium">
                  {truncateLabel(path.label)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;

const truncateLabel = (label: any) => {
  const words = label.split(' ');
  if (words.length > 3) {
    return words.slice(0, 3).join(' ') + '...';
  }
  return label;
}