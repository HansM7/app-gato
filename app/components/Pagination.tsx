import { useState } from "react";

interface paginationProps {
  data: Array<any>;
  itemsPerPage: number;
  render: (item: any) => JSX.Element;
  gridClass: string;
  dataName: string;
}

const Pagination: React.FC<paginationProps> = ({
  data,
  itemsPerPage,
  render,
  gridClass,
  dataName,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className={`${gridClass}`}>
        {selectedData.length > 0 ? (
          selectedData.map((item: any) => render(item))
        ) : (
          <p>No hay {dataName} disponibles</p>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-1 text-xs md:text-base md:px-4 md:py-2 mx-1 rounded ${
                index + 1 === currentPage
                  ? "bg-[#6D28D9] text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
