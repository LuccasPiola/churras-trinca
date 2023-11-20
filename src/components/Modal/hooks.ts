import { useEffect, useState } from 'react';

const styles: ReactModal.Styles = {
  content: {
    width: '35%',
    height: '600px',
    border: 0,
    borderRadius: '5px',
    margin: 'auto',
    boxSizing: 'border-box',
    opacity: 0,
    transition: 'all ease-in 0.5s',
    padding: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.90)',
    transition: 'all ease-in 0.5s',
    opacity: 0,
  },
};

const useModalState = (isOpen: boolean) => {
  const [actualStyles, setActualStyles] = useState(styles);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setActualStyles({
          content: {
            ...actualStyles.content,
            opacity: 1,
          },
          overlay: {
            ...actualStyles.overlay,
            opacity: 1,
          },
        });
      }, 0);

      return;
    }

    setActualStyles(styles);
  }, [actualStyles, isOpen]);

  return { actualStyles };
};

export default useModalState;
