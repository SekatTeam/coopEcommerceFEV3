import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react";
import { LiaHomeSolid } from "react-icons/lia";
export const Breadcrumbs = () => {
  return (
    <Breadcrumb className='bg-[#F2F4F5] w-full p-4'>
      <BreadcrumbItem>
        <BreadcrumbLink href="/"
          className="flex items-center justify-center px-4 md:px-20"
        >
          <LiaHomeSolid />
          <span className="text-orange-main text-sm">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* Add more BreadcrumbItem as needed */}
    </Breadcrumb>
  );
};
