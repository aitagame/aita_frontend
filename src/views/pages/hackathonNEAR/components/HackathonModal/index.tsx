import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'views/components/Button';
import { Modal } from 'views/components/Modal';

export type HackathonModalStatus = 'error' | 'success';

const titles: Record<HackathonModalStatus, string> = {
  success: 'Successful!',
  error: 'Error!',
};

const subTitles = (name: string): Record<HackathonModalStatus, string> => ({
  success: `Yeeeh, ${name}! Near says "Hello"!`,
  error: `Oh now, ${name}. Seems Near is not connected.`,
});

interface HackathonModalProps {
  onClose: () => void;
  status: HackathonModalStatus;
  name: string;
}

export const HackathonModal: React.FC<HackathonModalProps> = ({ onClose, status, name }) => {
  const navigate = useNavigate();
  const onProceedClick = useCallback(() => {
    navigate('/profile');
  }, [navigate]);
  return (
    <Modal title={titles[status]} subtitle={subTitles(name)[status]} onClose={onClose}>
      {status === 'success' && (
        <Button size="large" onClick={onProceedClick}>
          Click here to continue
        </Button>
      )}
    </Modal>
  );
};
