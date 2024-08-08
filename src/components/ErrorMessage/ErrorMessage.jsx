import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("An error occurred!");

    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // 3000 мс = 3 секунди

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>Error! You will be redirected to the Home page shortly.</div>
  );
}