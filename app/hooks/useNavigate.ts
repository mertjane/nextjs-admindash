import { useState } from "react";

const useNavigate = () => {
  const [page, setPage] = useState<string | null>(null);

  const navigate = (pageName: string) => {
    setPage(pageName);
  };

  return { page, navigate };
};

export default useNavigate;
