import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react";
import { LiaHomeSolid } from "react-icons/lia";
export const Breadcrumbs = () => {
  return (
    <Breadcrumb className='bg-[#F2F4F5] w-full p-4'>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" display="flex" alignItems="center" justifyContent="center" gap={2} px="20">
          <LiaHomeSolid />
          <span className="text-orange-main text-sm">Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      {/* Add more BreadcrumbItem as needed */}
    </Breadcrumb>
  );
};
