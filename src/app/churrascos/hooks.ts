'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const useBarbecuesState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const [actualPage, setActualPage] = useState(Number(page) || 1);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [, startTransition] = useTransition();

  const handlePageChange = (action: 'left' | 'right') => {
    if (action === 'left') {
      const updatedPage = actualPage - 1;
      router.push('?page=' + updatedPage);
      setActualPage(updatedPage);
      return;
    }

    const updatedPage = actualPage + 1;
    router.push('?page=' + updatedPage);
    setActualPage(actualPage + 1);
  };

  useEffect(() => {
    startTransition(() => {
      router.refresh();
    });
  }, [router]);

  return {
    actualPage,
    handlePageChange,
    modal: { createModalIsOpen, setCreateModalIsOpen },
  };
};

export default useBarbecuesState;
