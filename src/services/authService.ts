const getTokenAndHeaders = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default getTokenAndHeaders;
