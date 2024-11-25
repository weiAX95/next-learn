export function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  }

  export const formatCurrency = (amount: number) => {
    return (amount / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };


  export const generatePagination = (currentPage: number, totalPages: number) => {
    // 如果总页数小于7，直接返回所有页码
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    // 当前页码靠近开始
    if (currentPage < 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    // 当前页码靠近结束
    if (currentPage > totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    // 当前页码在中间
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };