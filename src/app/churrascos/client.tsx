'use client';

import Barbecue from '@/components/Barbecue';
import BottomIcon from '@/components/BottomIcon';
import Modal from '@/components/Modal';
import useBarbecuesState from './hooks';
import * as S from './styles';

export default function Barbecues({ barbecues, count }: BarbecuesResponseAPI) {
  const { actualPage, handlePageChange, modal } = useBarbecuesState();
  const { createModalIsOpen, setCreateModalIsOpen } = modal;

  const movePageLeft = () => handlePageChange('left');
  const movePageRight = () => handlePageChange('right');
  const openModal = () => setCreateModalIsOpen(true);
  const closeModal = () => setCreateModalIsOpen(false);

  return (
    <S.Wrapper>
      <S.Barbecues>
        {actualPage !== 1 && (
          <S.ArrowButton $isLeft onClick={movePageLeft}>
            <span>&#x2190;</span>
          </S.ArrowButton>
        )}

        {barbecues?.map((barbecue, index) => (
          <Barbecue key={barbecue.name + index} barbecue={barbecue} />
        ))}

        {count / 4 > actualPage && (
          <S.ArrowButton onClick={movePageRight}>
            <span>&#x2192;</span>
          </S.ArrowButton>
        )}
      </S.Barbecues>
      <BottomIcon onClick={openModal} />
      <Modal isOpen={createModalIsOpen} onRequestClose={closeModal} />
    </S.Wrapper>
  );
}
